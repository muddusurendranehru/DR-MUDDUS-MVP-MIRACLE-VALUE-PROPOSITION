import { NextRequest, NextResponse } from 'next/server';
import { db, galleryImages } from '@/lib/db';
import { eq } from 'drizzle-orm';

// Hardcoded admin password (optional auth)
const ADMIN_PASSWORD = 'homa_admin_2024';

function checkAuth(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization');
  if (!authHeader) return false;
  
  const password = authHeader.replace('Bearer ', '');
  return password === ADMIN_PASSWORD;
}

// POST /api/gallery/reorder - Reorder images (protected)
export async function POST(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    const { updates } = body; // Array of { id, order }

    if (!Array.isArray(updates) || updates.length === 0) {
      return NextResponse.json(
        { error: 'updates array is required' },
        { status: 400 }
      );
    }

    // Update each image's order using Drizzle
    const promises = updates.map(({ id, order }: { id: string; order: number }) =>
      db
        .update(galleryImages)
        .set({ order })
        .where(eq(galleryImages.id, id))
    );

    await Promise.all(promises);

    return NextResponse.json({ message: 'Images reordered successfully' });
  } catch (error: any) {
    console.error('Error reordering gallery images:', error);
    return NextResponse.json(
      { error: 'Failed to reorder gallery images', details: error.message },
      { status: 500 }
    );
  }
}

