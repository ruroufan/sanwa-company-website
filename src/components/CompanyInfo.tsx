import type { Translation } from '../i18n/translations';
import { Section } from './Section';

type CompanyInfoProps = {
  t: Translation;
};

export function CompanyInfo({ t }: CompanyInfoProps) {
  return (
    <Section id="company" label={t.company.label} title={t.company.title} className="bg-sand">
      <div className="mt-14 grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:items-start">
        <p className="max-w-sm text-sm leading-8 text-ink/50 md:text-base">{t.company.description}</p>
        <dl className="border-y border-line">
          {t.company.rows.map(([label, value]) => (
            <div
              key={label}
              className="grid gap-2 border-b border-line py-5 last:border-b-0 md:grid-cols-[180px_1fr] md:gap-8"
            >
              <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/36">{label}</dt>
              <dd className="break-words text-sm font-medium leading-7 text-ink/68 md:text-base">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
