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
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#ffffff_0%,#f6f7f9_68%,#f5f0e8_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-45 [background-image:linear-gradient(#dfe3e8_1px,transparent_1px),linear-gradient(90deg,#dfe3e8_1px,transparent_1px)] [background-size:80px_80px]" />
      <div className="absolute right-[-120px] top-16 -z-10 h-80 w-80 rounded-full bg-navy/8 blur-3xl md:h-[520px] md:w-[520px]" />
      <div className="absolute bottom-24 left-[8%] -z-10 h-px w-[72%] rotate-[-10deg] bg-navy/20" />

      <header className="mx-auto flex max-w-7xl items-center justify-between">
        <p className="text-lg font-semibold tracking-[0.2em] text-ink">{t.meta.logo}</p>
        <LanguageSwitcher
          currentLanguage={language}
          label={t.common.language}
          onChange={onLanguageChange}
        />
      </header>

      <section className="fade-in mx-auto grid min-h-[calc(100vh-92px)] max-w-7xl gap-10 py-14 md:grid-cols-[1.08fr_0.92fr] md:items-center md:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy">{t.entrance.tags}</p>
          <h1 className="mt-10 text-5xl font-semibold leading-tight text-ink md:text-7xl">
            {t.entrance.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-9 text-ink/66 md:text-2xl md:leading-10">
            {t.entrance.subtitle}
          </p>

          <button
            type="button"
            onClick={onEnter}
            className="mt-12 inline-flex h-14 w-full items-center justify-center rounded border border-ink bg-ink px-8 text-sm font-semibold tracking-[0.08em] text-white transition duration-300 hover:-translate-y-1 hover:border-navy hover:bg-navy sm:w-auto"
          >
            {t.entrance.button}
          </button>
        </div>

        <div className="relative min-h-[380px]">
          <div className="absolute right-0 top-4 h-72 w-72 border border-line bg-white/70 shadow-soft backdrop-blur md:h-96 md:w-96" />
          <div className="absolute left-0 top-20 h-52 w-52 border border-navy/20 bg-white/45 md:h-64 md:w-64" />
          <div className="absolute right-8 top-20 h-36 w-36 rounded-full border border-line bg-[radial-gradient(circle,#ffffff_0%,#eef3f8_74%)] shadow-soft md:h-48 md:w-48" />
          <div className="absolute left-8 top-10 h-px w-80 rotate-[-24deg] bg-navy/35" />
          <div className="absolute bottom-8 right-0 w-full max-w-md rounded-lg border border-line bg-white/90 p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-navy">
              {t.entrance.infoTitle}
            </p>
            <dl className="mt-6 divide-y divide-line">
              {t.entrance.rows.map(([label, value]) => (
                <div key={label} className="grid grid-cols-[120px_1fr] gap-4 py-4">
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
