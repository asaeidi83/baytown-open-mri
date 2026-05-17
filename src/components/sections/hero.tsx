import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  CalendarCheck,
  ShieldCheck,
  Clock,
  BadgeDollarSign,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BUSINESS } from '@/lib/constants';
import { telHref } from '@/lib/utils';

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#f6fbff] via-white to-white"
    >
      {/* Calming ambient washes */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(13,148,136,0.10),_transparent_45%),radial-gradient(circle_at_bottom_left,_rgba(37,99,235,0.10),_transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent"
      />

      <div className="container relative py-12 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Copy column */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="motion-fade-up">
              <Badge variant="teal" className="mb-5 px-3 py-1 text-[11px] tracking-wide">
                <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-teal-500" />
                ACR ACCREDITED · OPEN MRI · BAYTOWN, TX
              </Badge>
            </div>

            <h1
              id="hero-heading"
              className="motion-fade-up motion-delay-100 text-balance text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold tracking-tight text-slate-900 leading-[1.05]"
            >
              A more comfortable
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-primary-700 to-teal-600 bg-clip-text text-transparent">
                {' '}Open MRI{' '}
              </span>
              experience in Baytown.
            </h1>

            <p className="motion-fade-up motion-delay-200 mt-5 text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
              Spacious, open-design MRI imaging for anxious and claustrophobic patients —
              with same-day scheduling, transparent self-pay pricing, and same-day reports
              available in many cases.
            </p>

            <div className="motion-fade-up motion-delay-300 mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="xl" className="font-semibold shadow-md shadow-primary-900/10">
                <a href={telHref(BUSINESS.phone)} aria-label={`Call ${BUSINESS.name} at ${BUSINESS.phone}`}>
                  <Phone className="h-5 w-5" /> Call {BUSINESS.phone}
                </a>
              </Button>
              <Button
                asChild
                size="xl"
                variant="teal"
                className="font-semibold shadow-md shadow-teal-900/10"
              >
                <Link href="/contact#appointment">
                  <CalendarCheck className="h-5 w-5" /> Request Appointment
                </Link>
              </Button>
            </div>

            {/* Trust strip */}
            <dl className="motion-fade-up motion-delay-400 mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl">
              <TrustItem
                icon={ShieldCheck}
                title="ACR Accredited"
                detail="Quality imaging"
              />
              <TrustItem
                icon={Clock}
                title="Same-Day"
                detail="Scheduling & reports"
              />
              <TrustItem
                icon={BadgeDollarSign}
                title="Self-Pay Friendly"
                detail="Transparent pricing"
              />
            </dl>
          </div>

          {/* Image column */}
          <div className="lg:col-span-6 xl:col-span-6 motion-fade motion-delay-300">
            <ImagingFrame />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustItem({
  icon: Icon,
  title,
  detail,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  detail: string;
}) {
  return (
    <div className="group flex items-start gap-3 rounded-lg border border-slate-200/80 bg-white/80 backdrop-blur-sm p-4 transition-all duration-300 hover:border-primary-200 hover:shadow-sm">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-teal-50 text-teal-700 transition-colors group-hover:bg-teal-100">
        <Icon className="h-4.5 w-4.5" />
      </span>
      <div>
        <dt className="text-sm font-semibold text-slate-900 leading-snug">{title}</dt>
        <dd className="text-xs text-slate-500 mt-0.5">{detail}</dd>
      </div>
    </div>
  );
}

function ImagingFrame() {
  return (
    <div className="relative">
      {/* Ambient glow behind image */}
      <div
        aria-hidden="true"
        className="motion-pulse-glow absolute -inset-6 md:-inset-10 -z-10 rounded-[2rem] bg-gradient-to-tr from-primary-200/40 via-teal-200/40 to-transparent blur-3xl"
      />

      {/* Image frame */}
      <div className="relative overflow-hidden rounded-[1.4rem] bg-slate-100 ring-1 ring-slate-200/80 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.25)] motion-shimmer">
        <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5]">
          <Image
            src="/images/open-mri-room.png"
            alt="The Open MRI scanner suite at Baytown Open MRI, designed for patient comfort."
            fill
            priority
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover"
          />

          {/* Soft top-to-transparent gradient over the photo */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-tr from-slate-900/35 via-slate-900/0 to-transparent"
          />

          {/* Floating tag — ACR */}
          <div className="motion-fade-up motion-delay-500 absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-sm ring-1 ring-slate-200/60">
            <ShieldCheck className="h-3.5 w-3.5 text-teal-600" />
            ACR Accredited Facility
          </div>

          {/* Floating tag — Comfort */}
          <div className="motion-fade-up motion-delay-500 absolute right-5 top-5 inline-flex items-center gap-2 rounded-full bg-primary-700/95 backdrop-blur px-3 py-1.5 text-xs font-semibold text-white shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Claustrophobic-Friendly
          </div>

          {/* Bottom info card */}
          <div className="motion-fade-up motion-delay-500 absolute inset-x-4 bottom-4 md:inset-x-6 md:bottom-6">
            <div className="rounded-xl bg-white/95 backdrop-blur-md p-4 md:p-5 ring-1 ring-slate-200/60 shadow-lg">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <p className="text-sm font-semibold text-slate-900">
                  Now scheduling — same-day appointments available
                </p>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-3 text-center">
                <Stat label="MRI studies" value="12+" />
                <Stat label="Reports" value="Same day" />
                <Stat label="Pricing" value="Self-pay" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500">{label}</p>
      <p className="mt-0.5 text-sm font-bold text-slate-900">{value}</p>
    </div>
  );
}
