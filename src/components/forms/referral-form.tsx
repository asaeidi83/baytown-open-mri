'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FormStatusBanner, type FormState } from './form-status';
import { Send, ShieldAlert } from 'lucide-react';

const STUDIES = [
  'Brain MRI',
  'Cervical Spine MRI',
  'Thoracic Spine MRI',
  'Lumbar Spine MRI',
  'Knee MRI',
  'Shoulder MRI',
  'ACL MRI',
  'Extremity MRI',
  'MRI with contrast',
  'MRI without contrast',
  'MRI with and without contrast',
  'Other',
];

const PRIORITIES = ['Routine', 'Soon', 'Same-day if possible'];

export function ReferralForm() {
  const [state, setState] = React.useState<FormState>({ status: 'idle' });
  const [study, setStudy] = React.useState<string>('');
  const [priority, setPriority] = React.useState<string>('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState({ status: 'submitting' });

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set('studyRequested', study);
    formData.set('priority', priority);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/referral', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Submission failed');
      setState({
        status: 'success',
        message:
          'Thank you. Our team will follow up to confirm the order and coordinate scheduling. For urgent requests, please call (281) 422-9900 or fax (281) 422-9910.',
      });
      form.reset();
      setStudy('');
      setPriority('');
    } catch {
      setState({
        status: 'error',
        message:
          'We could not submit your referral. Please fax the order to (281) 422-9910 or call (281) 422-9900.',
      });
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="rounded-md border border-amber-200 bg-amber-50 p-4 flex gap-3">
        <ShieldAlert className="h-5 w-5 text-amber-700 mt-0.5 shrink-0" />
        <p className="text-sm text-amber-900 leading-relaxed">
          This form is intended for clinic-level coordination only. Please <strong>do not include
          PHI</strong> in this form. Send signed orders by fax to <strong>(281) 422-9910</strong>{' '}
          or through your standard secure channel.
        </p>
      </div>

      <FormStatusBanner state={state} />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="r-providerName">Provider / clinician name *</Label>
          <Input id="r-providerName" name="providerName" required />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="r-clinic">Clinic / practice *</Label>
          <Input id="r-clinic" name="clinic" required />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="r-phone">Office phone *</Label>
          <Input id="r-phone" name="phone" type="tel" inputMode="tel" required />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="r-email">Office email</Label>
          <Input id="r-email" name="email" type="email" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="r-study">Study requested *</Label>
          <Select value={study} onValueChange={setStudy} required>
            <SelectTrigger id="r-study">
              <SelectValue placeholder="Select study" />
            </SelectTrigger>
            <SelectContent>
              {STUDIES.map((s) => (
                <SelectItem key={s} value={s}>{s}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="r-priority">Priority</Label>
          <Select value={priority} onValueChange={setPriority}>
            <SelectTrigger id="r-priority">
              <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent>
              {PRIORITIES.map((s) => (
                <SelectItem key={s} value={s}>{s}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="r-notes">Coordination notes (no PHI)</Label>
        <Textarea
          id="r-notes"
          name="notes"
          maxLength={600}
          placeholder="Best callback number, scheduling preferences, fax confirmation, etc."
        />
      </div>

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <Input id="r-company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={state.status === 'submitting'}
        className="w-full sm:w-auto"
      >
        <Send className="h-4 w-4" />
        {state.status === 'submitting' ? 'Sending…' : 'Submit Referral Coordination'}
      </Button>
    </form>
  );
}
