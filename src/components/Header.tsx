import { useState } from 'react';
import type { Language, SectionId, Translation } from '../i18n/translations';
import { sectionIds } from '../i18n/translations';
import { LanguageSwitcher } from './LanguageSwitcher';

type HeaderProps = {
  language: Language;
  t: Translation;
  onLanguageChange: (language: Language) => void;
  onEntranceClick: () => void;
};

export function Header({ language, t, onLanguageChange, onEntranceClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const goToSection = (sectionId: SectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <button
          type="button"
          onClick={() => goToSection('home')}
          className="text-left text-lg font-semibold tracking-[0.18em] text-ink"
          aria-label={t.nav.home}
        >
          {t.meta.logo}
        </button>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          <button
            type="button"
            onClick={onEntranceClick}
            className="text-sm font-medium text-ink/65 transition hover:text-ink"
          >
            {t.nav.entrance}
          </button>
          {sectionIds.map((sectionId) => (
            <button
              key={sectionId}
              type="button"
              onClick={() => goToSection(sectionId)}
              className="text-sm font-medium text-ink/65 transition hover:text-ink"
            >
              {t.nav[sectionId]}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <LanguageSwitcher
            currentLanguage={language}
            label={t.common.language}
            onChange={onLanguageChange}
          />
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded border border-line text-ink md:hidden"
          aria-label={isOpen ? t.common.close : t.common.menu}
          aria-expanded={isOpen}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-ink transition ${
                isOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-px w-5 bg-ink transition ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-px w-5 bg-ink transition ${
                isOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-line bg-white px-5 py-5 md:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1" aria-label="Mobile navigation">
            {sectionIds.map((sectionId) => (
              <button
                key={sectionId}
                type="button"
                onClick={() => goToSection(sectionId)}
                className="w-full rounded px-2 py-3 text-left text-sm font-medium text-ink transition hover:bg-mist"
              >
                {t.nav[sectionId]}
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                onEntranceClick();
                setIsOpen(false);
              }}
              className="w-full rounded px-2 py-3 text-left text-sm font-medium text-ink transition hover:bg-mist"
            >
              {t.nav.entrance}
            </button>
          </nav>
          <div className="mx-auto mt-4 max-w-7xl">
            <LanguageSwitcher
              currentLanguage={language}
              label={t.common.language}
              onChange={onLanguageChange}
            />
          </div>
        </div>
      ) : null}
    </header>
  );
}
