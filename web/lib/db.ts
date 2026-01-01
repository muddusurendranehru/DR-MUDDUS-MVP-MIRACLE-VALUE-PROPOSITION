import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';

// Create connection pool
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_zUbO5HZ9kDur@ep-icy-dream-ah5xlk96-pooler.c-3.us-east-1.aws.neon.tech/drmuddusmvp1?sslmode=require',
  ssl: {
    rejectUnauthorized: false,
  },
});

// Create Drizzle instance
export const db = drizzle(pool, { schema });

// Export schema for use in other files
export * from './schema';

