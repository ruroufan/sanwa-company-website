import type { HomeContent } from '../content/homeContent';

type ValuesProps = {
  content: HomeContent;
};

export function Values({ content }: ValuesProps) {
  return (
    <section className="bg-mist px-5 py-16 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sageDark/70">{content.values.label}</p>
        <h2 className="mt-4 max-w-3xl text-[28px] font-semibold leading-[1.16] tracking-normal text-ink md:mt-5 md:text-5xl md:font-medium md:tracking-[-0.01em]">
          {content.values.title}
        </h2>
        <div className="mt-9 grid gap-6 md:mt-14 md:grid-cols-4">
          {content.values.items.map((item, index) => (
            <article key={item.title} className="border-t border-warmLine pt-6 md:pt-7">
              <p className="text-xs font-semibold tracking-[0.14em] text-sageDark/50">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-4 text-lg font-semibold text-ink md:mt-6 md:font-medium">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-7 text-warmText md:mt-4 md:text-sm">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
