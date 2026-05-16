import { Badge } from '@/components/ui/badge';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white border-b border-slate-100">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(13,148,136,0.08),_transparent_50%),radial-gradient(circle_at_bottom_left,_rgba(37,99,235,0.10),_transparent_55%)]"
      />
      <div className="container relative py-14 md:py-20 max-w-4xl">
        {eyebrow && (
          <Badge variant="teal" className="mb-4">{eyebrow}</Badge>
        )}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-lg text-slate-600 max-w-2xl leading-relaxed">{description}</p>
        )}
      </div>
    </section>
  );
}
