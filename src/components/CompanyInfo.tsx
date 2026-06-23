import type { Translation } from '../i18n/translations';
import { Section } from './Section';

type CompanyInfoProps = {
  t: Translation;
};

export function CompanyInfo({ t }: CompanyInfoProps) {
  return (
    <Section id="company" label={t.company.label} title={t.company.title} className="bg-white">
      <div className="mt-8 grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
        <p className="max-w-sm text-sm leading-7 text-ink/58">{t.company.description}</p>
        <dl className="overflow-hidden border-y border-line">
          {t.company.rows.map(([label, value]) => (
            <div
              key={label}
              className="grid gap-2 border-b border-line/80 py-4 last:border-b-0 md:grid-cols-[180px_1fr] md:gap-6"
            >
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/42">{label}</dt>
              <dd className="text-sm font-medium leading-6 text-ink md:text-base">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
