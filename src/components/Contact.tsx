import type { Translation } from '../i18n/translations';
import { Section } from './Section';

type ContactProps = {
  t: Translation;
};

export function Contact({ t }: ContactProps) {
  return (
    <Section id="contact" label={t.contact.label} title={t.contact.title} className="bg-mist">
      <div className="mt-10 grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-start">
        <div>
          <p className="max-w-xl text-base leading-8 text-ink/66">{t.contact.description}</p>
          <p className="mt-5 text-sm text-ink/45">{t.contact.note}</p>
        </div>
        <div className="rounded-lg border border-line bg-white p-7 shadow-[0_14px_40px_rgba(18,20,23,0.04)]">
          <dl className="space-y-5">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/42">{t.contact.emailLabel}</dt>
              <dd className="mt-2 text-base font-medium text-ink">{t.contact.email}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/42">{t.contact.phoneLabel}</dt>
              <dd className="mt-2 text-base font-medium text-ink">{t.contact.phone}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/42">
                {t.contact.addressLabel}
              </dt>
              <dd className="mt-2 text-base font-medium text-ink">{t.contact.address}</dd>
            </div>
          </dl>
          <a
            href={`mailto:${t.contact.email}`}
            className="mt-8 inline-flex h-12 w-full items-center justify-center rounded bg-ink px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-navy"
          >
            {t.contact.cta}
          </a>
        </div>
      </div>
    </Section>
  );
}
