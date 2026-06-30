import pytest
from fastmcp.client import Client

@pytest.mark.client_process
async def test_stdio_transport():
    """Test STDIO transport with separate process."""
    # This spawns a subprocess
    async with Client('stdio') as client:
        result = await client.call_tool("echo", {"message": "test"})
        assert result.content[0].text == "test"
