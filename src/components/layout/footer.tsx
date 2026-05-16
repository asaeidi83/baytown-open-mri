import Link from 'next/link';
import { Phone, Mail, MapPin, Printer, Clock } from 'lucide-react';
import { BUSINESS, NAV_LINKS, SERVICES } from '@/lib/constants';
import { telHref } from '@/lib/utils';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 text-slate-300 mt-24">
      <div className="container py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <span
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-teal-500 text-white font-bold text-sm"
              aria-hidden="true"
            >
              BO
            </span>
            <span className="text-lg font-bold text-white">{BUSINESS.name}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            ACR-accredited Open MRI imaging center serving Baytown and the greater Houston area.
            Affordable pricing, same-day scheduling, and same-day reports available in many cases.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-300">
            <span className="inline-block h-2 w-2 rounded-full bg-teal-400" />
            ACR Accredited Facility
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICES.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services#${s.slug}`}
                  className="hover:text-white transition-colors"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-teal-400 shrink-0" />
              <span>
                {BUSINESS.address.street}<br />
                {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-teal-400 shrink-0" />
              <a href={telHref(BUSINESS.phone)} className="hover:text-white transition-colors">
                {BUSINESS.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Printer className="h-4 w-4 text-teal-400 shrink-0" />
              <span>{BUSINESS.fax} (fax)</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-teal-400 shrink-0" />
              <a
                href={`mailto:${BUSINESS.email}`}
                className="hover:text-white transition-colors break-all"
              >
                {BUSINESS.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="h-4 w-4 mt-0.5 text-teal-400 shrink-0" />
              <div className="text-xs leading-relaxed">
                Mon–Fri: 8:00 AM – 5:00 PM<br />
                Sat: By Appointment<br />
                Sun: Closed
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {year} {BUSINESS.name}. All rights reserved.</p>
          <p className="text-center sm:text-right">
            This website is for informational purposes only and is not a substitute for professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
