from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

@router.get("/plans")
async def get_plans():
    return [
        {"id": "free", "name": "Free", "price": 0, "qr_limit": 1, "scan_limit": 100},
        {"id": "starter", "name": "Starter", "price": 19, "qr_limit": 5, "scan_limit": 1000},
        {"id": "pro", "name": "Pro", "price": 49, "qr_limit": 25, "scan_limit": 10000},
        {"id": "agency", "name": "Agency", "price": 149, "qr_limit": 100, "scan_limit": 100000},
    ]
