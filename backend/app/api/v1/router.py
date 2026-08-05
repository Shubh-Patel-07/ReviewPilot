from fastapi import APIRouter
from . import auth, business, qr, ai, analytics, subscription, admin

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(business.router, prefix="/business", tags=["business"])
api_router.include_router(qr.router, prefix="/qr", tags=["qr"])
api_router.include_router(ai.router, prefix="/ai", tags=["ai"])
api_router.include_router(analytics.router, prefix="/analytics", tags=["analytics"])
api_router.include_router(subscription.router, prefix="/subscription", tags=["subscription"])
api_router.include_router(admin.router, prefix="/admin", tags=["admin"])
