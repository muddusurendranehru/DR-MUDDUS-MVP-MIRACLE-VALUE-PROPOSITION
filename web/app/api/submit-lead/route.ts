import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

// Backend API URL (already includes /api suffix)
const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // Forward to Backend API
    const backendRes = await axios.post(
      `${BACKEND_URL}/submit-lead`,
      formData,
      { 
        timeout: 10000,
        headers: { 'Content-Type': 'application/json' }
      }
    );
    
    return NextResponse.json(backendRes.data, { status: backendRes.status });
  } catch (error: any) {
    console.error('Frontend proxy error:', error?.response?.data || error.message);
    
    return NextResponse.json(
      { 
        success: false,
        error: error?.response?.data?.error || 'Failed to submit lead. Please try again.' 
      },
      { status: error?.response?.status || 500 }
    );
  }
}

// GET endpoint - forward to backend
export async function GET() {
  try {
    const backendRes = await axios.get(`${BACKEND_URL}/submit-lead`, {
      timeout: 10000,
      headers: { 'Content-Type': 'application/json' }
    });
    
    return NextResponse.json(backendRes.data, { status: backendRes.status });
  } catch (error: any) {
    console.error('Frontend proxy error:', error?.response?.data || error.message);
    
    return NextResponse.json(
      { 
        success: false,
        error: error?.response?.data?.error || 'Failed to fetch lead status' 
      },
      { status: error?.response?.status || 500 }
    );
  }
}
