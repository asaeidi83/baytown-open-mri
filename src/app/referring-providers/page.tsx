import type { Metadata } from 'next';
import { Phone, Printer, Mail, FileText, Clock, ShieldCheck } from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { CtaBar } from '@/components/layout/cta-bar';
import { ReferralForm } from '@/components/forms/referral-form';
import { BUSINESS } from '@/lib/constants';
import { telHref } from '@/lib/utils';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Referring Providers',
  description:
    'Information for referring clinicians and clinics. Send MRI orders to Baytown Open MRI, an ACR-accredited Open MRI facility in Baytown, TX.',
  path: '/referring-providers',
});

const features = [
  {
    icon: Clock,
    title: 'Fast scheduling',
    body: 'Same-day appointments are often available for routine and time-sensitive studies.',
  },
  {
    icon: FileText,
    title: 'Timely reports',
    body: 'Same-day reports available in many cases — board-certified radiologist interpretations.',
  },
  {
    icon: ShieldCheck,
    title: 'ACR Accredited',
    body: 'Our facility meets the American College of Radiology standards for MRI imaging.',
  },
];

export default function ReferringProvidersPage() {
  return (
    <>
      <PageHero
        eyebrow="Referring Providers"
        title="Send MRI orders with confidence"
        description="We partner with primary care, orthopedics, neurology, pain management, chiropractic, and PI/LOP/Workers' Comp practices throughout the Baytown and Houston area."
      />

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-5">
            {features.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-xl border border-slate-200 bg-white p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-1 text-slate-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12 md:py-16">
        <div className="container grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2 space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              How to send a referral
            </h2>
            <p className="text-slate-700 leading-relaxed">
              We accept orders by fax, by phone, or through the secure online coordination form on
              this page. Please send the signed order with relevant clinical history through your
              standard secure channel.
            </p>

            <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-4">
              <div className="flex gap-3 items-start">
                <Phone className="h-5 w-5 text-primary-700 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">Phone</p>
                  <a href={telHref(BUSINESS.phone)} className="text-slate-700 hover:text-primary-700">
                    {BUSINESS.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Printer className="h-5 w-5 text-primary-700 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">Fax orders</p>
                  <p className="text-slate-700">{BUSINESS.fax}</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Mail className="h-5 w-5 text-primary-700 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">Email (non-PHI)</p>
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="text-slate-700 hover:text-primary-700 break-all"
                  >
                    {BUSINESS.email}
                  </a>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-600">
              For PI, LOP, and Workers&apos; Comp cases, our team will coordinate authorization and
              scheduling.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                Provider coordination form
              </h2>
              <p className="mt-1 text-slate-600">
                Use this form for non-PHI scheduling and coordination notes. Send the signed order
                separately by fax.
              </p>
              <div className="mt-6">
                <ReferralForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBar />
    </>
  );
}
