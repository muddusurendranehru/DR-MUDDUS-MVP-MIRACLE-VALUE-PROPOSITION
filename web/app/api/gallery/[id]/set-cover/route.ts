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

// POST /api/gallery/[id]/set-cover - Set cover image (protected)
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!checkAuth(request)) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const { id } = params;

    // First, unset all covers
    await db
      .update(galleryImages)
      .set({ isCover: false });

    // Then set the new cover
    const [coverImage] = await db
      .update(galleryImages)
      .set({ isCover: true })
      .where(eq(galleryImages.id, id))
      .returning();

    if (!coverImage) {
      return NextResponse.json(
        { error: 'Gallery image not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ image: coverImage });
  } catch (error: any) {
    console.error('Error setting cover image:', error);
    return NextResponse.json(
      { error: 'Failed to set cover image' },
      { status: 500 }
    );
  }
}

