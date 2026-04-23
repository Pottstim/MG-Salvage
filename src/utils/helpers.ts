// Helper functions for MG Salvage

/**
 * Format phone number for display
 */
export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  return phone;
}

/**
 * Format phone number for tel: links
 */
export function formatPhoneLink(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  return `tel:+1${cleaned}`;
}

/**
 * Generate slug from string
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Format date for display
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

/**
 * Generate meta description with location
 */
export function generateMetaDescription(base: string, location?: string): string {
  if (location) {
    return base.replace('Sanford, NC', `${location}, NC`).replace('surrounding areas', `${location} and surrounding areas`);
  }
  return base;
}

/**
 * Generate title with location
 */
export function generateTitle(base: string, location?: string): string {
  if (location) {
    return base.replace('Sanford', location);
  }
  return base;
}

/**
 * Validate form data
 */
export function validateForm(data: Record<string, unknown>): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (!data.name || (data.name as string).trim().length < 2) {
    errors.push('Name is required');
  }
  
  if (!data.phone || !/^\(\d{3}\) \d{3}-\d{4}$/.test(data.phone as string)) {
    errors.push('Valid phone number is required');
  }
  
  return { valid: errors.length === 0, errors };
}

/**
 * Create breadcrumb schema
 */
export function createBreadcrumbSchema(items: Array<{ name: string; url: string }>): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

/**
 * Create FAQ schema
 */
export function createFAQSchema(faqs: Array<{ question: string; answer: string }>): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

/**
 * Truncate text
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + '...';
}
