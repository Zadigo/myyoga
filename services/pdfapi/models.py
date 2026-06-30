import pydantic
from constants import RESOURCES_DIR

class Resource(pydantic.BaseModel):
    title: str
    publisher: str
    author: str
    email: str
    received: str
    accepted: str
    path: str

    @pydantic.field_validator('path')
    @classmethod
    def validate_path(cls, value: str):
        if value.startswith('/'):
            raise ValueError("Path must not start with a forward slash '/'")
        
        fullpath = RESOURCES_DIR.joinpath('studies', value)
        if not fullpath.exists():
            raise ValueError(f"Path '{value}' does not exist in the resources directory.")
        
        if not fullpath.is_file():
            raise ValueError(f"Path '{value}' is not a file.")
        
        if not fullpath.suffix == '.pdf':
            raise ValueError(f"Path '{value}' is not a PDF file.")

        return str(fullpath)



class ResourceText(pydantic.BaseModel):
    pages: int
    text: str
