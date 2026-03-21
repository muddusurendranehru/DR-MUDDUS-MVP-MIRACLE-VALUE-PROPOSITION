# Science of Our App & What We Achieved

**Dr. Muddu Surendra Nehru M.D. • Professor of Medicine • Senior Physician • World's First Physician to Develop AI-Based Web App for Nutrition, Health Metrics, Drug Trials**

---

## 1. Tech stack & architecture

| Layer | Technology | Role |
|-------|------------|------|
| **Frontend** | Next.js 15 (App Router), TypeScript, Tailwind CSS | SEO-friendly pages, calculators, auth UI, dashboard |
| **Backend** | Node.js, Express | REST API, JWT auth, business logic |
| **Database** | Neon PostgreSQL | Users, assessments, persistent data |
| **Deploy** | Render | Frontend + backend; env-based config |
| **Auth** | JWT (backend) + localStorage/sessionStorage | Sign up, login, protected routes |

**Data flow:** Browser → Next.js (web) → Express API (server) → Neon Postgres. No DB access from frontend; all data via backend APIs.

**High-level tree:**

```
DR-MUDDUS-MVP-MIRACLE-VALUE-PROPOSITION/
├── web/                    # Next.js frontend
│   ├── app/                # App Router: pages, auth, dashboard, conditions, tools
│   ├── components/         # Shared UI (hero, conversion, gallery, etc.)
│   ├── lib/                # api.ts, auth-context
│   └── public/             # Static assets, images, PWA
├── server/                 # Express backend
│   ├── server.js           # Entry, routes, middleware
│   ├── db/                 # Neon connection, queries
│   └── .env                # DATABASE_URL, JWT_SECRET, PORT
└── SCIENCE_AND_ACHIEVEMENTS.md (this file)
```

---

## 2. Science of the app

- **Metabolic-first care:** HOMA-IR, TyG index, waist-to-height ratio (WHtR), waist-to-hip ratio (WHR) as core metrics for insulin resistance and cardiovascular risk.
- **Free, no-signup calculators:** Public tools for metabolic risk (e.g. “Free Metabolic Heart Diabetes Risk Check – No Cost, No Signup”) to lower friction and spread evidence-based metrics.
- **Structured assessments:** User sign-up → assessment flow → stored in DB; supports follow-up, reports, and remission tracking (e.g. 85% remission rate messaging).
- **Evidence-based messaging:** 30+ years experience, Professor of Medicine, outcomes since 2000; trusted by patients from ISB, IIIT, families near IKEA Gachibowli; appreciated by Megastar Chiranjeevi.
- **AI health app pioneer:** Positioned as world’s first physician-developed AI-based web app for nutrition, health metrics, and drug trials—aligning with the “World's First AI Health App Pioneer” tagline.

---

## 3. What we achieved

- **Full-stack MVP:** Frontend (Next.js) and backend (Express) with Neon Postgres; insert/fetch working; auth (sign up, login, JWT) and redirect to dashboard/assessment.
- **SEO & discovery:** Dynamic metadata, conditions pages, sitemap, robots, internal links (conditions, blog, pricing); ready for GSC and GBP.
- **Mobile-first UI:** Tailwind-based layout; header (Dr. Muddu, 09963721999, JOIN/DONATE/FRANCHISE); CTAs to free assessment and Google Form; “Need help?” (Packages, Videos, WhatsApp).
- **Repairs applied:** Missing Dr. Muddu + Chiranjeevi image 404 fixed (image now served from Render URL). Sign-up flow wired to backend; 404 from `report-hmr-latency.js` explained as dev-only HMR (harmless).
- **Clear run instructions:** Full path and commands for `cd web` and `npm run dev` (and optional server run) in `web/RUN-DEV.md`.

---

## 4. How to “grok” the codebase

1. **Start from the stack:** Next.js (static/SSR) + Express (API) + Neon (single DB). DB name is project-specific (e.g. `drmuddusmvp1`), not “heart”.
2. **Auth flow:** Sign up (email, password, confirm, optional phone) → POST `/auth/signup` → JWT + user → redirect to assessment or dashboard. Login → POST `/auth/login` → same token flow.
3. **Images:** Dr. Muddu + Chiranjeevi uses Render URL (`og-chiranjeevi.jpg`). Other assets under `web/public/images` and `web/public/media`.
4. **Errors:** 404 on image → fixed. 404 on `report-hmr-latency.js` → dev-only, ignore. Sign-up errors → check backend running and `NEXT_PUBLIC_API_URL` in `web/.env.local`.

---

**Contact:** 09963721999 • JOIN/COLLABORATE/FRANCHISE/DONATE • www.homahealthcarecenter.in • YouTube: homasurendranehru • Instagram/FB: homahealthcarecenter
