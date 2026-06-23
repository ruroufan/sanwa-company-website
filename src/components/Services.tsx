import type { Translation } from '../i18n/translations';
import { Section } from './Section';

type ServicesProps = {
  t: Translation;
};

export function Services({ t }: ServicesProps) {
  return (
    <Section id="services" label={t.services.label} title={t.services.title} className="bg-mist">
      <p className="mt-6 max-w-2xl text-base leading-8 text-ink/65">{t.services.description}</p>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {t.services.items.map((service, index) => (
          <article
            key={service.title}
            className="group rounded-lg border border-line bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-navy/35 hover:shadow-soft"
          >
            <div className="flex items-start justify-between gap-5">
              <p className="text-sm font-semibold text-navy">{String(index + 1).padStart(2, '0')}</p>
              <span className="translate-x-0 text-xl text-ink/30 transition group-hover:translate-x-1 group-hover:text-navy">→</span>
            </div>
            <h3 className="mt-10 text-xl font-semibold text-ink transition group-hover:text-navy">{service.title}</h3>
            <p className="mt-5 text-sm leading-7 text-ink/62">{service.description}</p>
            <div className="mt-8 h-px w-12 bg-navy/40 transition group-hover:w-20" />
          </article>
        ))}
      </div>
    </Section>
  );
}
