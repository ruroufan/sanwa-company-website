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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sageDark/70">{content.about.label}</p>
            <h2 className="mt-4 text-[28px] font-semibold leading-[1.16] tracking-normal text-ink md:mt-5 md:text-5xl md:font-medium md:tracking-[-0.01em]">
              {content.about.title}
            </h2>
          </div>
          <div className="min-w-0">
            <p className="break-words text-[15px] leading-7 text-warmText md:text-lg md:leading-9">{content.about.body}</p>
            <div className="mt-6 flex flex-wrap gap-2 md:mt-9 md:gap-3">
              {content.about.points.map((point) => (
                <span
                  key={point}
                  className="rounded-full border border-warmLine/70 bg-transparent px-4 py-2 text-xs font-medium text-warmText"
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
