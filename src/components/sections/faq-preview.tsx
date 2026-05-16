import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { FAQS } from '@/lib/constants';

export function FaqPreview() {
  const preview = FAQS.slice(0, 5);
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">FAQ</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Quick answers about Open MRI, scheduling, insurance, and what to expect.
          </p>
        </div>

        <div className="mt-10 rounded-xl border border-slate-200 bg-white p-2 sm:p-4">
          <Accordion type="single" collapsible className="w-full">
            {preview.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="px-3 sm:px-4">
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-8 flex justify-center">
          <Button asChild variant="outline">
            <Link href="/faq">
              See all FAQs <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
