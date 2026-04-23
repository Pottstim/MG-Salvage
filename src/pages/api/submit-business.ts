import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    
    // Extract form data
    const submission = {
      type: 'business',
      businessName: data.get('business_name')?.toString() || '',
      contactName: data.get('contact_name')?.toString() || '',
      businessType: data.get('business_type')?.toString() || '',
      phone: data.get('phone')?.toString() || '',
      email: data.get('email')?.toString() || '',
      city: data.get('city')?.toString() || '',
      vehicleCount: data.get('vehicle_count')?.toString() || '',
      pickupTiming: data.get('pickup_timing')?.toString() || '',
      vehicleTypes: data.getAll('vehicle_types').map(v => v.toString()),
      notes: data.get('notes')?.toString() || '',
      timestamp: new Date().toISOString(),
    };
    
    // Validation
    if (!submission.businessName || !submission.contactName || !submission.phone || !submission.email) {
      return new Response(
        JSON.stringify({ success: false, error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    console.log('Business lead received:', submission);
    
    // Email notification
    const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;
    const CONTACT_EMAIL = import.meta.env.CONTACT_EMAIL || 'info@mgsalvage.com';
    
    if (RESEND_API_KEY) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'MG Salvage <leads@mgsalvage.com>',
            to: [CONTACT_EMAIL],
            subject: `New Business Lead: ${submission.businessName}`,
            html: `
              <h2>New Business Service Request</h2>
              <table>
                <tr><td><strong>Business:</strong></td><td>${submission.businessName}</td></tr>
                <tr><td><strong>Contact:</strong></td><td>${submission.contactName}</td></tr>
                <tr><td><strong>Type:</strong></td><td>${submission.businessType}</td></tr>
                <tr><td><strong>Phone:</strong></td><td>${submission.phone}</td></tr>
                <tr><td><strong>Email:</strong></td><td>${submission.email}</td></tr>
                <tr><td><strong>City:</strong></td><td>${submission.city}</td></tr>
                <tr><td><strong>Vehicles:</strong></td><td>${submission.vehicleCount}</td></tr>
                <tr><td><strong>Timing:</strong></td><td>${submission.pickupTiming}</td></tr>
                <tr><td><strong>Vehicle Types:</strong></td><td>${submission.vehicleTypes.join(', ') || 'Not specified'}</td></tr>
                <tr><td><strong>Notes:</strong></td><td>${submission.notes || 'None'}</td></tr>
              </table>
            `,
          }),
        });
      } catch (emailError) {
        console.error('Email send failed:', emailError);
      }
    }
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Thank you! We\'ll contact you within 1 business hour.',
        leadId: `business_${Date.now()}`
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
    
  } catch (error) {
    console.error('Form submission error:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to process submission' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
