import type { Translation } from '../i18n/translations';
import { Section } from './Section';

type StrengthsProps = {
  t: Translation;
};

export function Strengths({ t }: StrengthsProps) {
  return (
    <Section id="strengths" label={t.strengths.label} title={t.strengths.title} className="bg-mist">
      <p className="mt-10 max-w-2xl text-base leading-8 text-ink/54 md:text-lg md:leading-9">
        {t.strengths.description}
      </p>
      <div className="mt-20 grid gap-10 md:grid-cols-3 md:gap-8">
        {t.strengths.items.map((strength, index) => (
          <article key={strength.title} className="border-t border-line pt-8">
            <p className="text-sm font-bold text-ink/34">{String(index + 1).padStart(2, '0')}</p>
            <h3 className="mt-8 text-2xl font-bold leading-tight text-ink">{strength.title}</h3>
            <p className="mt-6 text-sm leading-8 text-ink/56">{strength.description}</p>
            <div className="mt-8 flex flex-wrap gap-x-4 gap-y-3">
              {strength.keywords.map((keyword) => (
                <span key={keyword} className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink/40">
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
