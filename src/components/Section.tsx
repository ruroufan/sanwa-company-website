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
    <section id={id} className={`scroll-mt-24 px-5 py-24 md:px-8 md:py-36 ${className}`}>
      <div className="fade-in mx-auto max-w-6xl">
        {label ? (
          <p className="mb-6 text-[11px] font-semibold uppercase leading-5 tracking-[0.24em] text-ink/42">
            {label}
          </p>
        ) : null}
        {title ? (
          <h2 className="max-w-3xl text-4xl font-bold leading-tight text-ink md:text-5xl md:leading-[1.08]">
            {title}
          </h2>
        ) : null}
        {children}
      </div>
    </section>
  );
}
