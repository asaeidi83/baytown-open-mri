import {
  BadgeDollarSign,
  CalendarClock,
  FileText,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
} from 'lucide-react';

const items = [
  {
    title: 'Affordable MRI Pricing',
    body: 'Transparent self-pay rates designed to be accessible. Call to confirm pricing for your study.',
    icon: BadgeDollarSign,
  },
  {
    title: 'Same-Day Scheduling',
    body: 'Need an MRI quickly? Same-day appointments are often available based on study type.',
    icon: CalendarClock,
  },
  {
    title: 'Same-Day Reports',
    body: 'Same-day radiology reports are available in many cases so providers can act sooner.',
    icon: FileText,
  },
  {
    title: 'ACR Accredited',
    body: 'Our facility is accredited by the American College of Radiology — a recognized mark of quality.',
    icon: ShieldCheck,
  },
  {
    title: 'Open MRI Comfort',
    body: 'An open-sided design that fits more body types and helps reduce claustrophobic anxiety.',
    icon: Sparkles,
  },
  {
    title: 'Patient-First Care',
    body: 'A friendly, welcoming team focused on a calm, comfortable patient experience.',
    icon: HeartHandshake,
  },
];

export function Advantages() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">Why Baytown Open MRI</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Comfortable, accessible MRI imaging — close to home.
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            We pair quality, ACR-accredited imaging with affordable pricing and a calm,
            patient-first experience. Most patients are in and out the same day.
          </p>
        </div>

        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {items.map(({ title, body, icon: Icon }) => (
            <article
              key={title}
              className="group rounded-xl border border-slate-200 bg-white p-6 hover:border-primary-300 hover:shadow-md transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-700 group-hover:bg-primary-100 transition-colors">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
