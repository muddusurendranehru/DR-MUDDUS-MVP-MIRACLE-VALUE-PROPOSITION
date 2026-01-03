import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

// Backend API URL (already includes /api suffix)
const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// GET /api/gallery - Forward to backend
export async function GET() {
  try {
    const response = await axios.get(`${BACKEND_URL}/gallery`, {
      headers: { 'Accept': 'application/json' },
      timeout: 10000,
    });

    return NextResponse.json(response.data, { status: response.status });
  } catch (error: any) {
    console.error('Frontend gallery proxy error:', error?.response?.data || error.message);
    
    return NextResponse.json(
      { 
        error: error?.response?.data?.error || 'Failed to fetch gallery',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: error?.response?.status || 500 }
    );
  }
}

// POST /api/gallery - Forward to backend (for uploads)
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const response = await axios.post(`${BACKEND_URL}/gallery`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      timeout: 30000, // Longer timeout for file uploads
    });

    return NextResponse.json(response.data, { status: response.status });
  } catch (error: any) {
    console.error('Frontend gallery upload proxy error:', error?.response?.data || error.message);
    
    return NextResponse.json(
      { 
        error: error?.response?.data?.error || 'Failed to upload gallery image',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: error?.response?.status || 500 }
    );
  }
}
