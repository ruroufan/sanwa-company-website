import type { HomeContent } from '../content/homeContent';

type ContactCTAProps = {
  content: HomeContent;
};

export function ContactCTA({ content }: ContactCTAProps) {
  return (
    <section id="contact" className="bg-cream px-5 pb-16 pt-4 md:px-8 md:pb-28 md:pt-10">
      <div className="mx-auto max-w-7xl rounded-xl border border-warmLine/70 bg-mist px-5 py-9 md:rounded-2xl md:px-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-center md:gap-10">
          <div>
            <p className="font-grotesk text-[11px] font-medium uppercase tracking-[0.22em] text-sageDark/70 md:text-xs">
              {content.contact.label}
            </p>
            <h2 className="mt-4 font-display text-[27px] font-semibold leading-[1.15] tracking-[-0.01em] text-ink md:mt-5 md:text-5xl">
              {content.contact.title}
            </h2>
            <p className="mt-4 max-w-2xl font-body text-[15px] leading-7 text-warmText md:mt-6 md:text-lg md:leading-8">
              {content.contact.description}
            </p>
            <a
              href={`mailto:${content.contact.email}`}
              className="mt-7 inline-flex h-11 w-full items-center justify-center rounded-full bg-sage px-7 font-grotesk text-sm font-medium text-white transition hover:bg-sageDark sm:w-auto md:mt-10 md:h-12"
            >
              {content.contact.cta}
            </a>
          </div>
          <div className="min-w-0 space-y-4 rounded-xl border border-warmLine/65 bg-ivory/72 p-5 font-body text-sm leading-7 text-warmText md:p-6">
            <p className="break-words">
              <span className="font-semibold text-ink">{content.contact.emailLabel}:</span> {content.contact.email}
            </p>
            <p className="break-words">
              <span className="font-semibold text-ink">{content.contact.phoneLabel}:</span>{' '}
              <a href={`tel:${content.contact.phoneHref}`} className="hover:text-ink">
                {content.contact.phone}
              </a>
            </p>
            <p className="break-words">
              <span className="font-semibold text-ink">{content.contact.addressLabel}:</span> {content.contact.address}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
