from typing import Any

from fastmcp import FastMCP
from fastmcp.resources import FileResource
from pydantic import AnyUrl

from utils import RESOURCES_DIR

RESOURCE_DEFINITIONS: list[dict[str, Any]] = [
    {
        "uri": "concepts://dataset/readme",
        "path": RESOURCES_DIR / "README.md",
        "name": "INSEE Dataset Overview",
        "description": "Overview of the Yoga research references.",
        "category": "documentation",
    }
]


def build_resources(app: FastMCP):
    """Build and add all predefined resources to 
    the given FastMCP application."""
    for resource in RESOURCE_DEFINITIONS:
        path = resource["path"]

        if not path.is_file():
            continue

        app.add_resource(
            FileResource(
                uri=AnyUrl(resource["uri"]),
                path=path,
                name=resource["name"],
                description=resource["description"],
                mime_type="text/markdown",
                tags={"documentation", resource["category"]},
            )
        )
