import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { BUSINESS, SITE_URL } from '@/lib/constants';
import {
  localBusinessSchema,
  medicalOrganizationSchema,
} from '@/lib/schema';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  themeColor: '#1d4ed8',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BUSINESS.name} | Affordable Open MRI in Baytown, TX`,
    template: `%s | ${BUSINESS.name}`,
  },
  description:
    'ACR-accredited Open MRI in Baytown, TX. Affordable self-pay pricing, same-day scheduling, and same-day reports available. Open MRI is comfortable for claustrophobic patients.',
  keywords: [
    'MRI Baytown',
    'MRI',
    'Open MRI Baytown',
    'MRI near me',
    'Baytown MRI',
    'affordable MRI Baytown',
    'same day MRI Baytown',
    'self-pay MRI',
    'workers compensation MRI',
    'PI MRI imaging',
    'LOP MRI',
  ],
  verification: {
  google: "JNi7gUZI3R5fxlTBLYVfBuK9GwBUbD8VS-qdNUW8Vk4",
},
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  category: 'Medical Imaging',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} | Affordable Open MRI in Baytown, TX`,
    description:
      'ACR-accredited Open MRI in Baytown, TX. Same-day scheduling, same-day reports available, and affordable self-pay pricing.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BUSINESS.name} | Open MRI in Baytown, TX`,
    description:
      'ACR-accredited Open MRI in Baytown, TX. Same-day scheduling and same-day reports available.',
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
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-white">
        <a href="#main" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />

        <Script
          id="schema-local-business"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
        <Script
          id="schema-medical-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalOrganizationSchema()) }}
        />

        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { anonymize_ip: true });`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
