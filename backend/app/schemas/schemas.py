from pydantic import BaseModel, EmailStr
from typing import Optional, List, Dict, Any
from datetime import datetime

class UserBase(BaseModel):
    email: EmailStr
    is_active: Optional[bool] = True

class UserCreate(UserBase):
    password: str

class UserResponse(UserBase):
    id: int
    created_at: datetime
    class Config:
        from_attributes = True

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: Optional[str] = None

class BusinessCreate(BaseModel):
    name: str
    description: Optional[str] = None

class BusinessResponse(BaseModel):
    id: int
    owner_id: int
    name: str
    description: Optional[str]
    created_at: datetime
    class Config:
        from_attributes = True

class LocationCreate(BaseModel):
    name: str
    address: Optional[str] = None
    google_place_id: Optional[str] = None

class LocationResponse(BaseModel):
    id: int
    business_id: int
    name: str
    address: Optional[str]
    class Config:
        from_attributes = True

class QRCodeCreate(BaseModel):
    business_id: int
    location_id: Optional[int] = None
    design_config: Optional[Dict[str, Any]] = None

class QRCodeResponse(BaseModel):
    id: int
    image_url: Optional[str]
    short_url: Optional[str]
    class Config:
        from_attributes = True

class ReviewDraftCreate(BaseModel):
    rating: int
    language: Optional[str] = "en"
    tone: Optional[str] = "friendly"

class ReviewDraftResponse(BaseModel):
    id: int
    content: str
    class Config:
        from_attributes = True

class SubscriptionCreate(BaseModel):
    plan_id: int
    stripe_token: Optional[str] = None
