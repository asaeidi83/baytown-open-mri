import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, CalendarCheck, Navigation, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BUSINESS } from '@/lib/constants';
import { telHref } from '@/lib/utils';

export function Location() {
  return (
    <section
      aria-labelledby="location-heading"
      className="relative bg-white py-16 md:py-24"
    >
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Exterior image */}
          <div className="lg:col-span-6 order-2 lg:order-1 motion-fade-up">
            <div className="relative">
              <div
                aria-hidden="true"
                className="motion-pulse-glow absolute -inset-4 md:-inset-8 -z-10 rounded-[2rem] bg-gradient-to-br from-teal-100/50 via-primary-100/40 to-transparent blur-3xl"
              />
              <div className="relative overflow-hidden rounded-[1.4rem] bg-slate-100 ring-1 ring-slate-200/80 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.25)]">
                <div className="relative aspect-[5/4]">
                  <Image
                    src="/images/clinic-exterior.png.PNG"
                    alt="The Baytown Open MRI clinic building exterior at 4310 Garth Rd, Baytown, TX."
                    fill
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-cover"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-tr from-slate-900/30 via-transparent to-transparent"
                  />
                  {/* Floating address chip */}
                  <div className="absolute left-4 bottom-4 md:left-6 md:bottom-6 inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-sm ring-1 ring-slate-200/60">
                    <MapPin className="h-3.5 w-3.5 text-primary-700" />
                    4310 Garth Rd #A, Baytown
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Address card */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="motion-fade-up">
              <Badge className="mb-4">Visit Us</Badge>
            </div>
            <h2
              id="location-heading"
              className="motion-fade-up motion-delay-100 text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-slate-900 leading-tight"
            >
              Conveniently located on{' '}
              <span className="text-primary-700">Garth Road</span> in Baytown.
            </h2>
            <p className="motion-fade-up motion-delay-200 mt-4 text-lg text-slate-600 leading-relaxed max-w-xl">
              Easy to reach from Highlands, Mont Belvieu, Channelview, La Porte, and the greater
              Houston area. Convenient parking and accessible entry.
            </p>

            <div className="motion-fade-up motion-delay-300 mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
              <InfoCard
                icon={MapPin}
                title="Address"
                primary={`${BUSINESS.address.street}`}
                secondary={`${BUSINESS.address.city}, ${BUSINESS.address.state} ${BUSINESS.address.zip}`}
              />
              <InfoCard
                icon={Phone}
                title="Call us"
                primary={BUSINESS.phone}
                secondary="Mon–Fri · 8 AM – 5 PM"
                href={telHref(BUSINESS.phone)}
              />
              <InfoCard
                icon={Clock}
                title="Hours"
                primary="Mon – Fri · 8 AM – 5 PM"
                secondary="Saturday by appointment"
              />
              <InfoCard
                icon={Navigation}
                title="Directions"
                primary="Open in Google Maps"
                secondary="Door-to-door route"
                href={BUSINESS.mapDirectionsUrl}
                external
              />
            </div>

            <div className="motion-fade-up motion-delay-400 mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="font-semibold">
                <a href={telHref(BUSINESS.phone)} aria-label={`Call ${BUSINESS.name}`}>
                  <Phone className="h-5 w-5" /> Call Now
                </a>
              </Button>
              <Button asChild size="lg" variant="teal" className="font-semibold">
                <Link href="/contact#appointment">
                  <CalendarCheck className="h-5 w-5" /> Request Appointment
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a
                  href={BUSINESS.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="h-5 w-5" /> Directions
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  primary,
  secondary,
  href,
  external,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  primary: string;
  secondary: string;
  href?: string;
  external?: boolean;
}) {
  const inner = (
    <div className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-white p-4 transition-all duration-300 hover:border-primary-200 hover:shadow-sm">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-700">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
          {title}
        </p>
        <p className="mt-0.5 text-sm font-semibold text-slate-900 leading-snug">
          {primary}
        </p>
        <p className="mt-0.5 text-xs text-slate-500">{secondary}</p>
      </div>
    </div>
  );

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {inner}
      </a>
    ) : (
      <a href={href} className="block">
        {inner}
      </a>
    );
  }
  return inner;
}
