import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { galleryImages } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import { unlink } from 'fs/promises';
import { join } from 'path';

// Hardcoded admin password (optional auth)
const ADMIN_PASSWORD = 'homa_admin_2024';

function checkAuth(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization');
  if (!authHeader) return false;
  
  const password = authHeader.replace('Bearer ', '');
  return password === ADMIN_PASSWORD;
}

// PATCH /api/gallery/[id] - Update gallery image (protected)
export async function PATCH(
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
    const id = params.id;
    const body = await request.json();
    const { alt, caption, order, is_cover } = body;

    // Build update object dynamically
    const updateData: any = {};

    if (alt !== undefined) {
      updateData.alt = alt;
    }
    if (caption !== undefined) {
      updateData.caption = caption;
    }
    if (order !== undefined) {
      updateData.order = order;
    }
    if (is_cover !== undefined) {
      updateData.isCover = is_cover;
    }

    if (Object.keys(updateData).length === 0) {
      return NextResponse.json(
        { error: 'No fields to update' },
        { status: 400 }
      );
    }

    // Use Drizzle to update
    const result = await db
      .update(galleryImages)
      .set(updateData)
      .where(eq(galleryImages.id, id))
      .returning();

    if (result.length === 0) {
      return NextResponse.json(
        { error: 'Gallery image not found' },
        { status: 404 }
      );
    }

    // Convert to snake_case for API response
    const image = result[0];
    return NextResponse.json({
      image: {
        id: image.id,
        filename: image.filename,
        alt: image.alt,
        caption: image.caption,
        order: image.order,
        is_cover: image.isCover,
        active: image.active,
        created_at: image.createdAt,
      },
    });
  } catch (error: any) {
    console.error('Error updating gallery image:', error);
    return NextResponse.json(
      { error: 'Failed to update gallery image', details: error.message },
      { status: 500 }
    );
  }
}

// DELETE /api/gallery/[id] - Delete gallery image + file (protected)
export async function DELETE(
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

    // Get image info first using Drizzle
    const image = await db
      .select({ filename: galleryImages.filename })
      .from(galleryImages)
      .where(eq(galleryImages.id, id))
      .limit(1);

    if (image.length === 0) {
      return NextResponse.json(
        { error: 'Gallery image not found' },
        { status: 404 }
      );
    }

    const filename = image[0].filename;

    // Delete from database using Drizzle
    await db.delete(galleryImages).where(eq(galleryImages.id, id));

    // Delete file
    try {
      const filePath = join(process.cwd(), 'public', 'images', filename);
      await unlink(filePath);
    } catch (fileError: any) {
      console.warn('File not found or already deleted:', filename);
    }

    return NextResponse.json({ 
      message: 'Gallery image deleted',
      deletedFilename: filename
    });
  } catch (error: any) {
    console.error('Error deleting gallery image:', error);
    return NextResponse.json(
      { error: 'Failed to delete gallery image', details: error.message },
      { status: 500 }
    );
  }
}

