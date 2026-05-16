'use client';

import { CheckCircle2, AlertCircle } from 'lucide-react';

export type FormState =
  | { status: 'idle' }
  | { status: 'submitting' }
  | { status: 'success'; message: string }
  | { status: 'error'; message: string };

export function FormStatusBanner({ state }: { state: FormState }) {
  if (state.status === 'success') {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-md border border-green-200 bg-green-50 p-4 flex gap-3"
      >
        <CheckCircle2 className="h-5 w-5 text-green-700 shrink-0 mt-0.5" />
        <p className="text-sm text-green-900">{state.message}</p>
      </div>
    );
  }
  if (state.status === 'error') {
    return (
      <div
        role="alert"
        className="rounded-md border border-red-200 bg-red-50 p-4 flex gap-3"
      >
        <AlertCircle className="h-5 w-5 text-red-700 shrink-0 mt-0.5" />
        <p className="text-sm text-red-900">{state.message}</p>
      </div>
    );
  }
  return null;
}
