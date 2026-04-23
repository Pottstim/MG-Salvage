// MG Salvage - Business Constants
export const BUSINESS = {
  name: 'MG Salvage',
  legalName: 'MG Salvage LLC',
  tagline: 'Professional Vehicle Acquisition & Salvage Operations',
  description: 'Professional salvage and vehicle acquisition company serving Sanford, NC and surrounding areas. We buy junk cars, provide free towing, and help with all paperwork.',
  phone: '(919) 777-5427',
  phoneDisplay: '(919) 777-5427',
  email: 'info@mgsalvage.com',
  address: {
    street: '1230 N Chapel St',
    city: 'Sanford',
    state: 'NC',
    zip: '27330',
    full: '1230 N Chapel St, Sanford, NC 27330'
  },
  hours: {
    monday: '8:00 AM - 6:00 PM',
    tuesday: '8:00 AM - 6:00 PM',
    wednesday: '8:00 AM - 6:00 PM',
    thursday: '8:00 AM - 6:00 PM',
    friday: '8:00 AM - 6:00 PM',
    saturday: '9:00 AM - 4:00 PM',
    sunday: 'Closed'
  },
  social: {
    facebook: 'https://facebook.com/mgsalvage',
    google: 'https://g.page/mgsalvage'
  }
} as const;

// Service Areas
export const SERVICE_AREAS = [
  { name: 'Sanford', slug: 'sanford', county: 'Lee', distance: 'Headquarters' },
  { name: 'Fayetteville', slug: 'fayetteville', county: 'Cumberland', distance: '35 miles' },
  { name: 'Pittsboro', slug: 'pittsboro', county: 'Chatham', distance: '25 miles' },
  { name: 'Carthage', slug: 'carthage', county: 'Moore', distance: '20 miles' },
  { name: 'Lillington', slug: 'lillington', county: 'Harnett', distance: '30 miles' },
  { name: 'Southern Pines', slug: 'southern-pines', county: 'Moore', distance: '25 miles' },
  { name: 'Aberdeen', slug: 'aberdeen', county: 'Moore', distance: '28 miles' },
  { name: 'Spring Lake', slug: 'spring-lake', county: 'Cumberland', distance: '38 miles' },
  { name: 'Hope Mills', slug: 'hope-mills', county: 'Cumberland', distance: '40 miles' },
  { name: 'Siler City', slug: 'siler-city', county: 'Chatham', distance: '35 miles' }
] as const;

// Business Types for B2B
export const BUSINESS_TYPES = [
  { id: 'mechanic', label: 'Mechanic Shop / Auto Repair', description: 'Clear project cars and non-repairable units' },
  { id: 'bodyshop', label: 'Auto Body & Collision Center', description: 'Total loss vehicles and insurance write-offs' },
  { id: 'dealer', label: 'Used Car Dealer', description: 'Aged inventory and lot clearing' },
  { id: 'fleet', label: 'Fleet / Commercial', description: 'Multiple vehicle disposal' },
  { id: 'tow', label: 'Towing / Recovery', description: 'Abandoned vehicle processing' },
  { id: 'other', label: 'Other Business', description: 'Custom vehicle solutions' }
] as const;

// Vehicle Conditions
export const VEHICLE_CONDITIONS = [
  { id: 'runs-drives', label: 'Runs & Drives', description: 'Vehicle starts and can be driven' },
  { id: 'starts-only', label: 'Starts Only', description: 'Engine runs but vehicle cannot move' },
  { id: 'dead-totaled', label: 'Dead / Totaled', description: 'Does not start, significant damage' },
  { id: 'parts-only', label: 'Parts Only', description: 'Severely damaged, only good for parts' }
] as const;

// Title Status Options
export const TITLE_STATUS = [
  { id: 'clean', label: 'Clean Title', description: 'Clear title in hand' },
  { id: 'salvage', label: 'Salvage Title', description: 'Previously totaled/rebuilt' },
  { id: 'lost', label: 'Lost Title', description: 'Title is lost, need replacement' },
  { id: 'no-title', label: 'No Title', description: 'Never had title / abandoned' },
  { id: 'lien', label: 'Has Lien', description: 'Still has loan/lien on vehicle' }
] as const;

// SEO Meta Templates
export const SEO = {
  titleTemplate: '%s | MG Salvage - Sanford, NC',
  defaultTitle: 'MG Salvage - Cash for Junk Cars & Free Towing | Sanford, NC',
  defaultDescription: 'Get cash for your junk car in Sanford, NC and surrounding areas. Free towing, same-day pickup, title help. We buy running, non-running, and totaled vehicles.',
  keywords: 'cash for junk cars, junk car removal, sell my junk car, free towing, vehicle salvage, car buyer, auto salvage, Sanford NC, Fayetteville, Pittsboro'
} as const;

// Schema.org Organization Data
export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'AutomotiveBusiness',
  name: BUSINESS.name,
  legalName: BUSINESS.legalName,
  description: BUSINESS.description,
  url: 'https://mgsalvage.com',
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.state,
    postalCode: BUSINESS.address.zip,
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '35.4799',
    longitude: '-79.1803'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '16:00'
    }
  ],
  priceRange: '$$',
  areaServed: SERVICE_AREAS.map(area => ({
    '@type': 'City',
    name: area.name,
    containedInPlace: {
      '@type': 'State',
      name: 'North Carolina'
    }
  }))
};
