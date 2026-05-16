import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export function ServicesPreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">Services</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              MRI imaging tailored to your provider&apos;s order
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              From brain and spine to ACL and extremities — with or without contrast as ordered.
            </p>
          </div>
          <Button asChild variant="outline" className="self-start">
            <Link href="/services">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {SERVICES.slice(0, 8).map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                className="group rounded-xl border border-slate-200 bg-white p-5 hover:border-primary-300 hover:shadow-md transition-all"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal-50 text-teal-700 group-hover:bg-teal-100 transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900 group-hover:text-primary-700 transition-colors">
                  {service.name}
                </h3>
                <p className="mt-1.5 text-sm text-slate-600 line-clamp-2">{service.short}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
