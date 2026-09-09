import os
import pathlib

import redis

BASE_DIR = pathlib.Path(__file__).parent.absolute()

RESOURCES_DIR = BASE_DIR / 'resources' / 'static'

STORAGE_KEY = 'pdfapi:{name}'


def get_redis() -> redis.Redis:
    instance = redis.Redis(
        host=os.getenv('REDIS_HOST', 'localhost'),
        port=int(os.getenv('REDIS_PORT', 6379)),
        db=0
    )
    try:
        instance.ping()
    except redis.ConnectionError:
        raise RuntimeError(
            "Redis server is not running. Please start the Redis server and try again.")
    else:
        return instance
