import { NextRequest, NextResponse } from 'next/server';
import { db, pool } from '@/lib/db';
import { sql } from 'drizzle-orm';
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

    // Build update query dynamically
    const updates: string[] = [];
    const values: any[] = [];

    if (alt !== undefined) {
      updates.push(`alt = $${values.length + 1}`);
      values.push(alt);
    }
    if (caption !== undefined) {
      updates.push(`caption = $${values.length + 1}`);
      values.push(caption);
    }
    if (order !== undefined) {
      updates.push(`"order" = $${values.length + 1}`);
      values.push(order);
    }
    if (is_cover !== undefined) {
      updates.push(`is_cover = $${values.length + 1}`);
      values.push(is_cover);
    }

    if (updates.length === 0) {
      return NextResponse.json(
        { error: 'No fields to update' },
        { status: 400 }
      );
    }

    values.push(id);
    const query = `
      UPDATE gallery_images 
      SET ${updates.join(', ')}
      WHERE id = $${values.length}
      RETURNING *
    `;
    
    // Use pool directly for dynamic parameterized query
    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Gallery image not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ image: result.rows[0] });
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

    // Get image info first
    const result = await db.execute(sql`
      SELECT filename FROM gallery_images WHERE id = ${id}
    `);

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Gallery image not found' },
        { status: 404 }
      );
    }

    const filename = result.rows[0].filename as string;

    // Delete from database
    await db.execute(sql`
      DELETE FROM gallery_images WHERE id = ${id}
    `);

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

