import pydantic
from pydantic import Field


class ResearchPaperModel(pydantic.BaseModel):
    title: str = Field(
        description="The title of the research paper"
    )
    publisher: str = Field(
        description="The publisher of the research paper"
    )
    author: str = Field(
        description="The author of the research paper"
    )
    email: str = Field(
        description="The email of the author of the research paper"
    )
    received: str = Field(
        description="The date the research paper was received"
    )
    accepted: str = Field(
        description="The date the research paper was accepted"
    )
    path: str = Field(
        description="The path to the research paper file"
    )
