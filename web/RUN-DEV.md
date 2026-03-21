# Run dev locally

**Run backend first, then frontend.** Auth and API need the server.

---

## 1. Backend (server) – run first

**Full path:**
```
c:\Users\MYPC\Desktop\DR-MUDDUS-MVP-MIRACLE-VALUE-PROPOSITION\server
```

```powershell
cd c:\Users\MYPC\Desktop\DR-MUDDUS-MVP-MIRACLE-VALUE-PROPOSITION\server
npm run dev
```

API: **http://localhost:5000** — keep this terminal open.

---

## 2. Frontend (web) – run second

**Full path:**
```
c:\Users\MYPC\Desktop\DR-MUDDUS-MVP-MIRACLE-VALUE-PROPOSITION\web
```

```powershell
cd c:\Users\MYPC\Desktop\DR-MUDDUS-MVP-MIRACLE-VALUE-PROPOSITION\web
npm run dev
```

App: **http://localhost:3002**

---

## If black screen remains — run backend too

Open a **second terminal** in Cursor (click **+** next to the terminal tab):

```powershell
cd c:\Users\MYPC\Desktop\DR-MUDDUS-MVP-MIRACLE-VALUE-PROPOSITION\server
npm run dev
```

Keep that terminal open (API on **http://localhost:5000**), then check **http://localhost:3002** again. Dashboard and auth need the backend.

---

## Notes

- **Database:** `server/.env` and `web/.env.local` use Neon DB `drmuddusmvp1`. No env change needed.
- **404 (image):** Dr. Muddu + Chiranjeevi image now loads from Render URL; no more missing image 404.
- **report-hmr-latency.js 404:** Next.js dev-only (Fast Refresh). Harmless; ignore in development. Does not appear in production.
- **Sign-up:** Ensure `NEXT_PUBLIC_API_URL` in `web/.env.local` points to your backend (e.g. `http://localhost:5000/api` for local). Backend must be running for sign-up/login to work.
