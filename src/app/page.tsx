import type { Metadata } from 'next';
import Script from 'next/script';
import { Hero } from '@/components/sections/hero';
import { Advantages } from '@/components/sections/advantages';
import { OpenMriBenefits } from '@/components/sections/open-mri-benefits';
import { ServicesPreview } from '@/components/sections/services-preview';
import { Insurance } from '@/components/sections/insurance';
import { MapSection } from '@/components/sections/map-section';
import { FaqPreview } from '@/components/sections/faq-preview';
import { CtaBar } from '@/components/layout/cta-bar';
import { buildMetadata } from '@/lib/metadata';
import { faqSchema } from '@/lib/schema';

export const metadata: Metadata = buildMetadata({
  title: 'Baytown Open MRI | Affordable Open MRI in Baytown, TX',
  description:
    'ACR-accredited Open MRI in Baytown, TX. Affordable self-pay pricing, same-day scheduling, and same-day MRI reports available. Open MRI is comfortable for claustrophobic patients.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Advantages />
      <OpenMriBenefits />
      <ServicesPreview />
      <Insurance />
      <CtaBar />
      <MapSection />
      <FaqPreview />

      <Script
        id="schema-faq-home"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema()) }}
      />
    </>
  );
}
