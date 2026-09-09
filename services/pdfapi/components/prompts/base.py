from fastmcp.prompts import Message, prompt


@prompt
async def ask_about_topic(topic: str) -> list[Message]:
    """Ask a question about a specific topic and get an answer.

    Args:
        topic (str): The topic to ask about.

    Returns:
        list[Message]: A list of Message objects containing the question and the answer.
    """
    return [
        Message(
            f"Can you tell me more about Yoga and in particular about {topic}?"),
        Message(f"I will help you with know about {topic}", role="assistant"),
    ]
