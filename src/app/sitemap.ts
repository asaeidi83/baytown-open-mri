import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

const ROUTES = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/about', priority: 0.7, changeFrequency: 'yearly' as const },
  { path: '/patient-information', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/referring-providers', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/faq', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
