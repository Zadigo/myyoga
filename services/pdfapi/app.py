import pypdf
import fastmcp
import fastmcp.exceptions
from utils import load_pdfs
import models
from fastmcp.prompts import Message
from fastmcp.server.lifespan import lifespan
from key_value.aio.stores.redis import RedisStore
from fastmcp.server.event_store import EventStore
from fastmcp.server.context import Context
from fastmcp.server.middleware.caching import ResponseCachingMiddleware
from starlette.responses import JSONResponse
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware
from fastmcp.resources import ResourceResult, ResourceContent

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

@mcp.resource("ressource://files/{name}", description="Get the text content of a specific resource by name")
async def get_resource(ctx: Context, name: str) -> models.ResourceText:
    """
    Get the text of all the resources that match the given name. The function searches 
    for resources in the resources directory and extracts the text content from 
    the PDF files of the matching resources.

    Args:
        ctx (Context): The context of the request.
        name (str): The name of the resource.

    Returns:
        ResourceText: The text content of the specified resource.
    """
    candidates: list[models.Resource] = []
    for item in load_pdfs():
        logic = [
            name in item.title.lower(), 
            name in item.path.lower()
        ]

        if any(logic):
            candidates.append(item)

    if not candidates:
        raise fastmcp.exceptions.NotFoundError("Resources not found")
    
    ctx.info(f"Extracting text from resources: {[candidate.title for candidate in candidates]}")

    text: str = ''
    total_pages: int = 0
    
    for candidate in candidates:
        reader = pypdf.PdfReader(candidate.path)

        for page in reader.pages:
            text += page.extract_text() + '\n'
            total_pages += 1

    return ResourceResult(contents=text, meta={'pages': total_pages})


@mcp.resource('ressource://files', description="Get a list of all available resources")
async def get_resources(ctx: Context) -> list[models.Resource]:
    """
    Returns a list of all available resources in the resources directory. Each resource is represented as a 
    Resource model containing metadata such as title, publisher, author, email, received date, accepted date, 
    and the path to the resource file. The resources are loaded from the resources directory using the 
    load_pdfs() utility function.

    Returns:
        list[Resource]: A list of Resource models representing the available resources.
    """
    resources = load_pdfs()
    contents = [
        ResourceContent(content=item.model_dump(), mime_type='application/json', meta={'title': item.title}) 
        for item in resources
    ]
    return ResourceResult(contents=contents, meta={'count': len(resources)})


@mcp.prompt
async def ask_about_topic(topic: str) -> list[Message]:
    """Ask a question about a specific topic and get an answer.
    
    Args:
        topic (str): The topic to ask about.

    Returns:
        list[Message]: A list of Message objects containing the question and the answer.
    """
    return [
        Message(f"Can you tell me more about Yoga and in particular about {topic}?"),
        Message(f"I will help you with know about {topic}", role="assistant"),
    ]

app = mcp.http_app(middleware=[cache_middleware] + middleware, event_store=event_store)
