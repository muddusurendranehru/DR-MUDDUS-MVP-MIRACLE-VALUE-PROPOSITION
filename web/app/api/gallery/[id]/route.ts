import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

// Backend API URL (already includes /api suffix)
const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// PATCH /api/gallery/[id] - Update gallery image (forward to backend)
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const body = await request.json();
    
    const response = await axios.patch(
      `${BACKEND_URL}/gallery/${id}`,
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
    console.error('Frontend gallery update proxy error:', error?.response?.data || error.message);
    
    return NextResponse.json(
      {
        error: error?.response?.data?.error || 'Failed to update gallery image',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: error?.response?.status || 500 }
    );
  }
}

// DELETE /api/gallery/[id] - Delete gallery image (forward to backend)
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    
    const response = await axios.delete(
      `${BACKEND_URL}/gallery/${id}`,
      {
        headers: {
          'Authorization': request.headers.get('authorization') || '',
        },
        timeout: 10000,
      }
    );

    return NextResponse.json(response.data, { status: response.status });
  } catch (error: any) {
    console.error('Frontend gallery delete proxy error:', error?.response?.data || error.message);
    
    return NextResponse.json(
      {
        error: error?.response?.data?.error || 'Failed to delete gallery image',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: error?.response?.status || 500 }
    );
  }
}
