'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Phone, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NAV_LINKS, BUSINESS } from '@/lib/constants';
import { telHref, cn } from '@/lib/utils';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 transition-shadow',
        scrolled ? 'shadow-sm border-b border-slate-200' : 'border-b border-transparent'
      )}
    >
      {/* Top utility bar */}
      <div className="hidden md:block bg-primary-700 text-white text-sm">
        <div className="container flex h-9 items-center justify-between">
          <p className="font-medium">
            ACR Accredited · Open MRI · Affordable Self-Pay Pricing
          </p>
          <div className="flex items-center gap-4">
            <a
              href={telHref(BUSINESS.phone)}
              className="inline-flex items-center gap-1.5 hover:text-teal-200 transition-colors font-medium"
            >
              <Phone className="h-3.5 w-3.5" /> {BUSINESS.phone}
            </a>
            <span className="text-primary-200">|</span>
            <span>{BUSINESS.address.street}, {BUSINESS.address.city}, {BUSINESS.address.state}</span>
          </div>
        </div>
      </div>

      <div className="container flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex items-center gap-2 group" aria-label={`${BUSINESS.name} home`}>
          <span
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-700 to-teal-600 text-white font-bold text-sm shadow-sm group-hover:shadow-md transition-shadow"
            aria-hidden="true"
          >
            BO
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base sm:text-lg font-bold text-slate-900">{BUSINESS.name}</span>
            <span className="text-[11px] sm:text-xs font-medium text-slate-500">Baytown, TX · ACR Accredited</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                  active
                    ? 'text-primary-700 bg-primary-50'
                    : 'text-slate-700 hover:text-primary-700 hover:bg-slate-50'
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" variant="teal" className="hidden sm:inline-flex">
            <a href={telHref(BUSINESS.phone)} aria-label={`Call ${BUSINESS.name}`}>
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </Button>
          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link href="/contact#appointment">Request Appointment</Link>
          </Button>
          <button
            type="button"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <nav className="container py-3 flex flex-col" aria-label="Mobile">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'py-3 px-2 rounded-md text-base font-medium transition-colors',
                    active
                      ? 'text-primary-700 bg-primary-50'
                      : 'text-slate-700 hover:bg-slate-50'
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-3 grid grid-cols-2 gap-2 pb-2">
              <Button asChild variant="teal">
                <a href={telHref(BUSINESS.phone)}>
                  <Phone className="h-4 w-4" /> Call
                </a>
              </Button>
              <Button asChild>
                <Link href="/contact#appointment">Appointment</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
