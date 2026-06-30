FROM python:3.14-slim

WORKDIR /app

# Install uv
COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /usr/local/bin/

# Copy dependency files
COPY pyproject.toml uv.lock* ./

# Install dependencies
RUN uv sync --frozen --no-dev

# Copy application source
COPY . .

# Expose the default MCP/SSE port
EXPOSE 8000

# Run the FastMCP server
CMD [ "uv", "run", "fastmcp", "run" ]
