import type { Translation } from '../i18n/translations';

type HeroProps = {
  t: Translation;
};

export function Hero({ t }: HeroProps) {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen scroll-mt-20 items-center overflow-hidden px-5 pt-24 md:px-8"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,#ffffff_0%,#f5f6f8_58%,#f5f0e8_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-50 [background-image:linear-gradient(#dfe3e8_1px,transparent_1px),linear-gradient(90deg,#dfe3e8_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute right-[-15%] top-24 -z-10 h-80 w-80 rounded-full bg-navy/10 blur-3xl md:h-[520px] md:w-[520px]" />
      <div className="absolute bottom-16 left-[8%] -z-10 h-px w-[68%] rotate-[-8deg] bg-navy/25" />

      <div className="fade-in mx-auto grid w-full max-w-7xl gap-14 py-24 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-navy">{t.hero.eyebrow}</p>
          <p className="mb-5 text-lg font-semibold tracking-[0.18em] text-ink/70">{t.meta.companyName}</p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.08] text-ink md:text-7xl">
            {t.hero.title}
          </h1>
          <p className="mt-7 max-w-2xl text-xl font-semibold leading-8 text-ink md:text-2xl">
            {t.hero.positioning}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-ink/66 md:text-lg">{t.hero.subtitle}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#services"
              className="inline-flex h-12 items-center justify-center rounded bg-ink px-7 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-navy"
            >
              {t.hero.primaryCta}
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded border border-ink/20 bg-white/70 px-7 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-ink/45"
            >
              {t.hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="relative min-h-[460px]">
          <div className="absolute right-0 top-4 h-80 w-80 border border-ink/10 bg-white/70 shadow-soft backdrop-blur md:h-[410px] md:w-[410px]" />
          <div className="absolute left-2 top-20 h-56 w-56 border border-navy/25 bg-white/50 md:h-72 md:w-72" />
          <div className="absolute right-8 top-14 grid h-48 w-48 place-items-center rounded-full border border-line bg-white/75 shadow-soft">
            <div className="grid h-28 w-28 place-items-center rounded-full border border-navy/25 bg-[radial-gradient(circle,#ffffff_0%,#edf2f7_70%)]">
              <div className="h-10 w-10 rounded-full border border-navy/30 bg-white" />
            </div>
          </div>
          <div className="absolute left-12 bottom-24 w-52 border border-line bg-white/70 p-4 shadow-[0_12px_32px_rgba(18,20,23,0.05)]">
            <div className="grid gap-3">
              {t.hero.visualItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between gap-4 border-b border-line pb-3 last:border-b-0 last:pb-0"
                >
                  <span className="text-xs font-semibold text-ink/62">{item}</span>
                  <span className="h-px w-8 bg-navy/35" />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-8 right-4 w-72 border border-line bg-white/88 p-5 shadow-soft">
            <p className="text-xs font-semibold tracking-[0.2em] text-navy">{t.hero.visualTitle}</p>
            <p className="mt-4 text-3xl font-semibold tracking-[0.12em] text-ink">SANWA</p>
            <p className="mt-3 text-sm text-ink/55">{t.hero.visualCaption}</p>
            <div className="mt-5 grid grid-cols-3 gap-2">
              <span className="h-1 bg-navy" />
              <span className="h-1 bg-ink/25" />
              <span className="h-1 bg-sand" />
            </div>
          </div>
          <div className="absolute left-10 top-8 h-px w-80 rotate-[-24deg] bg-navy/45" />
          <div className="absolute left-24 bottom-24 h-px w-64 rotate-[18deg] bg-ink/20" />
          <div className="absolute right-24 top-24 h-64 w-px rotate-12 bg-ink/15" />
          <div className="absolute right-4 bottom-36 h-px w-56 rotate-[-32deg] bg-navy/25" />
          <div className="absolute left-8 bottom-12 h-20 w-20 border border-line bg-white/60" />
        </div>
      </div>
    </section>
  );
}
