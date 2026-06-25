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
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#home" className="flex items-baseline gap-3 font-grotesk" aria-label={content.nav.home}>
          <span className="text-base font-semibold tracking-[0.18em] text-ink">{content.meta.logo}</span>
          <span className="hidden text-xs font-medium text-warmText/70 sm:inline">{content.meta.companyName}</span>
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
