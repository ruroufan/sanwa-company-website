import type { HomeContent } from '../content/homeContent';

type HeroProps = {
  content: HomeContent;
};

export function Hero({ content }: HeroProps) {
  const titleLines = content.hero.title.split('\n');

  return (
    <section id="home" className="overflow-hidden bg-cream px-5 pt-28 pb-16 md:px-8 md:pt-32 md:pb-24">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.6fr_0.4fr] md:items-center md:gap-14">
        <div className="fade-in">
          <p className="text-[11px] font-semibold uppercase leading-6 tracking-[0.2em] text-sageDark/70 md:text-xs">
            {content.hero.eyebrow}
          </p>
          <h1 className="mt-7 max-w-[900px] text-4xl font-medium leading-[1.14] tracking-normal text-ink sm:text-5xl md:text-[52px] md:leading-[1.08] lg:text-[58px]">
            {titleLines.map((line) => (
              <span key={line} className="block md:whitespace-nowrap">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-7 max-w-[640px] text-base leading-8 text-warmText md:text-lg md:leading-9">
            {content.hero.subtitle}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#services"
              className="inline-flex h-12 items-center justify-center rounded-full bg-sage px-7 text-sm font-medium text-white transition hover:bg-sageDark"
            >
              {content.hero.primaryCta}
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-warmLine bg-ivory/80 px-7 text-sm font-medium text-ink transition hover:border-sage/50"
            >
              {content.hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="fade-in relative">
          <div className="rounded-2xl border border-warmLine/75 bg-ivory/78 p-5 shadow-[0_22px_70px_rgba(36,35,32,0.035)] md:p-7">
            <div className="rounded-xl bg-cream p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sageDark/70">
                {content.hero.visualLabel}
              </p>
              <p className="mt-6 whitespace-pre-line text-lg font-medium leading-8 text-ink md:text-xl md:leading-9">
                {content.hero.visualTitle}
              </p>
              <div className="mt-8 divide-y divide-warmLine/80 border-y border-warmLine/80">
                {content.hero.visualItems.map((item) => (
                  <div key={item} className="flex items-center gap-4 py-4">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-sage" />
                    <span className="text-sm font-medium text-warmText md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
