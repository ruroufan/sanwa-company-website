import type { Translation } from '../i18n/translations';
import { Section } from './Section';

type ServicesProps = {
  t: Translation;
};

export function Services({ t }: ServicesProps) {
  return (
    <Section id="services" label={t.services.label} title={t.services.title} className="bg-sand">
      <p className="mt-10 max-w-2xl text-base leading-8 text-ink/54 md:text-lg md:leading-9">
        {t.services.description}
      </p>
      <div className="mt-20 divide-y divide-line border-y border-line">
        {t.services.items.map((service, index) => (
          <article
            key={service.title}
            className="grid gap-8 py-10 transition duration-300 hover:bg-mist/55 md:grid-cols-[120px_0.78fr_1fr] md:items-start md:px-6"
          >
            <p className="text-sm font-bold text-ink/36">{String(index + 1).padStart(2, '0')}</p>
            <h3 className="text-2xl font-bold leading-tight text-ink md:text-3xl">{service.title}</h3>
            <div>
              <p className="text-sm leading-7 text-ink/56 md:text-base md:leading-8">{service.description}</p>
              <div className="mt-8 flex flex-wrap gap-x-4 gap-y-3">
                {service.tags.map((tag) => (
                  <span key={tag} className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink/42">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
