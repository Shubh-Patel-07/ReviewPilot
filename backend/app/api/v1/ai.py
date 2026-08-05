from fastapi import APIRouter
from app.schemas.schemas import ReviewDraftCreate, ReviewDraftResponse
from app.services.ai_service import generate_review

router = APIRouter()

@router.post("/generate", response_model=ReviewDraftResponse)
async def generate_draft(draft: ReviewDraftCreate):
    content = await generate_review(draft.rating, draft.tone, draft.language)
    return {"id": 1, "content": content}
