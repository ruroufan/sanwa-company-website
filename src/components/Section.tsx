import type { ReactNode } from 'react';
import type { SectionId } from '../i18n/translations';

type SectionProps = {
  id: SectionId;
  label?: string;
  title?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, label, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 px-5 py-16 md:px-8 md:py-24 ${className}`}>
      <div className="fade-in mx-auto max-w-7xl">
        {label ? (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-navy">{label}</p>
        ) : null}
        {title ? (
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-ink md:text-5xl">
            {title}
          </h2>
        ) : null}
        {children}
      </div>
    </section>
  );
}
