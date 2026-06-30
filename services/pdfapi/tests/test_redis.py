from utils import load_redis, load_pdfs
import redis
from models import Resource


def test_load_redis():
    instance = load_redis()
    assert isinstance(instance, redis.Redis)


def test_load_pdfs():
    resources = load_pdfs()
    assert isinstance(resources, list)
    if resources:
        assert isinstance(resources[0], Resource)

    for resource in resources:
        assert 'resources/studies/' in resource.path
