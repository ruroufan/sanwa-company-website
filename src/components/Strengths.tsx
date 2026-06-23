import type { Translation } from '../i18n/translations';
import { Section } from './Section';

type StrengthsProps = {
  t: Translation;
};

export function Strengths({ t }: StrengthsProps) {
  return (
    <Section id="strengths" label={t.strengths.label} title={t.strengths.title}>
      <p className="mt-6 max-w-2xl text-base leading-8 text-ink/65">{t.strengths.description}</p>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {t.strengths.items.map((strength, index) => (
          <article key={strength.title} className="relative overflow-hidden rounded-lg border border-line bg-white p-7">
            <div className="absolute right-5 top-4 text-6xl font-semibold leading-none text-mist">
              {String(index + 1).padStart(2, '0')}
            </div>
            <p className="relative text-sm font-semibold text-navy">{String(index + 1).padStart(2, '0')}</p>
            <h3 className="relative mt-8 text-xl font-semibold leading-snug text-ink">{strength.title}</h3>
            <p className="relative mt-5 text-sm leading-7 text-ink/64">{strength.description}</p>
            <div className="relative mt-7 flex flex-wrap gap-2">
              {strength.keywords.map((keyword) => (
                <span key={keyword} className="bg-mist px-3 py-1 text-[11px] font-semibold text-ink/55">
                  {keyword}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
