import type { Metadata } from 'next';
import { BUSINESS, SITE_URL } from './constants';

interface BuildMetadataArgs {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}

const DEFAULT_KEYWORDS = [
  'MRI',
  'MRI Baytown',
  'MRI Baytown TX',
  'MRI near me',
  'Open MRI',
  'Open MRI Baytown',
  'Baytown MRI',
  'affordable MRI Baytown',
  'same day MRI Baytown',
  'same day MRI report',
  'self-pay MRI',
  'workers compensation MRI',
  'PI MRI imaging',
  'LOP MRI',
  'ACL MRI',
  'Arthrogram near me',
  'fast MRI appointment',
  'MRI scan',
  'open MRI near me',
];

export function buildMetadata({
  title,
  description,
  path = '/',
  keywords = [],
}: BuildMetadataArgs): Metadata {
  const fullTitle = title.includes(BUSINESS.name) ? title : `${title} | ${BUSINESS.name}`;
  const url = `${SITE_URL}${path}`;

  return {
    title: fullTitle,
    description,
    keywords: [...DEFAULT_KEYWORDS, ...keywords],
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: BUSINESS.name,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
  };
}
