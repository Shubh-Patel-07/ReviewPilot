$WshShell = New-Object -ComObject WScript.Shell
$Shortcut = $WshShell.CreateShortcut("C:\Users\shubh\OneDrive\Desktop\ReviewAI.lnk")
$Shortcut.TargetPath = "C:\Users\shubh\OneDrive\Desktop\Start ReviewAI.bat"
$Shortcut.IconLocation = "C:\Users\shubh\OneDrive\Desktop\reviewai.ico"
$Shortcut.WorkingDirectory = "C:\Users\shubh\.gemini\antigravity\worktrees\ReviewPilot\build_reviewai_saas_platform\frontend"
$Shortcut.Description = "Launch ReviewAI SaaS Platform"
$Shortcut.Save()
Write-Host "Shortcut created successfully!"
