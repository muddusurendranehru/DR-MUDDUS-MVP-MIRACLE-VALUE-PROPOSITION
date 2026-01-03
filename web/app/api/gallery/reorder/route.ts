import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

// Backend API URL (already includes /api suffix)
const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// POST /api/gallery/reorder - Reorder images (forward to backend)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const response = await axios.post(
      `${BACKEND_URL}/gallery/reorder`,
      body,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': request.headers.get('authorization') || '',
        },
        timeout: 10000,
      }
    );

    return NextResponse.json(response.data, { status: response.status });
  } catch (error: any) {
    console.error('Frontend gallery reorder proxy error:', error?.response?.data || error.message);
    
    return NextResponse.json(
      {
        error: error?.response?.data?.error || 'Failed to reorder gallery images',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: error?.response?.status || 500 }
    );
  }
}
