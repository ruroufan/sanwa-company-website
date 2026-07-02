import type { HomeContent } from '../content/homeContent';

type FooterProps = {
  content: HomeContent;
};

export function Footer({ content }: FooterProps) {
  return (
    <footer className="border-t border-warmLine bg-cream px-5 py-10 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 font-body text-sm text-warmText md:grid-cols-[1fr_1fr]">
        <div className="min-w-0">
          <img
            src="/images/sanwa-logo-transparent.png"
            alt="SANWA 三和株式会社"
            className="h-10 max-w-[190px] object-contain"
          />
          <p className="mt-3">{content.meta.companyName}</p>
          <p className="mt-5 max-w-xl break-words leading-7">{content.contact.address}</p>
          <p className="mt-2 break-words">
            {content.contact.emailLabel}: {content.contact.email}
          </p>
          <p className="mt-2 break-words">
            {content.contact.phoneLabel}: {content.contact.phone}
          </p>
        </div>
        <div className="flex flex-col gap-8 md:items-end md:justify-between">
          <nav className="flex flex-wrap gap-5 font-grotesk md:justify-end" aria-label="Footer navigation">
            <a href="#services" className="transition hover:text-ink">
              {content.footer.services}
            </a>
            <a href="#about" className="transition hover:text-ink">
              {content.footer.company}
            </a>
            <a href="#contact" className="transition hover:text-ink">
              {content.footer.contact}
            </a>
          </nav>
          <p>{content.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
