// Run this script to create the gallery_images table
// npx tsx scripts/migrate-gallery.ts

import { db } from '../lib/db';
import { sql } from 'drizzle-orm';

async function migrate() {
  try {
    console.log('🔄 Creating gallery_images table...');
    
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS gallery_images (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        filename TEXT NOT NULL,
        alt TEXT NOT NULL,
        caption TEXT NOT NULL,
        "order" INTEGER NOT NULL DEFAULT 0,
        is_cover BOOLEAN DEFAULT false,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
    `);

    await db.execute(sql`
      CREATE INDEX IF NOT EXISTS idx_gallery_images_order ON gallery_images("order");
    `);

    await db.execute(sql`
      CREATE INDEX IF NOT EXISTS idx_gallery_images_cover ON gallery_images(is_cover) WHERE is_cover = true;
    `);

    console.log('✅ Migration completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

migrate();

