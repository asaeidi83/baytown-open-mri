import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { CtaBar } from '@/components/layout/cta-bar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SERVICES, BUSINESS } from '@/lib/constants';
import { telHref } from '@/lib/utils';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'MRI Services in Baytown, TX',
  description:
    'Open MRI services including brain, spine, cervical, lumbar, knee, shoulder, ACL, extremity, and contrast studies at Baytown Open MRI in Baytown, TX.',
  path: '/services',
  keywords: ['MRI scan', 'ACL MRI', 'Open MRI Baytown', 'MRI with contrast', 'MRI without contrast'],
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Comprehensive MRI imaging services"
        description="From brain and spine to ACL and extremity imaging — performed on our comfortable Open MRI system, with or without contrast as ordered by your provider."
      />

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.slug} id={service.slug} className="p-6 scroll-mt-32 flex flex-col">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-4 text-xl font-semibold text-slate-900">{service.name}</h2>
                  <p className="mt-2 text-slate-600 leading-relaxed flex-1">{service.description}</p>
                  <ul className="mt-4 space-y-1.5">
                    {service.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-sm text-slate-700">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-500 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 rounded-xl bg-slate-50 border border-slate-200 p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  Not sure which MRI study you need?
                </h2>
                <p className="mt-1 text-slate-600">
                  Your physician&apos;s order will specify the study. Our team can help you understand
                  what to expect.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild>
                  <a href={telHref(BUSINESS.phone)}>
                    <Phone className="h-4 w-4" /> Call {BUSINESS.phone}
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact#appointment">Request Appointment</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBar />
    </>
  );
}
