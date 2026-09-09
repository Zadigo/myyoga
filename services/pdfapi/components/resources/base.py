import json

import aiofile
import pandas
from fastmcp.resources import FileResource, ResourceContent, ResourceResult, resource

from models import ResearchPaperModel
from utils import RESOURCES_DIR


async def load_references() -> pandas.DataFrame:
    async with aiofile.async_open(RESOURCES_DIR / 'references.json', 'r') as f:
        content = await f.read()
        validated_content = [ResearchPaperModel(**item) for item in json.loads(content)]
        return pandas.read_json(json.dumps([item.model_dump() for item in validated_content]))


async def get_research_paper_path(name: str):
    if not name.endswith('.pdf'):
        name += '.pdf'
    return RESOURCES_DIR / name


@resource("ressource://files/{name}")
async def get_resource(name: str) -> ResourceResult:
    """
    Get the text of all the resources that match the given name. The function searches 
    for resources in the resources directory and extracts the text content from 
    the PDF files of the matching resources.

    Args:
        ctx (Context): The context of the request.
        name (str): The name of the resource.

    Returns:
        ResourceResult: The text content of the specified resource.
    """
    df = await load_references()
    df = df[df['title'].str.contains(name, case=False) | df['path'].str.contains(name, case=False)]

    if df.empty:
        return ResourceResult(contents='', meta={'pages': 0})

    path = await get_research_paper_path(df.iloc[0]['path'])
    return ResourceResult(
        contents=[
            ResourceContent(
                content=FileResource(
                    title='Some title',
                    description='Some description',
                    path=path
                )
            )
        ]
    )


@resource('ressource://files')
async def get_resources():
    pass

