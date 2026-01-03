import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL!;

// ✅ DELETE — no formData, just delete by ID
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }  // 👈 NOT a Promise
) {
  try {
    const { id } = params;  // 👈 Direct destructuring (no await)
    const res = await axios.delete(`${BACKEND_URL}/gallery/${id}`);
    return NextResponse.json(res.data);
  } catch (error: any) {
    return NextResponse.json({ error: 'Delete failed' }, { status: 500 });
  }
}

// ✅ PATCH — handles form data (e.g., caption, order)
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }  // 👈 Same here
) {
  try {
    const { id } = params;
    const formData = await request.formData();
    
    // Convert FormData to plain object (optional)
    const body: Record<string, string> = {};
    formData.forEach((value, key) => {
      body[key] = value.toString();
    });

    const res = await axios.patch(`${BACKEND_URL}/gallery/${id}`, body, {
      headers: { 'Content-Type': 'application/json' }
    });

    return NextResponse.json(res.data);
  } catch (error: any) {
    return NextResponse.json({ error: 'Update failed' }, { status: 500 });
  }
}
