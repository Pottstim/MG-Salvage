import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    
    // Extract form data
    const submission = {
      type: 'consumer',
      name: data.get('name')?.toString() || '',
      phone: data.get('phone')?.toString() || '',
      email: data.get('email')?.toString() || '',
      city: data.get('city')?.toString() || '',
      year: data.get('year')?.toString() || '',
      make: data.get('make')?.toString() || '',
      model: data.get('model')?.toString() || '',
      condition: data.get('condition')?.toString() || '',
      titleStatus: data.get('title_status')?.toString() || '',
      notes: data.get('notes')?.toString() || '',
      timestamp: new Date().toISOString(),
    };
    
    // Validation
    if (!submission.name || !submission.phone || !submission.city) {
      return new Response(
        JSON.stringify({ success: false, error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // TODO: Integrate with Resend for email, Twilio for SMS, or CRM webhook
    // For now, log and return success
    console.log('Consumer lead received:', submission);
    
    // Email notification (using Resend if API key available)
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
            subject: `New Consumer Lead: ${submission.name} - ${submission.year} ${submission.make}`,
            html: `
              <h2>New Consumer Estimate Request</h2>
              <table>
                <tr><td><strong>Name:</strong></td><td>${submission.name}</td></tr>
                <tr><td><strong>Phone:</strong></td><td>${submission.phone}</td></tr>
                <tr><td><strong>Email:</strong></td><td>${submission.email || 'Not provided'}</td></tr>
                <tr><td><strong>City:</strong></td><td>${submission.city}</td></tr>
                <tr><td><strong>Vehicle:</strong></td><td>${submission.year} ${submission.make} ${submission.model}</td></tr>
                <tr><td><strong>Condition:</strong></td><td>${submission.condition}</td></tr>
                <tr><td><strong>Title Status:</strong></td><td>${submission.titleStatus}</td></tr>
                <tr><td><strong>Notes:</strong></td><td>${submission.notes || 'None'}</td></tr>
              </table>
            `,
          }),
        });
      } catch (emailError) {
        console.error('Email send failed:', emailError);
      }
    }
    
    // TODO: SMS notification via Twilio or similar service
    // TODO: CRM integration (HubSpot, Pipedrive, Airtable, etc.)
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Thank you! We\'ll contact you within 30 minutes.',
        leadId: `consumer_${Date.now()}`
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
