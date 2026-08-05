from fastapi import APIRouter
from app.services.qr_service import generate_qr
from fastapi.responses import Response

router = APIRouter()

@router.get("/generate")
async def get_qr(data: str):
    img_bytes = generate_qr(data)
    return Response(content=img_bytes, media_type="image/png")
