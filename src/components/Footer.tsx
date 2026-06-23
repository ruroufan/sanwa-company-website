import type { Translation } from '../i18n/translations';
import { sectionIds } from '../i18n/translations';

type FooterProps = {
  t: Translation;
};

export function Footer({ t }: FooterProps) {
  return (
    <footer className="border-t border-line bg-white px-5 py-10 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 text-sm text-ink/55 md:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-lg font-semibold tracking-[0.18em] text-ink">{t.meta.logo}</p>
          <p className="mt-4 font-medium text-ink/70">{t.footer.companyName}</p>
          <p className="mt-2">{t.footer.location}</p>
          <p className="mt-2">{t.footer.hours}</p>
          <p className="mt-2">{t.footer.closed}</p>
        </div>
        <div className="flex flex-col gap-6 md:items-end md:justify-between">
          <nav className="flex flex-wrap gap-x-5 gap-y-2 md:justify-end" aria-label="Footer navigation">
            {sectionIds.map((sectionId) => (
              <a key={sectionId} href={`#${sectionId}`} className="font-medium text-ink/58 transition hover:text-ink">
                {t.nav[sectionId]}
              </a>
            ))}
          </nav>
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
