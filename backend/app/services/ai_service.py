import openai
from app.config import settings
import json

openai.api_key = settings.OPENAI_API_KEY

async def generate_review(rating: int, tone: str, language: str):
    prompt = f"Write a {rating}-star review for a business. Tone: {tone}. Language: {language}."
    try:
        response = await openai.ChatCompletion.acreate(
            model="gpt-4",
            messages=[{"role": "user", "content": prompt}],
            max_tokens=150
        )
        return response.choices[0].message.content.strip()
    except Exception as e:
        return str(e)
