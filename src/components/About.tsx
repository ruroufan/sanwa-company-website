import type { HomeContent } from '../content/homeContent';

type AboutProps = {
  content: HomeContent;
};

export function About({ content }: AboutProps) {
  return (
    <section id="about" className="bg-cream px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl rounded-2xl border border-warmLine/70 bg-ivory/72 px-6 py-10 md:px-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sageDark/70">{content.about.label}</p>
            <h2 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.01em] text-ink md:text-5xl">
              {content.about.title}
            </h2>
          </div>
          <div>
            <p className="text-base leading-8 text-warmText md:text-lg md:leading-9">{content.about.body}</p>
            <div className="mt-9 flex flex-wrap gap-3">
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
