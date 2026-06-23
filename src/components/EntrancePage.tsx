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
    <main className="relative isolate min-h-screen overflow-hidden bg-white px-5 py-6 text-ink md:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,#ffffff_0%,#f6f7f9_72%,#f5f0e8_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-35 [background-image:linear-gradient(#dfe3e8_1px,transparent_1px),linear-gradient(90deg,#dfe3e8_1px,transparent_1px)] [background-size:56px_56px] md:opacity-45 md:[background-size:80px_80px]" />
      <div className="pointer-events-none absolute right-[-120px] top-20 -z-10 h-72 w-72 rounded-full bg-navy/8 blur-3xl md:top-16 md:h-[520px] md:w-[520px]" />
      <div className="pointer-events-none absolute bottom-24 left-[8%] -z-10 hidden h-px w-[72%] rotate-[-10deg] bg-navy/20 md:block" />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-4">
        <p className="text-lg font-semibold tracking-[0.2em] text-ink">{t.meta.logo}</p>
        <LanguageSwitcher
          currentLanguage={language}
          label={t.common.language}
          onChange={onLanguageChange}
        />
      </header>

      <section className="fade-in relative z-10 mx-auto grid max-w-7xl gap-10 py-12 md:min-h-[calc(100vh-92px)] md:grid-cols-[1.08fr_0.92fr] md:items-center md:py-20">
        <div>
          <p className="break-words text-[11px] font-semibold uppercase leading-6 tracking-[0.18em] text-navy md:text-xs md:tracking-[0.28em]">
            {t.entrance.tags}
          </p>
          <h1 className="mt-8 text-4xl font-semibold leading-tight text-ink sm:text-5xl md:mt-10 md:text-7xl">
            {t.entrance.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-ink/66 md:mt-7 md:text-2xl md:leading-10">
            {t.entrance.subtitle}
          </p>

          <button
            type="button"
            onClick={onEnter}
            className="mt-9 inline-flex h-14 w-full items-center justify-center rounded border border-ink bg-ink px-8 text-sm font-semibold tracking-[0.08em] text-white transition duration-300 hover:-translate-y-1 hover:border-navy hover:bg-navy sm:w-auto md:mt-12"
          >
            {t.entrance.button}
          </button>
        </div>

        <div className="relative min-h-[420px] md:min-h-[460px]">
          <div className="pointer-events-none absolute right-2 top-3 h-32 w-32 rounded-full border border-line bg-white/60 shadow-[0_12px_32px_rgba(18,20,23,0.04)] md:right-8 md:top-20 md:h-48 md:w-48" />
          <div className="pointer-events-none absolute left-4 top-12 h-px w-56 rotate-[-18deg] bg-navy/25 md:left-8 md:top-10 md:w-80 md:rotate-[-24deg] md:bg-navy/35" />
          <div className="pointer-events-none absolute right-0 top-4 hidden h-96 w-96 border border-line bg-white/70 shadow-soft backdrop-blur md:block" />
          <div className="pointer-events-none absolute left-0 top-20 hidden h-64 w-64 border border-navy/20 bg-white/45 md:block" />

          <div className="relative z-10 mt-20 rounded-lg border border-line bg-white/92 p-5 shadow-soft md:absolute md:bottom-8 md:right-0 md:mt-0 md:w-full md:max-w-md md:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-navy">
              {t.entrance.infoTitle}
            </p>
            <dl className="mt-5 divide-y divide-line md:mt-6">
              {t.entrance.rows.map(([label, value]) => (
                <div key={label} className="grid gap-2 py-3 sm:grid-cols-[120px_1fr] sm:gap-4 md:py-4">
                  <dt className="text-xs font-semibold text-ink/45">{label}</dt>
                  <dd className="text-sm font-medium leading-6 text-ink">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
