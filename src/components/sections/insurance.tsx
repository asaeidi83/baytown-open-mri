import { CheckCircle2, FileSignature, HardHat, Stethoscope } from 'lucide-react';
import { INSURANCE } from '@/lib/constants';
import { Badge } from '@/components/ui/badge';

const caseTypes = [
  {
    icon: FileSignature,
    title: 'Personal Injury (PI)',
    body: 'We work with attorneys and clinics on PI cases — including documentation and timely reporting.',
  },
  {
    icon: Stethoscope,
    title: 'Letter of Protection (LOP)',
    body: 'LOP cases are welcome. Our team is experienced coordinating with treating providers.',
  },
  {
    icon: HardHat,
    title: "Workers' Compensation",
    body: "Workers' Comp claims accepted with required referrals and authorization paperwork.",
  },
];

export function Insurance() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <Badge className="mb-3">Insurance & Pricing</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Most insurance plans accepted — plus competitive self-pay pricing.
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              We accept most major commercial insurance plans, Medicare, and Medicaid.
              Self-pay (cash) options are also available with transparent pricing.
              Call our team to verify your specific plan or ask about current self-pay rates.
            </p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {INSURANCE.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4">
            {caseTypes.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 flex gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-700">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="mt-1 text-slate-600 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
