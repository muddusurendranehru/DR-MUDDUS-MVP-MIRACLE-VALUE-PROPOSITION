import { NextRequest, NextResponse } from 'next/server';
import { db, galleryImages } from '@/lib/db';
import { sql, desc, eq } from 'drizzle-orm';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

// Hardcoded admin password (optional auth)
const ADMIN_PASSWORD = 'homa_admin_2024';

function checkAuth(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization');
  if (!authHeader) return false;
  
  const password = authHeader.replace('Bearer ', '');
  return password === ADMIN_PASSWORD;
}

// GET /api/gallery - Get all active gallery images (public)
export async function GET() {
  try {
    // Use Drizzle query builder with eq for better compatibility
    const result = await db
      .select()
      .from(galleryImages)
      .where(eq(galleryImages.active, true))
      .orderBy(galleryImages.order);

    // Convert to snake_case for API response
    const images = result.map((img) => ({
      id: img.id,
      filename: img.filename,
      alt: img.alt,
      caption: img.caption,
      order: img.order,
      is_cover: img.isCover,
      active: img.active,
      created_at: img.createdAt,
    }));

    return NextResponse.json({ images });
  } catch (error: any) {
    console.error('Error fetching gallery images:', error);
    return NextResponse.json(
      { error: 'Failed to fetch gallery images', details: error.message },
      { status: 500 }
    );
  }
}

// POST /api/gallery/upload - Upload image file + create DB entry (protected)
export async function POST(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const caption = formData.get('caption') as string || '';

    if (!file) {
      return NextResponse.json(
        { error: 'File is required' },
        { status: 400 }
      );
    }

    // Generate filename
    const timestamp = Date.now();
    const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const filename = `${timestamp}-${sanitizedName}`;

    // Save file to public/images
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const publicDir = join(process.cwd(), 'public', 'images');
    
    // Ensure directory exists
    await mkdir(publicDir, { recursive: true });
    
    // Write file
    const filePath = join(publicDir, filename);
    await writeFile(filePath, buffer);

    // Auto-generate alt text
    const alt = `HOMA Clinic Gachibowli ${filename.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ')}`;

    // Get max order using Drizzle - get all orders and find max
    const allImages = await db
      .select({ order: galleryImages.order })
      .from(galleryImages);
    const maxOrder = allImages.length > 0 
      ? Math.max(...allImages.map(img => img.order), 0)
      : 0;
    const nextOrder = maxOrder + 1;

    // Insert into database using Drizzle
    const result = await db
      .insert(galleryImages)
      .values({
        filename,
        alt,
        caption: caption || filename.replace(/\.[^/.]+$/, ''),
        order: nextOrder,
        isCover: false,
        active: true,
      })
      .returning();

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
      message: 'Image uploaded successfully'
    }, { status: 201 });
  } catch (error: any) {
    console.error('Error uploading gallery image:', error);
    return NextResponse.json(
      { error: 'Failed to upload gallery image', details: error.message },
      { status: 500 }
    );
  }
}

