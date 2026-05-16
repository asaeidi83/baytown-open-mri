import type { Metadata } from 'next';
import { ShieldCheck, Heart, Award, Users } from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { CtaBar } from '@/components/layout/cta-bar';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'About Baytown Open MRI',
  description:
    'Baytown Open MRI is an ACR-accredited Open MRI imaging center in Baytown, TX, offering affordable, comfortable, and high-quality MRI services.',
  path: '/about',
});

const values = [
  {
    icon: ShieldCheck,
    title: 'Quality You Can Trust',
    body: 'Our facility is accredited by the American College of Radiology — a respected indicator of imaging quality.',
  },
  {
    icon: Heart,
    title: 'Comfort First',
    body: 'Our Open MRI is designed with anxious and claustrophobic patients in mind, without compromising image quality.',
  },
  {
    icon: Award,
    title: 'Affordable Pricing',
    body: 'Transparent self-pay pricing and most insurance plans accepted. We work to keep imaging accessible.',
  },
  {
    icon: Users,
    title: 'Patient-First Team',
    body: 'A warm, knowledgeable staff focused on making your visit smooth from check-in to follow-up.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="High-quality MRI imaging, designed around the patient"
        description="Baytown Open MRI was built to give Baytown-area patients a more comfortable, more affordable MRI option — close to home, with quick scheduling and timely reports."
      />

      <section className="py-12 md:py-20">
        <div className="container grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Our mission
            </h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Magnetic Resonance Imaging is one of the most powerful diagnostic tools in modern
              medicine — but it can also be a stressful experience, especially in a traditional
              closed MRI bore. Our facility was built to make that experience better.
            </p>
            <p className="mt-3 text-slate-700 leading-relaxed">
              We combine an Open MRI system with a calm, welcoming environment so patients feel
              taken care of — not rushed through a process. ACR accreditation reflects our
              commitment to quality, and our pricing model is designed to be transparent and
              accessible for self-pay patients as well as those using insurance.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">What sets us apart</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="rounded-xl border border-slate-200 bg-white p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 font-semibold text-slate-900">{title}</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12 md:py-20">
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">ACR Accreditation</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Accreditation by the American College of Radiology is a voluntary, peer-reviewed
            evaluation of an imaging facility&apos;s personnel qualifications, equipment performance,
            and image quality. As an ACR-accredited Open MRI facility, Baytown Open MRI meets the
            ACR&apos;s recognized standards for MRI imaging.
          </p>
        </div>
      </section>

      <CtaBar />
    </>
  );
}
