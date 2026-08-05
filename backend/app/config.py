from pydantic_settings import BaseSettings, SettingsConfigDict
from typing import Optional

class Settings(BaseSettings):
    PROJECT_NAME: str = "ReviewAI API"
    VERSION: str = "1.0.0"
    API_V1_STR: str = "/api/v1"
    
    # Database
    DATABASE_URL: str
    ASYNC_DATABASE_URL: str
    
    # Security
    SECRET_KEY: str
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7 # 7 days
    
    # External APIs
    OPENAI_API_KEY: str
    STRIPE_SECRET_KEY: str
    STRIPE_WEBHOOK_SECRET: str
    AWS_ACCESS_KEY_ID: Optional[str] = None
    AWS_SECRET_ACCESS_KEY: Optional[str] = None
    AWS_REGION: Optional[str] = "us-east-1"
    S3_BUCKET_NAME: Optional[str] = None
    
    # Optional Firebase
    FIREBASE_CREDENTIALS_JSON: Optional[str] = None
    
    model_config = SettingsConfigDict(env_file=".env", env_ignore_empty=True, extra="ignore")

settings = Settings()
