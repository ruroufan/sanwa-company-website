import type { Translation } from '../i18n/translations';
import { Section } from './Section';

type AboutProps = {
  t: Translation;
};

export function About({ t }: AboutProps) {
  return (
    <Section id="about" label={t.about.label} title={t.about.title}>
      <div className="mt-10 grid gap-8 border-t border-line pt-10 md:grid-cols-[0.72fr_1.28fr]">
        <aside className="border-l-2 border-navy pl-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ink/45">{t.common.sectionLabel}</p>
          <p className="mt-8 text-2xl font-semibold leading-snug text-ink md:text-3xl">{t.about.philosophy}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {t.about.highlights.map((highlight) => (
              <span key={highlight} className="rounded-full bg-mist px-4 py-2 text-xs font-semibold text-ink/62">
                {highlight}
              </span>
            ))}
          </div>
        </aside>
        <div className="space-y-5 border border-line bg-white p-6 text-base leading-8 text-ink/68 shadow-[0_14px_40px_rgba(18,20,23,0.04)] md:p-8 md:text-lg">
          {t.about.body.map((paragraph, index) => (
            <p key={paragraph} className={index === 0 ? 'text-ink/78' : ''}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
