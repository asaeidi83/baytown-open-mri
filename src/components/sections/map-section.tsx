import { MapPin, Phone, Clock, Mail, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BUSINESS } from '@/lib/constants';
import { telHref } from '@/lib/utils';

export function MapSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container">
        <div className="max-w-3xl mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">Visit Us</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Located in Baytown — easy to reach from Houston, Mont Belvieu & Highlands
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Convenient parking, accessible entry, and a calm waiting area.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-1 space-y-4">
            <div className="rounded-xl bg-white border border-slate-200 p-5">
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 text-primary-700 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">Address</p>
                  <p className="mt-0.5 text-slate-600 text-sm">
                    {BUSINESS.address.street}<br />
                    {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-white border border-slate-200 p-5">
              <div className="flex gap-3">
                <Phone className="h-5 w-5 text-primary-700 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">Phone & Fax</p>
                  <p className="mt-0.5 text-slate-600 text-sm">
                    <a href={telHref(BUSINESS.phone)} className="hover:text-primary-700 transition-colors">
                      {BUSINESS.phone}
                    </a>
                    <br />
                    Fax: {BUSINESS.fax}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-white border border-slate-200 p-5">
              <div className="flex gap-3">
                <Mail className="h-5 w-5 text-primary-700 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">Email</p>
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="mt-0.5 block text-slate-600 text-sm hover:text-primary-700 transition-colors break-all"
                  >
                    {BUSINESS.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-white border border-slate-200 p-5">
              <div className="flex gap-3">
                <Clock className="h-5 w-5 text-primary-700 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">Hours</p>
                  <ul className="mt-1 text-sm text-slate-600 space-y-0.5">
                    {BUSINESS.hours.map((h) => (
                      <li key={h.day} className="flex justify-between gap-3">
                        <span>{h.day}</span>
                        <span className="text-slate-700 font-medium text-right">{h.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <Button asChild className="w-full" variant="teal">
              <a href={BUSINESS.mapDirectionsUrl} target="_blank" rel="noopener noreferrer">
                <Navigation className="h-4 w-4" /> Get Directions
              </a>
            </Button>
          </div>

          <div className="lg:col-span-2 rounded-xl overflow-hidden border border-slate-200 bg-white min-h-[360px] md:min-h-[460px] shadow-sm">
            <iframe
              title={`${BUSINESS.name} on Google Maps`}
              src={BUSINESS.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 460 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
