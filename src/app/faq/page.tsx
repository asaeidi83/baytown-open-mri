import type { Metadata } from 'next';
import Script from 'next/script';
import { PageHero } from '@/components/layout/page-hero';
import { CtaBar } from '@/components/layout/cta-bar';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { FAQS } from '@/lib/constants';
import { buildMetadata } from '@/lib/metadata';
import { faqSchema } from '@/lib/schema';

export const metadata: Metadata = buildMetadata({
  title: 'MRI FAQs',
  description:
    'Answers to common questions about Open MRI, scheduling, insurance, self-pay pricing, and what to expect at Baytown Open MRI.',
  path: '/faq',
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Answers to common questions about Open MRI imaging, scheduling, insurance, and what to expect during your visit."
      />

      <section className="py-12 md:py-16">
        <div className="container max-w-3xl">
          <div className="rounded-xl border border-slate-200 bg-white p-2 sm:p-4">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="px-3 sm:px-4">
                  <AccordionTrigger>{f.q}</AccordionTrigger>
                  <AccordionContent>{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <CtaBar />

      <Script
        id="schema-faq-page"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema()) }}
      />
    </>
  );
}
