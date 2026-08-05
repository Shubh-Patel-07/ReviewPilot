from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.database import get_db
from app.schemas.schemas import BusinessCreate, BusinessResponse
from app.models.models import Business

router = APIRouter()

@router.post("/", response_model=BusinessResponse)
async def create_business(business: BusinessCreate, db: AsyncSession = Depends(get_db)):
    db_biz = Business(**business.dict(), owner_id=1) # Mock owner
    db.add(db_biz)
    await db.commit()
    await db.refresh(db_biz)
    return db_biz
