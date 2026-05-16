'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { FormStatusBanner, type FormState } from './form-status';
import { Send } from 'lucide-react';

export function ContactForm() {
  const [state, setState] = React.useState<FormState>({ status: 'idle' });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState({ status: 'submitting' });

    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Submission failed');
      setState({
        status: 'success',
        message: 'Thanks for reaching out. Our team will respond shortly.',
      });
      form.reset();
    } catch {
      setState({
        status: 'error',
        message:
          'Sorry, we could not send your message. Please call (281) 422-9900 or email us directly.',
      });
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <FormStatusBanner state={state} />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="c-name">Full name *</Label>
          <Input id="c-name" name="name" autoComplete="name" required />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="c-phone">Phone number *</Label>
          <Input
            id="c-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="c-email">Email</Label>
        <Input id="c-email" name="email" type="email" autoComplete="email" />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="c-subject">Subject</Label>
        <Input id="c-subject" name="subject" placeholder="How can we help?" />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="c-message">Message *</Label>
        <Textarea
          id="c-message"
          name="message"
          maxLength={1000}
          placeholder="Please share a general description (do not include sensitive medical details)."
          required
        />
      </div>

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <Input id="c-company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={state.status === 'submitting'}
        className="w-full sm:w-auto"
      >
        <Send className="h-4 w-4" />
        {state.status === 'submitting' ? 'Sending…' : 'Send Message'}
      </Button>
    </form>
  );
}
