import type { HomeContent } from '../content/homeContent';

type ValuesProps = {
  content: HomeContent;
};

export function Values({ content }: ValuesProps) {
  return (
    <section className="bg-mist px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sageDark/70">{content.values.label}</p>
        <h2 className="mt-5 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.01em] text-ink md:text-5xl">
          {content.values.title}
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {content.values.items.map((item, index) => (
            <article key={item.title} className="border-t border-warmLine pt-7">
              <p className="text-xs font-semibold tracking-[0.14em] text-sageDark/50">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-6 text-lg font-medium text-ink">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-warmText">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
