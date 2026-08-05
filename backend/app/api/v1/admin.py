from fastapi import APIRouter

router = APIRouter()

@router.get("/stats")
async def get_super_admin_stats():
    return {
        "total_businesses": 342,
        "active_users": 518,
        "total_qr_codes": 1280,
        "total_scans": 142050,
        "total_review_drafts": 45210,
        "total_revenue": 18450.00,
        "monthly_growth": [
            {"month": "May", "businesses": 210, "revenue": 12000},
            {"month": "Jun", "businesses": 280, "revenue": 15200},
            {"month": "Jul", "businesses": 342, "revenue": 18450},
        ]
    }
