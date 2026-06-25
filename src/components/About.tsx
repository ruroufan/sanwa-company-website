import type { HomeContent } from '../content/homeContent';

type AboutProps = {
  content: HomeContent;
};

export function About({ content }: AboutProps) {
  return (
    <section id="about" className="bg-cream px-5 py-16 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl rounded-xl border border-warmLine/70 bg-ivory/72 px-5 py-8 md:rounded-2xl md:px-12 md:py-16">
        <div className="grid gap-7 md:grid-cols-[0.8fr_1.2fr] md:items-start md:gap-10">
          <div>
            <p className="font-grotesk text-[11px] font-medium uppercase tracking-[0.22em] text-sageDark/70 md:text-xs">
              {content.about.label}
            </p>
            <h2 className="mt-4 font-display text-[27px] font-semibold leading-[1.15] tracking-[-0.01em] text-ink md:mt-5 md:text-5xl">
              {content.about.title}
            </h2>
          </div>
          <div className="min-w-0">
            <p className="break-words font-body text-[15px] leading-7 text-warmText md:text-lg md:leading-9">
              {content.about.body}
            </p>
            <div className="mt-6 flex flex-wrap gap-2 md:mt-9 md:gap-3">
              {content.about.points.map((point) => (
                <span
                  key={point}
                  className="rounded-full border border-warmLine/70 bg-transparent px-4 py-2 font-grotesk text-xs font-medium text-warmText"
                >
                  {point}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
