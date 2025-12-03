# 🔧 Environment Setup

## Create .env.local File

In the `/web` directory, create a file called `.env.local`:

```bash
cd web
```

**Windows (PowerShell):**
```powershell
@"
NEXT_PUBLIC_API_URL=http://localhost:5000/api
"@ | Out-File -FilePath .env.local -Encoding utf8
```

**Or create manually with this content:**
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

---

## Why This Variable Name?

- ✅ `NEXT_PUBLIC_API_URL` - Can be read in browser
- ✅ Points to backend API base URL
- ✅ All API calls are relative: `/auth/login`, `/assessments/latest`

---

## How It Works

### In lib/api.ts:
```typescript
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Creates axios instance with base URL
const apiClient = axios.create({
  baseURL: API_BASE_URL,  // http://localhost:5000/api
});

// All calls are relative:
apiClient.post('/auth/login', data);      // → http://localhost:5000/api/auth/login
apiClient.get('/assessments/latest');    // → http://localhost:5000/api/assessments/latest
```

### Axios Interceptor:
```typescript
// Automatically adds Authorization header from localStorage
apiClient.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});
```

---

## Production Setup

When deploying to Render, update `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://your-backend.onrender.com/api
```

---

## Verify Setup

After creating `.env.local`, run:

```bash
npm run dev
```

Check browser console for:
```
Backend URL: http://localhost:5000/api
```

---

**Current Backend:** Running on port 5000 ✅  
**Update .env.local if you change backend port!**

