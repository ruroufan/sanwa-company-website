import type { Language, Translation } from '../i18n/translations';
import { LanguageSwitcher } from './LanguageSwitcher';

type EntrancePageProps = {
  language: Language;
  t: Translation;
  onEnter: () => void;
  onLanguageChange: (language: Language) => void;
};

export function EntrancePage({ language, t, onEnter, onLanguageChange }: EntrancePageProps) {
  return (
    <main className="min-h-screen overflow-hidden bg-mist px-5 py-6 text-ink md:px-8">
      <header className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <p className="text-lg font-bold tracking-[0.2em] text-ink">{t.meta.logo}</p>
        <LanguageSwitcher currentLanguage={language} label={t.common.language} onChange={onLanguageChange} />
      </header>

      <section className="fade-in mx-auto grid max-w-6xl gap-16 py-16 md:min-h-[calc(100vh-92px)] md:grid-cols-[1.08fr_0.92fr] md:items-center md:py-24">
        <div>
          <p className="break-words text-[11px] font-semibold uppercase leading-6 tracking-[0.24em] text-ink/42">
            {t.entrance.tags}
          </p>
          <h1 className="mt-10 text-5xl font-bold leading-[1.05] tracking-[-0.01em] text-ink sm:text-6xl md:text-7xl">
            {t.entrance.title}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-ink/56 md:text-xl md:leading-10">
            {t.entrance.subtitle}
          </p>

          <button
            type="button"
            onClick={onEnter}
            className="mt-12 inline-flex h-12 w-full items-center justify-center rounded-md bg-ink px-8 text-sm font-semibold tracking-[0.08em] text-white transition hover:bg-navy sm:w-auto"
          >
            {t.entrance.button}
          </button>
        </div>

        <aside className="border-y border-line py-8 md:py-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/42">{t.entrance.infoTitle}</p>
          <dl className="mt-8 divide-y divide-line">
            {t.entrance.rows.map(([label, value]) => (
              <div key={label} className="grid gap-2 py-5 sm:grid-cols-[128px_1fr] sm:gap-6">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/36">{label}</dt>
                <dd className="break-words text-sm font-medium leading-7 text-ink/68">{value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>
    </main>
  );
}
