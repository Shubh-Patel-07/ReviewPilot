# ReviewAI Platform

## Overview
ReviewAI is a SaaS platform that leverages AI to enhance and automate review responses and analysis for businesses. 

## Features
- Smart QR code review routing.
- AI-generated responses for customer reviews.
- Analytics dashboard for review sentiment and metrics.
- Role-based access control (Super Admin, Agency, Business Owner, Staff).

## Architecture
- **Frontend**: Next.js (React), Tailwind CSS
- **Backend**: FastAPI (Python)
- **Database**: PostgreSQL (managed via SQLAlchemy / Supabase in prod)
- **Cache**: Redis
- **Storage**: Cloudflare R2 / AWS S3

## Local Development
To run this project locally, you can use Docker Compose.

1. Copy `.env.example` to `.env` in the root, `frontend`, and `backend` directories.
2. Run `docker-compose up --build`
3. Access the frontend at `http://localhost:3000` and backend API docs at `http://localhost:8000/docs`.
4. Initialize the DB: `docker-compose exec backend python scripts/init_db.py`

## User Roles
1. **Super Admin**: Platform owner, manages agencies and billing.
2. **Agency**: Manages multiple business clients.
3. **Business Owner**: Manages their specific business location(s) and staff.
4. **Staff**: Read-only or response-only access for a single business.

## API Endpoints
- `/api/v1/auth/*`: Authentication and JWT management.
- `/api/v1/reviews/*`: CRUD and AI responses for reviews.
- `/api/v1/analytics/*`: Dashboard metrics.
- `/api/v1/businesses/*`: Business management.

## QR & AI Flow
1. Customer scans QR code -> Directed to ReviewAI landing page.
2. Positive feedback -> Redirected to Google/Yelp.
3. Negative feedback -> Internal feedback form.
4. Review ingested -> AI processes sentiment and drafts response.
