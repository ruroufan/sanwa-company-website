import type { HomeContent } from '../content/homeContent';

type ServiceCardsProps = {
  content: HomeContent;
};

export function ServiceCards({ content }: ServiceCardsProps) {
  return (
    <section id="services" className="bg-cream px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sageDark/70">{content.services.label}</p>
          <h2 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.01em] text-ink md:text-5xl">
            {content.services.title}
          </h2>
          <p className="mt-6 text-base leading-8 text-warmText md:text-lg">{content.services.description}</p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {content.services.items.map((service, index) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-warmLine/70 bg-ivory/82 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-sage/30 hover:bg-ivory"
            >
              <div className="flex h-[190px] items-center justify-center overflow-hidden rounded-xl bg-mist md:h-[205px]">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="h-full w-full object-contain p-5 opacity-90 saturate-[0.86] transition duration-300 group-hover:scale-[1.015] group-hover:opacity-95"
                  loading="lazy"
                />
              </div>
              <div className="px-1 pb-1 pt-6">
                <p className="text-xs font-semibold tracking-[0.14em] text-sageDark/55">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-4 text-xl font-medium leading-tight text-ink">{service.title}</h3>
                <p className="mt-4 text-[15px] leading-7 text-warmText">{service.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-warmLine/70 bg-transparent px-3 py-1 text-[11px] font-medium text-warmText/85"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
