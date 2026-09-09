import os

import dotenv
from fastmcp import FastMCP
from fastmcp.resources import DirectoryResource
from fastmcp.server.event_store import EventStore
from fastmcp.server.lifespan import lifespan
from fastmcp.server.middleware.caching import ResponseCachingMiddleware
from fastmcp.server.providers import FileSystemProvider, SkillsDirectoryProvider
from key_value.aio.stores.redis import RedisStore
from mcp_types import (
    CompletionArgument,
    CompletionContext,
    PromptReference,
    ResourceTemplateReference,
)
from pydantic import AnyUrl
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware

from components.resources.constants import build_resources
from utils import BASE_DIR

dotenv.load_dotenv()


@lifespan
async def app_lifespan(app):
    yield


mcp = FastMCP(
    'My Yoga',
    lifespan=app_lifespan,
    on_duplicate='ignore',
    strict_input_validation=False,
    providers=[
        # ui_app,
        FileSystemProvider(BASE_DIR.joinpath('components'), reload=True),
        SkillsDirectoryProvider(BASE_DIR.joinpath(".claude", "skills"), reload=True)
    ],
)

redis_store = RedisStore(
    host=os.getenv('REDIS_HOST', 'localhost'),
    port=int(os.getenv('REDIS_PORT', 6379))
)

event_store = EventStore(
    storage=redis_store,
    max_events_per_stream=100,
    ttl=3600
)

cache_middleware = ResponseCachingMiddleware(
    cache_storage=redis_store
)

# Middlewares
middleware = [
    Middleware(
        CORSMiddleware,
        # Allow all origins; use specific origins for security
        allow_origins=['*'],
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

static_dir = BASE_DIR.joinpath('components', 'resources', 'static')
if static_dir.is_dir():
    static_resources = DirectoryResource(
        uri=AnyUrl("concepts://dataset/files"),
        path=static_dir,
        name="Dataset Documentation Files",
        description="Lists the documentation files available in the dataset resources directory.",
        recursive=True
    )

    mcp.add_resource(static_resources)


# Build and add all predefined resources to the MCP application.

build_resources(mcp)


@mcp.completion
async def completion(ref: PromptReference | ResourceTemplateReference, argument: CompletionArgument, context: CompletionContext | None = None):
    pass
