import { neon } from '@neondatabase/serverless';
import { NextRequest, NextResponse } from 'next/server';

// Use NEON_DATABASE_URL or fallback to DATABASE_URL
const sql = neon(process.env.NEON_DATABASE_URL || process.env.DATABASE_URL!);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Extract form data
    const {
      fullName,
      whatsappNumber,
      email,
      age,
      gender,
      height,
      weight,
      waistCircumference,
      fastingBloodSugar,
      totalCholesterol,
      triglycerides,
      weightLossAttempts,
      biggestFrustration,
      investmentTimeline,
      commitmentLevel,
      bmiScore,
      tygIndex,
      metabolicRiskScore,
      leadQualityScore,
    } = body;

    // Validate required fields
    if (!fullName || !email) {
      return NextResponse.json(
        { success: false, error: 'Full name and email are required' },
        { status: 400 }
      );
    }

    // Create leads table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS leads (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        full_name VARCHAR(255) NOT NULL,
        whatsapp_number VARCHAR(20),
        email VARCHAR(255) NOT NULL,
        age INTEGER,
        gender VARCHAR(50),
        height_cm DECIMAL(5,2),
        weight_kg DECIMAL(5,2),
        waist_circumference DECIMAL(5,2),
        fasting_blood_sugar DECIMAL(5,2),
        total_cholesterol DECIMAL(5,2),
        triglycerides DECIMAL(5,2),
        weight_loss_attempts INTEGER,
        biggest_frustration TEXT[],
        investment_timeline VARCHAR(100),
        commitment_level INTEGER,
        bmi_score DECIMAL(5,2),
        tyg_index DECIMAL(5,2),
        metabolic_risk_score DECIMAL(5,2),
        lead_quality_score DECIMAL(5,2),
        submitted_at TIMESTAMP DEFAULT NOW(),
        created_at TIMESTAMP DEFAULT NOW()
      )
    `;

    // Insert lead into database
    const result = await sql`
      INSERT INTO leads (
        full_name, whatsapp_number, email, age, gender,
        height_cm, weight_kg, waist_circumference,
        fasting_blood_sugar, total_cholesterol, triglycerides,
        weight_loss_attempts, biggest_frustration,
        investment_timeline, commitment_level,
        bmi_score, tyg_index, metabolic_risk_score, lead_quality_score
      ) VALUES (
        ${fullName},
        ${whatsappNumber || null},
        ${email},
        ${age ? parseInt(age) : null},
        ${gender || null},
        ${height ? parseFloat(height) : null},
        ${weight ? parseFloat(weight) : null},
        ${waistCircumference ? parseFloat(waistCircumference) : null},
        ${fastingBloodSugar ? parseFloat(fastingBloodSugar) : null},
        ${totalCholesterol ? parseFloat(totalCholesterol) : null},
        ${triglycerides ? parseFloat(triglycerides) : null},
        ${weightLossAttempts ? parseInt(weightLossAttempts) : null},
        ${biggestFrustration && Array.isArray(biggestFrustration) ? biggestFrustration : []},
        ${investmentTimeline || null},
        ${commitmentLevel ? parseInt(commitmentLevel) : null},
        ${bmiScore ? parseFloat(bmiScore) : null},
        ${tygIndex ? parseFloat(tygIndex) : null},
        ${metabolicRiskScore ? parseFloat(metabolicRiskScore) : null},
        ${leadQualityScore ? parseFloat(leadQualityScore) : null}
      )
      RETURNING id, created_at
    `;

    return NextResponse.json({
      success: true,
      message: 'Lead saved successfully',
      leadId: result[0]?.id,
      createdAt: result[0]?.created_at,
    });
  } catch (error: any) {
    console.error('Error saving lead:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to save lead. Please try again.',
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to check if API is working
export async function GET() {
  try {
    // Create table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS leads (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        full_name VARCHAR(255) NOT NULL,
        whatsapp_number VARCHAR(20),
        email VARCHAR(255) NOT NULL,
        age INTEGER,
        gender VARCHAR(50),
        height_cm DECIMAL(5,2),
        weight_kg DECIMAL(5,2),
        waist_circumference DECIMAL(5,2),
        fasting_blood_sugar DECIMAL(5,2),
        total_cholesterol DECIMAL(5,2),
        triglycerides DECIMAL(5,2),
        weight_loss_attempts INTEGER,
        biggest_frustration TEXT[],
        investment_timeline VARCHAR(100),
        commitment_level INTEGER,
        bmi_score DECIMAL(5,2),
        tyg_index DECIMAL(5,2),
        metabolic_risk_score DECIMAL(5,2),
        lead_quality_score DECIMAL(5,2),
        submitted_at TIMESTAMP DEFAULT NOW(),
        created_at TIMESTAMP DEFAULT NOW()
      )
    `;

    const result = await sql`SELECT COUNT(*) as count FROM leads`;
    
    return NextResponse.json({
      success: true,
      message: 'Submit Lead API is working',
      totalLeads: parseInt(result[0]?.count || '0'),
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Database connection failed',
      },
      { status: 500 }
    );
  }
}

