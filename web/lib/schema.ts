import { pgTable, uuid, text, integer, boolean, timestamp } from 'drizzle-orm/pg-core';

export const galleryImages = pgTable('gallery_images', {
  id: uuid('id').defaultRandom().primaryKey(),
  filename: text('filename').notNull(),
  alt: text('alt').notNull(),
  caption: text('caption').notNull(),
  order: integer('order').notNull().default(0),
  isCover: boolean('is_cover').notNull().default(false),
  active: boolean('active').notNull().default(true),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});

// Map database columns to camelCase for TypeScript
export type GalleryImage = {
  id: string;
  filename: string;
  alt: string;
  caption: string;
  order: number;
  isCover: boolean;
  active: boolean;
  createdAt: Date;
};

export type NewGalleryImage = Omit<GalleryImage, 'id' | 'createdAt'>;

