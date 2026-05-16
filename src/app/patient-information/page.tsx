import type { Metadata } from 'next';
import { Calendar, ClipboardList, Clock, ShieldCheck, AlertTriangle, Sparkles, FileText } from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { CtaBar } from '@/components/layout/cta-bar';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Patient Information & What to Expect',
  description:
    'Helpful information for MRI patients at Baytown Open MRI — scheduling, what to expect, preparation, safety, and arrival information.',
  path: '/patient-information',
});

const steps = [
  {
    icon: Calendar,
    title: 'Scheduling',
    body:
      'Most patients schedule by phone — call (281) 422-9900. Same-day appointments are often available. We can verify insurance benefits or share self-pay pricing while you are on the line.',
  },
  {
    icon: ClipboardList,
    title: 'Bring with you',
    body:
      "Bring a photo ID, your insurance card (if applicable), your provider's MRI order, and a list of any prior surgeries that involved implants. You do not need to bring imaging discs unless your provider requested a comparison.",
  },
  {
    icon: Clock,
    title: 'Arrival',
    body:
      'Plan to arrive about 15 minutes before your appointment to complete check-in paperwork. Wear comfortable clothing without metal (or plan to change into a gown).',
  },
  {
    icon: Sparkles,
    title: 'During the scan',
    body:
      'You will lie still on a comfortable, open-design MRI table. The scan typically takes 20–45 minutes. The MRI makes loud thumping noises — we provide hearing protection.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety screening',
    body:
      'MRI uses powerful magnets, so we screen for implants, pacemakers, defibrillators, metal fragments, and pregnancy. Please share any relevant medical history with our technologist.',
  },
  {
    icon: FileText,
    title: 'Your report',
    body:
      'Same-day MRI reports are available in many cases. A board-certified radiologist will interpret your images and send the report to your referring provider.',
  },
];

const safety = [
  'Cardiac pacemaker or defibrillator',
  'Cochlear implants or hearing aids',
  'Aneurysm clips or stents',
  'Metal fragments from prior injuries',
  'Recent surgery with implants',
  'Pregnancy or possible pregnancy',
  'Tattoos with metallic ink (rare concern)',
];

export default function PatientInfoPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient Info"
        title="What to expect during your MRI"
        description="A quick guide to scheduling, preparation, safety, and follow-up for patients visiting Baytown Open MRI."
      />

      <section className="py-12 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-50 text-primary-700">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-slate-900">{title}</h2>
                <p className="mt-2 text-slate-600 leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12 md:py-16">
        <div className="container grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold text-slate-900">
              MRI safety: tell us before your scan
            </h2>
            <p className="mt-3 text-slate-700 leading-relaxed">
              Because MRI uses powerful magnets, some implants and conditions need to be reviewed
              before your scan. Please call us in advance if any of the following apply:
            </p>
          </div>
          <ul className="space-y-2.5">
            {safety.map((item) => (
              <li
                key={item}
                className="flex gap-3 items-start rounded-lg bg-white border border-slate-200 p-3.5"
              >
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Self-pay, insurance, and special case types
          </h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            We accept most major commercial insurance plans, Medicare, and Medicaid. We also
            welcome Personal Injury (PI), Letter of Protection (LOP), and Workers&apos; Compensation
            cases. For uninsured patients, we offer competitive self-pay pricing — please call for
            current rates.
          </p>
          <p className="mt-3 text-slate-700 leading-relaxed">
            If you have questions about coverage, scheduling, or how to prepare for your scan, our
            front-office team is happy to help. Call <strong>(281) 422-9900</strong>.
          </p>
        </div>
      </section>

      <CtaBar />
    </>
  );
}
