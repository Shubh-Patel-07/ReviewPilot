import openai
from app.config import settings

openai.api_key = settings.OPENAI_API_KEY

SYSTEM_PROMPT = """You are an expert Google review writer for local businesses.
Your objective is to generate a completely unique, authentic, human-sounding review every single time.

STRICT WRITING RULES:
- Never repeat previous outputs or use repetitive templates.
- Vary sentence structure, vocabulary, and paragraph organization.
- Write like a real human customer sharing their genuine experience.
- Randomly select review length:
  * Short (20-40 words)
  * Medium (50-80 words)
  * Detailed (80-120 words)
- Randomly select writing style: casual, enthusiastic, storytelling, concise, or observational.
- Use unique opening lines and wrap-ups. NEVER start with generic clichés like "Excellent service" or "Great experience".
- Make every review feel original, specific, and natural.
- Rating aware: 4-5 stars should sound delighted and appreciative; 1-3 stars should sound constructive, honest, or balanced.
- Output ONLY the final review text without quotation marks, titles, or explanations.
"""

async def generate_review(business_name: str, rating: int, customer_feedback: str = "", tone: str = "Enthusiastic", language: str = "English"):
    user_prompt = f"""Business Name: {business_name}
Customer Rating: {rating} out of 5 Stars
Customer Notes/Highlights: {customer_feedback if customer_feedback else 'No extra notes provided'}
Tone: {tone}
Language: {language}

Generate a unique, human-like review following all writing rules."""

    try:
        if settings.OPENAI_API_KEY:
            response = await openai.ChatCompletion.acreate(
                model=settings.AI_MODEL or "gpt-4o-mini",
                messages=[
                    {"role": "system", "content": SYSTEM_PROMPT},
                    {"role": "user", "content": user_prompt}
                ],
                max_tokens=200,
                temperature=0.9
            )
            return response.choices[0].message.content.strip().strip('"')
        else:
            # Fallback high-variety generator if API key not provided
            return _generate_fallback_unique_review(business_name, rating, customer_feedback)
    except Exception as e:
        return _generate_fallback_unique_review(business_name, rating, customer_feedback)

def _generate_fallback_unique_review(business_name: str, rating: int, customer_feedback: str) -> str:
    import random
    
    short_openings = [
        f"Stopped by {business_name} today and was thoroughly impressed.",
        f"I've been hearing about {business_name} for a while and finally tried it.",
        f"Honestly, {business_name} exceeded what I was expecting.",
        f"Quick shoutout to the team at {business_name}!",
        f"Just left {business_name} and felt compelled to drop a quick review.",
    ]
    
    mid_details = [
        f"The atmosphere felt super welcoming from the moment I walked in. {customer_feedback if customer_feedback else 'Every detail was handled with care.'}",
        f"Staff members were friendly, attentive, and genuinely cared about my satisfaction. {customer_feedback if customer_feedback else ''}",
        f"Quality was top-notch and the turnaround time was surprisingly fast. {customer_feedback if customer_feedback else ''}",
    ]
    
    endings = [
        "Will definitely be coming back again soon!",
        "10/10 recommend checking them out if you haven't already.",
        "Couldn't have asked for a better experience overall.",
        "Definitely earned a spot on my list of favorites.",
    ]
    
    return f"{random.choice(short_openings)} {random.choice(mid_details)} {random.choice(endings)}"
