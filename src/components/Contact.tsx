import type { Translation } from '../i18n/translations';
import { Section } from './Section';

type ContactProps = {
  t: Translation;
};

export function Contact({ t }: ContactProps) {
  return (
    <Section id="contact" label={t.contact.label} title={t.contact.title} className="bg-mist">
      <div className="mt-16 grid gap-14 border-t border-line pt-12 md:grid-cols-[1fr_1fr] md:items-start md:gap-20">
        <div>
          <p className="max-w-xl text-base leading-9 text-ink/56 md:text-lg">{t.contact.description}</p>
          <p className="mt-8 text-sm leading-7 text-ink/42">{t.contact.note}</p>
          <a
            href={`mailto:${t.contact.email}`}
            className="mt-12 inline-flex h-12 items-center justify-center rounded-md bg-ink px-7 text-sm font-semibold text-white transition hover:bg-navy"
          >
            {t.contact.cta}
          </a>
        </div>
        <dl className="divide-y divide-line border-y border-line">
          <div className="py-5">
            <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/36">{t.contact.emailLabel}</dt>
            <dd className="mt-3 break-words text-base font-medium text-ink/70">{t.contact.email}</dd>
          </div>
          <div className="py-5">
            <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/36">{t.contact.phoneLabel}</dt>
            <dd className="mt-3 text-base font-medium text-ink/70">
              <a href={`tel:${t.contact.phoneHref}`} className="transition hover:text-ink">
                {t.contact.phone}
              </a>
            </dd>
          </div>
          <div className="py-5">
            <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/36">
              {t.contact.addressLabel}
            </dt>
            <dd className="mt-3 break-words text-base font-medium leading-8 text-ink/70">{t.contact.address}</dd>
          </div>
          <div className="grid gap-5 py-5 sm:grid-cols-2">
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/36">
                {t.contact.hoursLabel}
              </dt>
              <dd className="mt-3 text-sm font-medium leading-7 text-ink/66">{t.contact.hours}</dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/36">
                {t.contact.closedLabel}
              </dt>
              <dd className="mt-3 text-sm font-medium leading-7 text-ink/66">{t.contact.closed}</dd>
            </div>
          </div>
        </dl>
      </div>
    </Section>
  );
}
