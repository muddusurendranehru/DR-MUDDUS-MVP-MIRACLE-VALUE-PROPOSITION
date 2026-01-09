// Quick test script to verify database connection
import { pool } from '../lib/db';

async function testConnection() {
  try {
    console.log('🔍 Testing database connection to drmuddusmvp1...');
    const result = await pool.query('SELECT NOW() as current_time, current_database() as db_name');
    console.log('✅ Database connection successful!');
    console.log('📊 Database:', result.rows[0].db_name);
    console.log('⏰ Current time:', result.rows[0].current_time);
    
    // Test gallery_images table exists
    const tableCheck = await pool.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'gallery_images'
      );
    `);
    
    if (tableCheck.rows[0].exists) {
      console.log('✅ gallery_images table exists');
      
      // Count images
      const count = await pool.query('SELECT COUNT(*) FROM gallery_images');
      console.log(`📸 Gallery images: ${count.rows[0].count}`);
    } else {
      console.log('⚠️  gallery_images table does not exist');
    }
    
    process.exit(0);
  } catch (error: any) {
    console.error('❌ Database connection failed:', error.message);
    process.exit(1);
  }
}

testConnection();

