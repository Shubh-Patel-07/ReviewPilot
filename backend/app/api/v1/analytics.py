from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.database import get_db

router = APIRouter()

@router.get("/dashboard")
async def get_dashboard_analytics(db: AsyncSession = Depends(get_db)):
    return {
        "total_scans": 1420,
        "total_drafts": 892,
        "avg_rating": 4.9,
        "conversion_rate": 62.8,
        "daily_stats": [
            {"date": "2026-08-01", "scans": 120, "drafts": 75},
            {"date": "2026-08-02", "scans": 150, "drafts": 95},
            {"date": "2026-08-03", "scans": 180, "drafts": 110},
        ],
        "top_keywords": [
            {"word": "coffee", "count": 142},
            {"word": "atmosphere", "count": 98},
            {"word": "friendly staff", "count": 86},
        ]
    }
