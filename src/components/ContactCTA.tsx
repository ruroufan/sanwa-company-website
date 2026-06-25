import type { HomeContent } from '../content/homeContent';

type ContactCTAProps = {
  content: HomeContent;
};

export function ContactCTA({ content }: ContactCTAProps) {
  return (
    <section id="contact" className="bg-cream px-5 pb-20 pt-10 md:px-8 md:pb-28">
      <div className="mx-auto max-w-7xl rounded-2xl border border-warmLine/70 bg-mist px-6 py-12 md:px-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1fr_0.9fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sageDark/70">{content.contact.label}</p>
            <h2 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.01em] text-ink md:text-5xl">
              {content.contact.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-warmText md:text-lg">
              {content.contact.description}
            </p>
            <a
              href={`mailto:${content.contact.email}`}
              className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-sage px-7 text-sm font-medium text-white transition hover:bg-sageDark"
            >
              {content.contact.cta}
            </a>
          </div>
          <div className="space-y-4 rounded-xl border border-warmLine/65 bg-ivory/72 p-6 text-sm leading-7 text-warmText">
            <p>
              <span className="font-semibold text-ink">{content.contact.emailLabel}:</span> {content.contact.email}
            </p>
            <p>
              <span className="font-semibold text-ink">{content.contact.phoneLabel}:</span>{' '}
              <a href={`tel:${content.contact.phoneHref}`} className="hover:text-ink">
                {content.contact.phone}
              </a>
            </p>
            <p>
              <span className="font-semibold text-ink">{content.contact.addressLabel}:</span> {content.contact.address}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
