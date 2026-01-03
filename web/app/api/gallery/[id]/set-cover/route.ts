import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

// Backend API URL (already includes /api suffix)
const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// POST /api/gallery/[id]/set-cover - Set cover image (forward to backend)
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    
    const response = await axios.post(
      `${BACKEND_URL}/gallery/${id}/set-cover`,
      {},
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
    console.error('Frontend gallery set-cover proxy error:', error?.response?.data || error.message);
    
    return NextResponse.json(
      {
        error: error?.response?.data?.error || 'Failed to set cover image',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: error?.response?.status || 500 }
    );
  }
}
