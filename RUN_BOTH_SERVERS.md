# 🚀 Run Both Backend & Frontend Servers

## ✅ Quick Start - Two Terminals

You need **2 PowerShell windows** running at the same time:

---

## 📟 Terminal 1: Backend (Port 5000)

```powershell
cd C:\Users\MYPC\Desktop\DR-MUDDUS-MVP-MIRACLE-VALUE-PROPOSITION\server
npm run dev
```

**Expected Output:**
```
✅ Database connected!
✅ Server running on port 5000
```

**Keep this terminal running!** ⚠️

---

## 📟 Terminal 2: Frontend (Port 3000)

```powershell
cd C:\Users\MYPC\Desktop\DR-MUDDUS-MVP-MIRACLE-VALUE-PROPOSITION\web
npm run dev
```

**Expected Output:**
```
  ▲ Next.js 14.2.0
  - Local:        http://localhost:3000

 ✓ Ready in 7.4s
```

**Keep this terminal running too!** ⚠️

---

## ✅ Verify Both Are Running

### Check Backend:
Open in browser: http://localhost:5000/api/health

**Should show:**
```json
{
  "status": "ok",
  "timestamp": "2024-12-02T...",
  "database": "connected"
}
```

### Check Frontend:
Open in browser: http://localhost:3000

**Should show:** Landing page with "Reverse Metabolic Disease in 90 Days"

---

## 🎯 Full Setup (First Time)

### Terminal 1: Backend Setup
```powershell
# Navigate to server
cd C:\Users\MYPC\Desktop\DR-MUDDUS-MVP-MIRACLE-VALUE-PROPOSITION\server

# Install dependencies (first time only)
npm install

# Create .env file (if not exists)
# Copy this content:
@"
DATABASE_URL=postgresql://neondb_owner:npg_zUbO5HZ9kDur@ep-icy-dream-ah5xlk96-pooler.c-3.us-east-1.aws.neon.tech/drmuddusmvp1?sslmode=require
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production-12345
PORT=5000
"@ | Out-File -FilePath .env -Encoding utf8

# Start backend
npm run dev
```

### Terminal 2: Frontend Setup
```powershell
# Navigate to web
cd C:\Users\MYPC\Desktop\DR-MUDDUS-MVP-MIRACLE-VALUE-PROPOSITION\web

# Install dependencies (first time only)
npm install

# Create .env.local file (if not exists)
@"
NEXT_PUBLIC_API_URL=http://localhost:5000/api
"@ | Out-File -FilePath .env.local -Encoding utf8

# Start frontend
npm run dev
```

---

## 🔄 Daily Usage (After Setup)

### Open 2 PowerShell windows:

**Window 1 - Backend:**
```powershell
cd C:\Users\MYPC\Desktop\DR-MUDDUS-MVP-MIRACLE-VALUE-PROPOSITION\server
npm run dev
```

**Window 2 - Frontend:**
```powershell
cd C:\Users\MYPC\Desktop\DR-MUDDUS-MVP-MIRACLE-VALUE-PROPOSITION\web
npm run dev
```

**Wait for both to start, then open:** http://localhost:3000

---

## 🛑 How to Stop Servers

In each terminal window, press:
```
Ctrl + C
```

Then confirm with `Y` if asked.

---

## 📊 Architecture Diagram

```
┌─────────────────────────────────────────┐
│  Terminal 1: Backend                    │
│  Port: 5000                             │
│  Status: ✅ Running                     │
│  Command: npm run dev                   │
└─────────────────────────────────────────┘
                    ↕
          Database Connection
                    ↕
┌─────────────────────────────────────────┐
│  Neon PostgreSQL                        │
│  Tables: users, patient_assessments     │
└─────────────────────────────────────────┘
                    ↕
              API Calls
                    ↕
┌─────────────────────────────────────────┐
│  Terminal 2: Frontend                   │
│  Port: 3000                             │
│  Status: ✅ Running                     │
│  Command: npm run dev                   │
└─────────────────────────────────────────┘
                    ↕
┌─────────────────────────────────────────┐
│  Browser: http://localhost:3000         │
│  User Interface                         │
└─────────────────────────────────────────┘
```

---

## 🐛 Troubleshooting

### Backend won't start:
```powershell
# Check if port 5000 is in use
Get-NetTCPConnection -LocalPort 5000 -ErrorAction SilentlyContinue

# If something is using it, kill it:
Stop-Process -Id (Get-NetTCPConnection -LocalPort 5000).OwningProcess -Force

# Try again
npm run dev
```

### Frontend won't start:
```powershell
# Check if port 3000 is in use
Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue

# If something is using it, kill it:
Stop-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess -Force

# Try again
npm run dev
```

### "Cannot connect to backend" error:
1. ✅ Backend must be running FIRST
2. ✅ Check backend is on port 5000
3. ✅ Check `.env.local` has correct URL: `http://localhost:5000/api`
4. ✅ Restart both servers

### Database connection error:
1. ✅ Check `.env` file in `/server` folder
2. ✅ Verify `DATABASE_URL` is correct
3. ✅ Test connection: http://localhost:5000/api/health

---

## ✅ Success Checklist

- [ ] Backend terminal shows "Server running on port 5000"
- [ ] Frontend terminal shows "Ready in X.Xs"
- [ ] http://localhost:5000/api/health returns JSON
- [ ] http://localhost:3000 shows landing page
- [ ] No errors in either terminal
- [ ] Browser console has no errors

---

## 📋 Quick Reference

| Component | Port | URL | Status |
|-----------|------|-----|--------|
| **Backend** | 5000 | http://localhost:5000/api | Must run first |
| **Frontend** | 3000 | http://localhost:3000 | Connects to backend |
| **Database** | Cloud | Neon PostgreSQL | Always available |

---

## 🎯 Testing Checklist

Once both servers are running:

1. ✅ Open http://localhost:3000
2. ✅ Click "Start Your Assessment"
3. ✅ Create account (signup)
4. ✅ Fill assessment form
5. ✅ Submit → See dashboard with metrics

**Both servers must stay running during testing!**

---

## 💡 Pro Tips

1. **Use 2 separate PowerShell windows** - easier to see logs
2. **Start backend first** - frontend needs it
3. **Keep both running** - don't close terminals while testing
4. **Check logs** - errors will show in the terminal
5. **Refresh browser** if changes don't appear

---

## 📞 Contact

**Dr. Muddu Surendra Nehru**  
Professor of Medicine  
📱 09963721999

---

**Remember: BOTH servers must be running for the app to work!** 🚀

