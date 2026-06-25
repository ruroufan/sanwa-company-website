import type { HomeContent } from '../content/homeContent';

type HeroProps = {
  content: HomeContent;
};

export function Hero({ content }: HeroProps) {
  const titleLines = content.hero.title.split('\n');

  return (
    <section id="home" className="overflow-hidden bg-cream px-5 pt-24 pb-14 md:px-8 md:pt-32 md:pb-24">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.6fr_0.4fr] md:items-center md:gap-14">
        <div className="fade-in min-w-0">
          <p className="font-grotesk text-[11px] font-medium uppercase leading-6 tracking-[0.2em] text-sageDark/70 md:text-xs">
            {content.hero.eyebrow}
          </p>
          <h1 className="mt-5 max-w-full font-display text-[34px] font-semibold leading-[1.15] tracking-[-0.01em] text-ink min-[390px]:text-[36px] sm:text-[40px] md:max-w-[900px] md:text-[52px] md:font-semibold md:leading-[1.08] lg:text-[58px]">
            {titleLines.map((line) => (
              <span key={line} className="block min-[390px]:whitespace-nowrap md:whitespace-nowrap">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-5 max-w-[640px] font-body text-[15px] font-normal leading-7 text-warmText md:mt-7 md:text-lg md:leading-9">
            {content.hero.subtitle}
          </p>
          <div className="mt-7 flex flex-row flex-wrap gap-3 md:mt-9">
            <a
              href="#services"
              className="inline-flex h-11 flex-1 items-center justify-center rounded-full bg-sage px-5 font-grotesk text-sm font-medium text-white transition hover:bg-sageDark sm:flex-none md:h-12 md:px-7"
            >
              {content.hero.primaryCta}
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 flex-1 items-center justify-center rounded-full border border-warmLine bg-ivory/80 px-5 font-grotesk text-sm font-medium text-ink transition hover:border-sage/50 sm:flex-none md:h-12 md:px-7"
            >
              {content.hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="fade-in relative">
          <div className="rounded-2xl border border-warmLine/75 bg-ivory/78 p-4 shadow-[0_22px_70px_rgba(36,35,32,0.025)] md:p-7">
            <div className="rounded-xl bg-cream p-5 md:p-8">
              <p className="font-grotesk text-xs font-medium uppercase tracking-[0.2em] text-sageDark/70">
                {content.hero.visualLabel}
              </p>
              <p className="mt-4 whitespace-pre-line font-display text-base font-semibold leading-7 text-ink md:mt-6 md:text-xl md:leading-9">
                {content.hero.visualTitle}
              </p>
              <div className="mt-6 divide-y divide-warmLine/80 border-y border-warmLine/80 md:mt-8">
                {content.hero.visualItems.map((item) => (
                  <div key={item} className="flex items-center gap-3 py-3 md:gap-4 md:py-4">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-sage md:h-2.5 md:w-2.5" />
                    <span className="font-body text-sm font-medium text-warmText md:text-base">{item}</span>
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
