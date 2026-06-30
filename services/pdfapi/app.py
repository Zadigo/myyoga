from typing import Optional
import pypdf
import fastmcp
import fastmcp.exceptions
from utils import load_pdfs
import models
from fastmcp.prompts import Message
from fastmcp.server.lifespan import lifespan
from key_value.aio.stores.redis import RedisStore
from fastmcp.server.middleware.caching import ResponseCachingMiddleware

@lifespan
async def app_lifespan(app):
    try:
        await load_pdfs()
        yield {}
    except Exception:
        print("Shutting down...")

app = fastmcp.FastMCP(
    __name__,
    website_title="Yoga Studio",
    website_description="A simple yoga studio management system",
    lifespan=app_lifespan
)

# Distributed response cache
middleware = ResponseCachingMiddleware(
    cache_storage=RedisStore(host="localhost", port=6379)
)

@app.resource("/resources/{name}", methods=["GET"])
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


@app.resource("/resources", methods=["GET"])
async def get_resources() -> list[models.Resource]:
    return load_pdfs()


@app.prompt
async def ask_about_topic(topic: str) -> list[Message]:
    """Ask a question about a specific topic and get an answer."""
    return [
        Message(f"Can you tell me more about Yoga and in particular about {topic}?"),
        Message(f"I will help you with know about {topic}", role="assistant"),
    ]

# @app.tool(
#     title='Search PDF Files',
#     description="Search all the available PDF files for a given query",
#     tags=["PDF", "Search"],
# )
# async def search_pdf_files(query: str) -> list[models.Resource]:
#     result = await app.call_tool
#     result
