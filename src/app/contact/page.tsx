import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Printer, Clock, Navigation } from 'lucide-react';
import { PageHero } from '@/components/layout/page-hero';
import { AppointmentForm } from '@/components/forms/appointment-form';
import { ContactForm } from '@/components/forms/contact-form';
import { Button } from '@/components/ui/button';
import { BUSINESS } from '@/lib/constants';
import { telHref } from '@/lib/utils';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Contact & Request Appointment',
  description:
    'Contact Baytown Open MRI in Baytown, TX. Call (281) 422-9900, email Baytownopenmri@gmail.com, or request an appointment online.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We're here to help"
        description="Call our team, send a message, or request an appointment. For urgent requests, calling is fastest."
      />

      <section className="py-12 md:py-16">
        <div className="container grid lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Contact information */}
          <aside className="lg:col-span-1 space-y-5">
            <ContactInfo />
            <Hours />
            <Button asChild variant="teal" className="w-full">
              <a href={BUSINESS.mapDirectionsUrl} target="_blank" rel="noopener noreferrer">
                <Navigation className="h-4 w-4" /> Get Directions
              </a>
            </Button>
          </aside>

          {/* Forms */}
          <div className="lg:col-span-2 space-y-10">
            <div
              id="appointment"
              className="scroll-mt-32 rounded-2xl bg-white border border-slate-200 shadow-sm p-6 md:p-8"
            >
              <h2 className="text-2xl font-bold text-slate-900">Request an appointment</h2>
              <p className="mt-1 text-slate-600">
                Fill out the basics and our team will follow up to confirm date, time, and any
                remaining details. <strong>Please do not include sensitive medical information.</strong>
              </p>
              <div className="mt-6">
                <AppointmentForm />
              </div>
            </div>

            <div
              id="contact"
              className="scroll-mt-32 rounded-2xl bg-white border border-slate-200 shadow-sm p-6 md:p-8"
            >
              <h2 className="text-2xl font-bold text-slate-900">Send us a message</h2>
              <p className="mt-1 text-slate-600">
                Have a general question? Send us a quick note and we&apos;ll get back to you.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16">
        <div className="container">
          <div className="rounded-xl overflow-hidden border border-slate-200 bg-white">
            <iframe
              title={`${BUSINESS.name} on Google Maps`}
              src={BUSINESS.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 420 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactInfo() {
  return (
    <div className="rounded-xl bg-white border border-slate-200 p-5 space-y-4">
      <div className="flex gap-3 items-start">
        <MapPin className="h-5 w-5 text-primary-700 mt-0.5 shrink-0" />
        <div>
          <p className="text-sm font-semibold text-slate-900">Address</p>
          <p className="mt-0.5 text-slate-700 text-sm">
            {BUSINESS.address.street}<br />
            {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
          </p>
        </div>
      </div>

      <div className="flex gap-3 items-start">
        <Phone className="h-5 w-5 text-primary-700 mt-0.5 shrink-0" />
        <div>
          <p className="text-sm font-semibold text-slate-900">Phone</p>
          <a href={telHref(BUSINESS.phone)} className="text-slate-700 hover:text-primary-700 text-sm">
            {BUSINESS.phone}
          </a>
        </div>
      </div>

      <div className="flex gap-3 items-start">
        <Printer className="h-5 w-5 text-primary-700 mt-0.5 shrink-0" />
        <div>
          <p className="text-sm font-semibold text-slate-900">Fax</p>
          <p className="text-slate-700 text-sm">{BUSINESS.fax}</p>
        </div>
      </div>

      <div className="flex gap-3 items-start">
        <Mail className="h-5 w-5 text-primary-700 mt-0.5 shrink-0" />
        <div>
          <p className="text-sm font-semibold text-slate-900">Email</p>
          <a
            href={`mailto:${BUSINESS.email}`}
            className="text-slate-700 hover:text-primary-700 text-sm break-all"
          >
            {BUSINESS.email}
          </a>
        </div>
      </div>
    </div>
  );
}

function Hours() {
  return (
    <div className="rounded-xl bg-white border border-slate-200 p-5">
      <div className="flex gap-3 items-start">
        <Clock className="h-5 w-5 text-primary-700 mt-0.5 shrink-0" />
        <div className="flex-1">
          <p className="text-sm font-semibold text-slate-900">Hours</p>
          <ul className="mt-1 text-sm text-slate-700 space-y-0.5">
            {BUSINESS.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-3">
                <span>{h.day}</span>
                <span className="font-medium">{h.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
