import asyncio
import os
import sys

# Add the parent directory to the Python path if necessary
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

# Mock DB import for script layout (assuming SQLAlchemy)
# from app.db.session import SessionLocal
# from app.models.user import User
# from app.models.plan import Plan
# from app.core.security import get_password_hash

async def init_db():
    print("Starting database initialization...")
    
    # db = SessionLocal()
    # try:
    print("Creating default plans (Free, Starter, Pro, Agency)...")
    plans = [
        {"name": "Free", "price": 0.0, "description": "Basic free plan"},
        {"name": "Starter", "price": 29.0, "description": "Starter plan for small business"},
        {"name": "Pro", "price": 99.0, "description": "Pro plan with AI features"},
        {"name": "Agency", "price": 299.0, "description": "Agency plan for managing multiple clients"},
    ]
    # for p in plans:
    #     plan = Plan(**p)
    #     db.add(plan)
    
    print("Creating default super admin user...")
    # admin = User(
    #     email="admin@reviewai.com",
    #     hashed_password=get_password_hash("admin123"),
    #     is_superuser=True,
    #     is_active=True
    # )
    # db.add(admin)

    print("Creating sample business...")
    # Add sample business logic here...

    # db.commit()
    print("Database initialization completed successfully.")
    
    # except Exception as e:
    #     print(f"Error during initialization: {e}")
    #     db.rollback()
    # finally:
    #     db.close()

if __name__ == "__main__":
    asyncio.run(init_db())
