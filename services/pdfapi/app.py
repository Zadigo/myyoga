from typing import Optional
import pypdf
import fastmcp
import fastmcp.exceptions
from utils import load_pdfs
import models
from fastmcp.prompts import Message
from fastmcp.server.lifespan import lifespan
from key_value.aio.stores.redis import RedisStore
from fastmcp.server.event_store import EventStore
from fastmcp.server.middleware.caching import ResponseCachingMiddleware
from starlette.responses import JSONResponse
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware

@lifespan
async def app_lifespan(app):
    load_pdfs()
    yield
    # try:
    # except Exception:
    #     print("Shutting down...")

mcp = fastmcp.FastMCP(
    __name__,
    lifespan=app_lifespan
)

# Distributed response cache
redis_store = RedisStore(host='localhost', port=6379)
event_store = EventStore(storage=redis_store, max_events_per_stream=100, ttl=3600)
cache_middleware = ResponseCachingMiddleware(cache_storage=redis_store)

# Middlewares
middleware = [
    Middleware(
        CORSMiddleware,
        allow_origins=['*'],  # Allow all origins; use specific origins for security
        allow_methods=['*'],
        allow_headers=[
            'mcp-protocol-version',
            'mcp-session-id',
            'Authorization',
            'Content-Type',
        ],
        expose_headers=['mcp-session-id'],
    )
]

@mcp.custom_route('/health', methods=["GET"])
async def health_check(request):
    return JSONResponse({"status": "healthy", "service": "mcp-server"})

@mcp.resource("ressource://files/{name}")
async def get_resource(name: str) -> models.ResourceText:
    selected_resource: Optional[models.Resource] = None

    for item in load_pdfs():
        if item.name == name:
            selected_resource = item
            break

    if selected_resource is None:
        raise fastmcp.exceptions.NotFoundError("Resource not found")

    reader = pypdf.PdfReader(selected_resource.path)
    text: str = ''

    for page in reader.pages:
        text += page.extract_text() + '\n'

    resource_text = models.ResourceText(pages=reader.get_num_pages(), text=text)
    return resource_text


@mcp.resource('ressource://files')
async def get_resources() -> list[models.Resource]:
    return load_pdfs()


@mcp.prompt
async def ask_about_topic(topic: str) -> list[Message]:
    """Ask a question about a specific topic and get an answer."""
    return [
        Message(f"Can you tell me more about Yoga and in particular about {topic}?"),
        Message(f"I will help you with know about {topic}", role="assistant"),
    ]

app = mcp.http_app(middleware=[cache_middleware] + middleware, event_store=event_store)
