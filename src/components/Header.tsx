import { useState } from 'react';
import type { HomeContent } from '../content/homeContent';
import type { Language } from '../i18n/translations';
import { LanguageSwitcher } from './LanguageSwitcher';

type HeaderProps = {
  content: HomeContent;
  language: Language;
  onLanguageChange: (language: Language) => void;
};

const navItems = [
  ['home', 'home'],
  ['services', 'services'],
  ['about', 'about'],
  ['contact', 'contact'],
] as const;

export function Header({ content, language, onLanguageChange }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-warmLine/50 bg-cream/86 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:h-20 md:px-8 lg:h-[84px]">
        <a href="#home" className="flex min-w-0 items-center" aria-label={content.nav.home}>
          <img
            src="/images/sanwa-logo-transparent.png"
            alt="SANWA 三和株式会社"
            className="h-9 w-auto max-w-[190px] object-contain sm:h-10 sm:max-w-[220px] md:h-12 md:max-w-[250px] lg:h-[52px] lg:max-w-[260px]"
          />
        </a>

        <nav className="hidden items-center gap-8 font-grotesk md:flex" aria-label="Main navigation">
          {navItems.map(([key, target]) => (
            <a key={key} href={`#${target}`} className="text-sm font-normal text-warmText transition hover:text-ink">
              {content.nav[key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <LanguageSwitcher currentLanguage={language} label="Language" onChange={onLanguageChange} />
          </div>
          <a
            href="#contact"
            className="hidden rounded-full bg-sage px-5 py-2.5 font-grotesk text-sm font-medium text-white transition hover:bg-sageDark md:inline-flex"
          >
            {content.nav.cta}
          </a>
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-warmLine bg-ivory text-ink md:hidden"
            aria-label="Menu"
            aria-expanded={isOpen}
          >
            <span className="grid gap-1">
              <span className="block h-px w-4 bg-ink" />
              <span className="block h-px w-4 bg-ink" />
            </span>
          </button>
        </div>
      </div>
      {isOpen ? (
        <div className="border-t border-warmLine/55 bg-cream/96 px-5 py-5 md:hidden">
          <nav className="grid gap-1" aria-label="Mobile navigation">
            {navItems.map(([key, target]) => (
              <a
                key={key}
                href={`#${target}`}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-3 py-3 font-grotesk text-sm font-medium text-warmText transition hover:bg-mist hover:text-ink"
              >
                {content.nav[key]}
              </a>
            ))}
          </nav>
          <div className="mt-4 grid gap-3 border-t border-warmLine/55 pt-4">
            <LanguageSwitcher currentLanguage={language} label="Language" onChange={onLanguageChange} />
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex h-11 w-full items-center justify-center rounded-full bg-sage px-5 font-grotesk text-sm font-medium text-white"
            >
              {content.nav.cta}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
