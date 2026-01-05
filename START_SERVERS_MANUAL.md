# 🚀 Manual Server Start Commands

## Full Paths for Your System

**Project Root:**
```
C:\Users\pc\Desktop\DR-MUDDUS-MVP-MIRACLE-VALUE-PROPOSITION
```

---

## 📡 Terminal 1: Backend Server (Port 5000)

**Copy and paste this entire command:**

```powershell
cd C:\Users\pc\Desktop\DR-MUDDUS-MVP-MIRACLE-VALUE-PROPOSITION\server; npm run dev
```

**Or step by step:**
```powershell
cd C:\Users\pc\Desktop\DR-MUDDUS-MVP-MIRACLE-VALUE-PROPOSITION\server
npm run dev
```

**Expected Output:**
```
Server running on port 5000
Database connected
```

**Test Backend:**
Open browser: `http://localhost:5000/api/health`

---

## 🌐 Terminal 2: Frontend Server (Port 3002)

**Copy and paste this entire command:**

```powershell
cd C:\Users\pc\Desktop\DR-MUDDUS-MVP-MIRACLE-VALUE-PROPOSITION\web; npm run dev
```

**Or step by step:**
```powershell
cd C:\Users\pc\Desktop\DR-MUDDUS-MVP-MIRACLE-VALUE-PROPOSITION\web
npm run dev
```

**Expected Output:**
```
▲ Next.js 15.1.6
- Local:        http://localhost:3002
✓ Ready in 2.5s
```

**Test Frontend:**
Open browser: `http://localhost:3002`

---

## ✅ Quick Test URLs

After both servers are running:

1. **Homepage with Banners:**
   - http://localhost:3002
   - Should see: New Year/Pongal banner (red-orange) at top
   - Should see: Survey banner (blue) below hero section

2. **Tools Page:**
   - http://localhost:3002/tools
   - Should see: BMI, HOMA-IR, TyG Index calculator sections

3. **Backend Health Check:**
   - http://localhost:5000/api/health
   - Should return: `{"status":"ok",...}`

---

## 📋 What to Test

### Homepage (`http://localhost:3002`)
- ✅ New Year/Pongal banner visible at top (red-orange gradient)
- ✅ Survey banner visible below hero (blue background)
- ✅ Both banners are responsive (test on mobile view)
- ✅ Links work correctly

### Tools Page (`http://localhost:3002/tools`)
- ✅ Page loads without errors
- ✅ Three calculator sections visible
- ✅ CTA button links to `/assessment`

### Backend (`http://localhost:5000/api/health`)
- ✅ Returns JSON response
- ✅ Status is "ok"

---

## 🛑 To Stop Servers

Press `Ctrl + C` in each terminal window

---

## ⚠️ If Ports Are Already in Use

**Kill process on port 5000:**
```powershell
Stop-Process -Id (Get-NetTCPConnection -LocalPort 5000).OwningProcess -Force
```

**Kill process on port 3002:**
```powershell
Stop-Process -Id (Get-NetTCPConnection -LocalPort 3002).OwningProcess -Force
```

