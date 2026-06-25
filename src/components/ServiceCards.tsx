import type { HomeContent } from '../content/homeContent';

type ServiceCardsProps = {
  content: HomeContent;
};

export function ServiceCards({ content }: ServiceCardsProps) {
  return (
    <section id="services" className="bg-cream px-5 py-16 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-grotesk text-[11px] font-medium uppercase tracking-[0.22em] text-sageDark/70 md:text-xs">
            {content.services.label}
          </p>
          <h2 className="mt-4 max-w-full font-display text-[27px] font-semibold leading-[1.15] tracking-[-0.01em] text-ink md:mt-5 md:text-5xl">
            {content.services.title}
          </h2>
          <p className="mt-4 font-body text-[15px] font-normal leading-7 text-warmText md:mt-6 md:text-lg md:leading-8">
            {content.services.description}
          </p>
        </div>

        <div className="mt-9 grid gap-5 md:mt-14 md:grid-cols-3">
          {content.services.items.map((service, index) => (
            <article
              key={service.title}
              className="group rounded-xl border border-warmLine/65 bg-ivory/82 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-sage/30 hover:bg-ivory md:rounded-2xl"
            >
              <div className="flex h-[150px] items-center justify-center overflow-hidden rounded-lg bg-mist md:h-[205px] md:rounded-xl">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="h-full w-full max-w-full object-contain p-4 opacity-90 saturate-[0.86] transition duration-300 group-hover:scale-[1.015] group-hover:opacity-95 md:p-5"
                  loading="lazy"
                />
              </div>
              <div className="px-0.5 pb-1 pt-5 md:px-1 md:pt-6">
                <p className="font-grotesk text-xs font-medium tracking-[0.14em] text-sageDark/55">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-3 font-display text-[20px] font-semibold leading-tight text-ink md:mt-4 md:font-medium">
                  {service.title}
                </h3>
                <p className="mt-3 font-body text-[15px] leading-7 text-warmText md:mt-4">{service.description}</p>
                <div className="mt-5 flex flex-wrap gap-2 md:mt-6">
                  {service.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-warmLine/70 bg-transparent px-3 py-1 font-grotesk text-[11px] font-medium text-warmText/85"
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
