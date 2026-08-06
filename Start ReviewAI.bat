@echo off
title ReviewAI SaaS Server Launcher
color 0B
echo =======================================================
echo              Starting ReviewAI SaaS Platform...
echo =======================================================
echo.

:: 1. Kill any existing stuck node processes cleanly
echo [1/3] Cleaning previous background instances...
taskkill /f /im node.exe >nul 2>&1

:: 2. Change directory to frontend
cd /d "C:\Users\shubh\.gemini\antigravity\worktrees\ReviewPilot\build_reviewai_saas_platform\frontend"

:: 3. Start Next.js server in background with network support
echo [2/3] Starting Next.js Dev Server (-H 0.0.0.0)...
start /b npx.cmd next dev -H 0.0.0.0

:: 4. Wait 4 seconds for server to initialize
echo [3/3] Waiting for server to initialize...
timeout /t 4 /nobreak >nul

:: 5. Open browser cleanly at localhost:3000
echo Opening ReviewAI in Browser...
start "" "http://localhost:3000"

echo.
echo =======================================================
echo  ReviewAI is live at http://localhost:3000
echo  Mobile Access: http://172.20.10.2:3000
echo =======================================================
echo.
