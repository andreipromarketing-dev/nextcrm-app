$WshShell = New-Object -ComObject WScript.Shell
$Shortcut = $WshShell.CreateShortcut("$env:USERPROFILE\Desktop\NextCRM.lnk")
$Shortcut.TargetPath = "D:\MY-LIFE-SYSTEM\nextcrm-app-main\start-crm.bat"
$Shortcut.Description = "Запустить NextCRM"
$Shortcut.Save()
Write-Host "Ярлык создан на рабочем столе!"