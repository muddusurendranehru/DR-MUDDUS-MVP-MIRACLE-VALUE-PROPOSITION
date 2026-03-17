# Achievements – 17 March 2025

## Clerk-only authentication

### 1. Removed backend auth API usage
- **`web/lib/api.ts`**  
  - Removed `api.signup()` (previously `POST /auth/signup`).  
  - Removed `api.login()` (previously `POST /auth/login`).  
  - Auth is no longer called on the Express backend from the frontend.
- **`web/app/auth/page.tsx`**  
  - Already using only Clerk: `<SignIn />` and `<SignUp />` with a simple tab switch. No backend auth calls.
- **`web/lib/auth-context.tsx`**  
  - No backend auth calls; only client-side state. Left as-is.

### 2. Signup and login flow
- **Sign In** → Clerk `<SignIn />` only.  
- **Create Account** → Clerk `<SignUp />` only.  
- No frontend calls to `/auth/signup` or `/auth/login`.

### 3. Local run (two servers)
- **Backend** (Express): `cd server` → `npm run dev` → http://localhost:5000  
- **Frontend** (Next.js): `cd web` → `npm run dev` (or `npx next dev -p 3002`) → http://localhost:3002  
- Health check: `Invoke-RestMethod -Uri "http://localhost:5000/api/health" -Method Get`

### 4. Verified
- Clerk Create Account (email/password + “Continue with Google”) works.  
- Google 2-step verification completes.  
- After sign-in, homepage shows “Sign Out”; session is managed by Clerk.

---

**Summary:** Auth is fully Clerk-based; old backend signup/login endpoints are no longer used by the app.
