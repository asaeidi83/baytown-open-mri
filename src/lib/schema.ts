import { BUSINESS, SERVICES, SITE_URL, FAQS } from './constants';

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['MedicalBusiness', 'MedicalClinic', 'DiagnosticLab', 'LocalBusiness'],
    '@id': `${SITE_URL}/#organization`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: SITE_URL,
    image: `${SITE_URL}/opengraph-image.png`,
    logo: `${SITE_URL}/icon.png`,
    telephone: BUSINESS.phone,
    faxNumber: BUSINESS.fax,
    email: BUSINESS.email,
    priceRange: '$$',
    medicalSpecialty: ['DiagnosticRadiology', 'Radiology'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    hasMap: BUSINESS.mapDirectionsUrl,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    areaServed: [
      'Baytown, TX',
      'Highlands, TX',
      'Mont Belvieu, TX',
      'Channelview, TX',
      'La Porte, TX',
      'Houston Metro',
    ],
    availableService: SERVICES.map((s) => ({
      '@type': 'MedicalProcedure',
      name: s.name,
      description: s.short,
      url: `${SITE_URL}/services#${s.slug}`,
    })),
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Accreditation',
      recognizedBy: {
        '@type': 'Organization',
        name: 'American College of Radiology',
      },
    },
  };
}

export function medicalOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    '@id': `${SITE_URL}/#medical-organization`,
    name: BUSINESS.name,
    url: SITE_URL,
    telephone: BUSINESS.phone,
    medicalSpecialty: 'DiagnosticRadiology',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: BUSINESS.address.country,
    },
  };
}

export function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}
