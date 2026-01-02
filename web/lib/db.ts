import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';

// Create connection pool - Render compatible
// Use fallback for build time, will use env var at runtime
const connectionString = process.env.DATABASE_URL || 'postgresql://placeholder:placeholder@localhost:5432/placeholder';

export const pool = new Pool({
  connectionString,
  ssl: connectionString.includes('localhost') || connectionString.includes('127.0.0.1') || connectionString.includes('placeholder')
    ? false
    : {
        rejectUnauthorized: false,
      },
});

// Validate connection at runtime (not build time)
if (process.env.NODE_ENV !== 'production' && !process.env.DATABASE_URL) {
  console.warn('⚠️  DATABASE_URL not set. Gallery features will not work.');
}

// Create Drizzle instance
export const db = drizzle(pool, { schema });

// Export schema for use in other files
export * from './schema';

