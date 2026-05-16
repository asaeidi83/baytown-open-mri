import Link from 'next/link';
import { Phone, CalendarCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BUSINESS } from '@/lib/constants';
import { telHref } from '@/lib/utils';

export function CtaBar() {
  return (
    <section className="bg-gradient-to-br from-primary-700 via-primary-700 to-teal-700 text-white">
      <div className="container py-12 md:py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">
            Ready to schedule your MRI in Baytown?
          </h2>
          <p className="mt-2 text-primary-100 text-base md:text-lg">
            Same-day appointments are often available. Speak with our team for self-pay pricing,
            insurance verification, or to request an appointment.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 md:flex-shrink-0">
          <Button
            asChild
            size="lg"
            className="bg-white text-primary-800 hover:bg-primary-50"
          >
            <a href={telHref(BUSINESS.phone)}>
              <Phone className="h-5 w-5" /> Call {BUSINESS.phone}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-teal-500 hover:bg-teal-400 text-white"
          >
            <Link href="/contact#appointment">
              <CalendarCheck className="h-5 w-5" /> Request Appointment
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
