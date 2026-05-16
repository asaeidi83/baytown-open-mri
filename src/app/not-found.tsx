import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center">
      <div className="container max-w-2xl text-center py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">404 · Not Found</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
          We can&apos;t find that page.
        </h1>
        <p className="mt-3 text-slate-600">
          The link may be outdated or the page may have moved. Try one of the options below.
        </p>
        <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
          <Button asChild>
            <Link href="/">Go home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/services">View MRI services</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Contact us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
