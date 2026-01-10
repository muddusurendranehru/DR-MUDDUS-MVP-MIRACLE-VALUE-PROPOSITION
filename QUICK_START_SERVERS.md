# 🚀 Quick Start - Both Servers (Full Paths)

## Copy & Paste These Commands

### Terminal 1 - Backend Server (Port 5000):
```powershell
cd C:\Users\pc\Desktop\DR-MUDDUS-MVP-MIRACLE-VALUE-PROPOSITION\server
npm run dev
```

### Terminal 2 - Frontend Server (Port 3002):
```powershell
cd C:\Users\pc\Desktop\DR-MUDDUS-MVP-MIRACLE-VALUE-PROPOSITION\web
npm run dev
```

---

## Or Use the Script (From Project Root):
```powershell
cd C:\Users\pc\Desktop\DR-MUDDUS-MVP-MIRACLE-VALUE-PROPOSITION
.\start-servers.ps1
```

---

## Server URLs After Starting:

- **Backend API:** http://localhost:5000/api/health
- **Frontend:** http://localhost:3002

---

## Quick Verification:

### Test Backend:
```powershell
curl http://localhost:5000/api/health
```

### Test Frontend:
Open browser: http://localhost:3002

---

## Stop Servers:

Press `Ctrl+C` in each terminal window.

