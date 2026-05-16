'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="min-h-[60vh] flex items-center">
      <div className="container max-w-2xl text-center py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-red-700">Something went wrong</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
          We hit an unexpected error.
        </h1>
        <p className="mt-3 text-slate-600">
          Please try again. If the problem continues, you can reach us by phone at (281) 422-9900.
        </p>
        <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
          <Button onClick={() => reset()}>Try again</Button>
          <Button asChild variant="outline">
            <Link href="/">Go home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
