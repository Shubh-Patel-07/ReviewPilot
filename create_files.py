import os

def write_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w") as f:
        f.write(content)

# Services
write_file("backend/app/services/auth_service.py", """from passlib.context import CryptContext
from jose import jwt, JWTError
from datetime import datetime, timedelta
from app.config import settings

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM)
""")

write_file("backend/app/services/ai_service.py", """import openai
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
""")

write_file("backend/app/services/qr_service.py", """import qrcode
from io import BytesIO
from PIL import Image

def generate_qr(data: str, color="black"):
    qr = qrcode.QRCode(version=1, box_size=10, border=4)
    qr.add_data(data)
    qr.make(fit=True)
    img = qr.make_image(fill_color=color, back_color="white")
    buf = BytesIO()
    img.save(buf, format="PNG")
    return buf.getvalue()
""")

# Main and Routers
write_file("backend/app/main.py", """from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1.router import api_router
from app.config import settings
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded

limiter = Limiter(key_func=get_remote_address)

app = FastAPI(title=settings.PROJECT_NAME, version=settings.VERSION)
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix=settings.API_V1_STR)

@app.get("/health")
async def health_check():
    return {"status": "ok"}
""")

write_file("backend/app/api/v1/router.py", """from fastapi import APIRouter
from . import auth, business, qr, ai

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(business.router, prefix="/business", tags=["business"])
api_router.include_router(qr.router, prefix="/qr", tags=["qr"])
api_router.include_router(ai.router, prefix="/ai", tags=["ai"])
""")

write_file("backend/app/api/v1/auth.py", """from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from app.database import get_db
from app.schemas.schemas import UserCreate, UserResponse, Token
from app.services.auth_service import get_password_hash, create_access_token
from app.models.models import User
from datetime import timedelta
from app.config import settings

router = APIRouter()

@router.post("/register", response_model=UserResponse)
async def register(user: UserCreate, db: AsyncSession = Depends(get_db)):
    hashed_password = get_password_hash(user.password)
    db_user = User(email=user.email, hashed_password=hashed_password)
    db.add(db_user)
    await db.commit()
    await db.refresh(db_user)
    return db_user

@router.post("/login", response_model=Token)
async def login(user: UserCreate, db: AsyncSession = Depends(get_db)):
    # Simple mockup
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.email}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}
""")

write_file("backend/app/api/v1/business.py", """from fastapi import APIRouter, Depends
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
""")

write_file("backend/app/api/v1/qr.py", """from fastapi import APIRouter
from app.services.qr_service import generate_qr
from fastapi.responses import Response

router = APIRouter()

@router.get("/generate")
async def get_qr(data: str):
    img_bytes = generate_qr(data)
    return Response(content=img_bytes, media_type="image/png")
""")

write_file("backend/app/api/v1/ai.py", """from fastapi import APIRouter
from app.schemas.schemas import ReviewDraftCreate, ReviewDraftResponse
from app.services.ai_service import generate_review

router = APIRouter()

@router.post("/generate", response_model=ReviewDraftResponse)
async def generate_draft(draft: ReviewDraftCreate):
    content = await generate_review(draft.rating, draft.tone, draft.language)
    return {"id": 1, "content": content}
""")

print("Files generated successfully.")
