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
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-warmLine/50 bg-cream/86 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#home" className="flex items-baseline gap-3" aria-label={content.nav.home}>
          <span className="text-base font-semibold tracking-[0.18em] text-ink">{content.meta.logo}</span>
          <span className="hidden text-xs font-medium text-warmText/70 sm:inline">{content.meta.companyName}</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navItems.map(([key, target]) => (
            <a key={key} href={`#${target}`} className="text-sm font-normal text-warmText transition hover:text-ink">
              {content.nav[key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div>
            <LanguageSwitcher currentLanguage={language} label="Language" onChange={onLanguageChange} />
          </div>
          <a
            href="#contact"
            className="hidden rounded-full bg-sage px-5 py-2.5 text-sm font-medium text-white transition hover:bg-sageDark md:inline-flex"
          >
            {content.nav.cta}
          </a>
        </div>
      </div>
      <nav
        className="mx-auto flex max-w-7xl items-center gap-5 overflow-x-auto border-t border-warmLine/60 px-5 py-3 md:hidden"
        aria-label="Mobile navigation"
      >
        {navItems.map(([key, target]) => (
          <a key={key} href={`#${target}`} className="shrink-0 text-xs font-semibold text-warmText transition hover:text-ink">
            {content.nav[key]}
          </a>
        ))}
      </nav>
    </header>
  );
}
