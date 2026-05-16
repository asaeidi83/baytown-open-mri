'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FormStatusBanner, type FormState } from './form-status';
import { Send, ShieldAlert } from 'lucide-react';

const STUDY_OPTIONS = [
  'Not sure',
  'Brain MRI',
  'Cervical Spine MRI',
  'Thoracic Spine MRI',
  'Lumbar Spine MRI',
  'Knee MRI',
  'Shoulder MRI',
  'ACL MRI',
  'Extremity MRI',
  'Other',
];

const CASE_TYPES = [
  'Insurance',
  'Self-pay',
  'Personal Injury (PI)',
  'Letter of Protection (LOP)',
  "Workers' Compensation",
  'Not sure',
];

export function AppointmentForm() {
  const [state, setState] = React.useState<FormState>({ status: 'idle' });
  const [study, setStudy] = React.useState<string>('');
  const [caseType, setCaseType] = React.useState<string>('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState({ status: 'submitting' });

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set('studyRequested', study);
    formData.set('caseType', caseType);

    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Submission failed');
      setState({
        status: 'success',
        message:
          "Thank you. Our team will reach out shortly to confirm your appointment. For urgent requests, please call (281) 422-9900.",
      });
      form.reset();
      setStudy('');
      setCaseType('');
    } catch {
      setState({
        status: 'error',
        message:
          'Something went wrong submitting your request. Please call (281) 422-9900 and we will help right away.',
      });
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="rounded-md border border-amber-200 bg-amber-50 p-4 flex gap-3">
        <ShieldAlert className="h-5 w-5 text-amber-700 mt-0.5 shrink-0" />
        <p className="text-sm text-amber-900 leading-relaxed">
          For your privacy, <strong>please do not include sensitive medical information</strong>
          {' '}in this form. Our team will collect any required details securely by phone.
        </p>
      </div>

      <FormStatusBanner state={state} />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="firstName">First name *</Label>
          <Input id="firstName" name="firstName" autoComplete="given-name" required />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="lastName">Last name *</Label>
          <Input id="lastName" name="lastName" autoComplete="family-name" required />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone number *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="(281) 555-0100"
            required
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="studyRequested">Study requested</Label>
          <Select value={study} onValueChange={setStudy}>
            <SelectTrigger id="studyRequested">
              <SelectValue placeholder="Select a study" />
            </SelectTrigger>
            <SelectContent>
              {STUDY_OPTIONS.map((s) => (
                <SelectItem key={s} value={s}>{s}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="caseType">Payment / case type</Label>
          <Select value={caseType} onValueChange={setCaseType}>
            <SelectTrigger id="caseType">
              <SelectValue placeholder="Select case type" />
            </SelectTrigger>
            <SelectContent>
              {CASE_TYPES.map((s) => (
                <SelectItem key={s} value={s}>{s}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="referringProvider">Referring provider (optional)</Label>
        <Input
          id="referringProvider"
          name="referringProvider"
          placeholder="Provider name or clinic"
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="preferredTime">Preferred day or time</Label>
        <Input
          id="preferredTime"
          name="preferredTime"
          placeholder="e.g., Weekday mornings, ASAP, this Friday"
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="notes">Anything else? (do not include medical details)</Label>
        <Textarea
          id="notes"
          name="notes"
          maxLength={600}
          placeholder="Best callback number, language preference, accessibility needs, etc."
        />
      </div>

      <div className="flex items-start gap-3 rounded-md border border-slate-200 bg-slate-50 p-4">
        <Checkbox id="consent" name="consent" required />
        <Label htmlFor="consent" className="text-sm text-slate-700 font-normal leading-snug">
          I consent to being contacted by Baytown Open MRI about my appointment request by phone,
          email, or text. I understand this form is not for medical advice or sensitive health
          information.
        </Label>
      </div>

      {/* Honeypot field */}
      <div className="hidden" aria-hidden="true">
        <Label htmlFor="company">Company</Label>
        <Input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full sm:w-auto"
        disabled={state.status === 'submitting'}
      >
        <Send className="h-4 w-4" />
        {state.status === 'submitting' ? 'Sending…' : 'Request Appointment'}
      </Button>
    </form>
  );
}
