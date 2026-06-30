import json
import redis
from models import Resource
from constants import RESOURCES_DIR
import os

STORAGE_KEY = 'pdfapi:{name}'


def load_pdfs() -> list[Resource]:
    storage = STORAGE_KEY.format(name='resources')
    instance = load_redis()
    data = instance.get(storage)
    if data is None or data == b'':
        with RESOURCES_DIR.joinpath('resources.json').open() as f:
            resources = json.load(f)
            instance.set(storage, json.dumps(resources))
    else:
        resources = json.loads(data)
    return [Resource(**resource) for resource in resources]


def load_redis() -> redis.Redis:
    instance = redis.Redis(
        host=os.getenv('REDIS_HOST', 'localhost'),
        port=int(os.getenv('REDIS_PORT', 6379)),
        db=0
    )
    try:
        instance.ping()
    except redis.exceptions.ConnectionError:
        raise RuntimeError(
            "Redis server is not running. Please start the Redis server and try again.")
    else:
        return instance


def read_pdf_files(resource: Resource):
    pass
