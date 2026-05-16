import Link from 'next/link';
import { Phone, CalendarCheck, ShieldCheck, Clock, BadgeDollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BUSINESS } from '@/lib/constants';
import { telHref } from '@/lib/utils';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(13,148,136,0.10),_transparent_45%),radial-gradient(circle_at_bottom_left,_rgba(37,99,235,0.10),_transparent_55%)]"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-grid-slate opacity-30" />

      <div className="container relative py-14 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <Badge variant="teal" className="mb-4">
              ACR Accredited · Open MRI · Baytown, TX
            </Badge>
            <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
              Affordable <span className="text-primary-700">Open MRI</span> in
              <br className="hidden sm:block" />
              <span className="text-teal-700"> Baytown, TX</span>
            </h1>
            <p className="mt-5 text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
              A more comfortable MRI experience for claustrophobic and anxious patients —
              with same-day scheduling, competitive self-pay pricing, and same-day reports
              available in many cases.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="xl" className="font-semibold">
                <a href={telHref(BUSINESS.phone)}>
                  <Phone className="h-5 w-5" /> Call {BUSINESS.phone}
                </a>
              </Button>
              <Button asChild size="xl" variant="teal" className="font-semibold">
                <Link href="/contact#appointment">
                  <CalendarCheck className="h-5 w-5" /> Request Appointment
                </Link>
              </Button>
            </div>

            <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
              <div className="flex items-start gap-3 rounded-lg bg-white/80 backdrop-blur-sm border border-slate-200 p-4">
                <ShieldCheck className="h-6 w-6 text-teal-600 shrink-0" />
                <div>
                  <dt className="text-sm font-semibold text-slate-900">ACR Accredited</dt>
                  <dd className="text-xs text-slate-500">Quality imaging standard</dd>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg bg-white/80 backdrop-blur-sm border border-slate-200 p-4">
                <Clock className="h-6 w-6 text-teal-600 shrink-0" />
                <div>
                  <dt className="text-sm font-semibold text-slate-900">Same-Day Scheduling</dt>
                  <dd className="text-xs text-slate-500">Often available</dd>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg bg-white/80 backdrop-blur-sm border border-slate-200 p-4">
                <BadgeDollarSign className="h-6 w-6 text-teal-600 shrink-0" />
                <div>
                  <dt className="text-sm font-semibold text-slate-900">Self-Pay Friendly</dt>
                  <dd className="text-xs text-slate-500">Affordable pricing</dd>
                </div>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-5">
            <HeroCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroCard() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-primary-200/40 via-teal-200/40 to-transparent blur-xl"
      />
      <div className="relative rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 p-6 md:p-7">
        <div className="flex items-center gap-2 mb-5">
          <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
          <span className="text-sm font-medium text-slate-700">Open MRI · Now Scheduling</span>
        </div>

        <h2 className="text-lg font-bold text-slate-900">Why patients choose us</h2>
        <ul className="mt-4 space-y-3">
          {[
            'Spacious, open-design MRI — ideal for claustrophobic patients',
            'Same-day MRI reports available in many cases',
            'Most major insurance, Medicare, and Medicaid accepted',
            "PI, LOP, and Workers' Compensation cases welcome",
            'Comfortable, welcoming environment',
          ].map((item) => (
            <li key={item} className="flex gap-3 text-sm text-slate-700">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-500 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-lg bg-primary-50 border border-primary-100 p-4">
          <p className="text-sm font-semibold text-primary-900">Need pricing or insurance info?</p>
          <p className="mt-1 text-sm text-primary-800">
            Our team is happy to verify your benefits or share self-pay rates over the phone.
          </p>
          <Button asChild size="sm" className="mt-3 w-full">
            <a href={telHref(BUSINESS.phone)}>
              <Phone className="h-4 w-4" /> Call {BUSINESS.phone}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
