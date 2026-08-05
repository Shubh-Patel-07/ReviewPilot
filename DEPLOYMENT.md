# Deployment Guide

This guide covers deploying the ReviewAI platform using modern cloud providers.

## Architecture Stack
- **Frontend**: Vercel
- **Backend**: Railway
- **Database**: Supabase (PostgreSQL)
- **Storage**: Cloudflare R2

## 1. Database (Supabase)
1. Create a new Supabase project.
2. Get the `DATABASE_URL` (Connection String > URI).
3. Update backend `.env` variables with the connection string.

## 2. Backend (Railway)
1. Link your GitHub repository to Railway.
2. Set the root directory to `/backend`.
3. Add the following environment variables:
   - `DATABASE_URL`
   - `REDIS_URL` (Provision a Redis instance on Railway)
   - `SECRET_KEY`
   - `OPENAI_API_KEY`
4. Deploy the backend service.

## 3. Frontend (Vercel)
1. Link your GitHub repository to Vercel.
2. Set the root directory to `/frontend`.
3. Add environment variables:
   - `NEXT_PUBLIC_API_URL` (Point to your Railway backend URL)
4. Deploy the frontend.

## 4. Storage (Cloudflare R2)
1. Create a new R2 bucket in Cloudflare.
2. Generate API tokens for S3 compatibility.
3. Add the credentials to the backend environment variables:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - `AWS_S3_ENDPOINT_URL`
