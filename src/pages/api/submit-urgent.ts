import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    
    // Extract form data
    const submission = {
      type: 'urgent',
      name: data.get('name')?.toString() || '',
      phone: data.get('phone')?.toString() || '',
      city: data.get('city')?.toString() || '',
      accessibility: data.get('accessibility')?.toString() || '',
      sameDay: data.get('same_day') === 'yes',
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
    
    console.log('Urgent callback requested:', submission);
    
    // Email notification with HIGH priority
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
            subject: `🚨 URGENT Callback Request: ${submission.name} - ${submission.sameDay ? 'SAME DAY' : 'ASAP'}`,
            html: `
              <h2 style="color: #e85d04;">URGENT CALLBACK REQUEST</h2>
              <p><strong>Priority:</strong> ${submission.sameDay ? 'SAME DAY PICKUP' : 'ASAP'}</p>
              <table>
                <tr><td><strong>Name:</strong></td><td>${submission.name}</td></tr>
                <tr><td><strong>Phone:</strong></td><td>${submission.phone}</td></tr>
                <tr><td><strong>City:</strong></td><td>${submission.city}</td></tr>
                <tr><td><strong>Location Type:</strong></td><td>${submission.accessibility}</td></tr>
                <tr><td><strong>Notes:</strong></td><td>${submission.notes || 'None'}</td></tr>
              </table>
              <p style="margin-top: 20px; padding: 15px; background: #fff3cd; border-left: 4px solid #e85d04;">
                <strong>Action Required:</strong> Contact this lead immediately. Target response time: 15 minutes.
              </p>
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
        message: submission.sameDay 
          ? 'Urgent request received! We\'ll call you within 15 minutes.'
          : 'Callback requested! Expect a call within 30 minutes.',
        leadId: `urgent_${Date.now()}`,
        priority: submission.sameDay ? 'high' : 'normal'
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
