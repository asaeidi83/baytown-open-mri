import { CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const benefits = [
  'Open-sided design — far less confining than a closed MRI bore',
  'Comfortable for claustrophobic, anxious, or panic-prone patients',
  'Accommodates larger body sizes and patients who cannot fit a closed MRI',
  'Easier for pediatric and elderly patients to remain still',
  'Family member can often stay close by during the scan',
  'Quiet, calm environment with friendly support staff',
];

export function OpenMriBenefits() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <Badge variant="teal" className="mb-3">Open MRI</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              A more comfortable MRI — designed with anxious patients in mind.
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Traditional closed MRI machines use a narrow tunnel that can feel
              overwhelming, especially for patients who are claustrophobic, larger-bodied,
              or simply uncomfortable in confined spaces. Our Open MRI offers a spacious
              alternative without compromising on diagnostic quality.
            </p>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Tell us if you&apos;ve had a difficult experience in a closed MRI before — we&apos;ll
              walk you through the entire scan and do everything we can to make it easier.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {benefits.map((b) => (
              <li
                key={b}
                className="flex gap-3 items-start rounded-lg bg-white border border-slate-200 p-4 shadow-sm"
              >
                <CheckCircle2 className="h-5 w-5 text-teal-600 mt-0.5 shrink-0" />
                <span className="text-slate-700">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
