import type { Language } from '../i18n/translations';
import { languages } from '../i18n/translations';

type LanguageSwitcherProps = {
  currentLanguage: Language;
  label: string;
  onChange: (language: Language) => void;
};

export function LanguageSwitcher({ currentLanguage, label, onChange }: LanguageSwitcherProps) {
  return (
    <label className="inline-flex items-center gap-2 text-xs font-medium text-ink/70">
      <span className="sr-only">{label}</span>
      <select
        value={currentLanguage}
        onChange={(event) => onChange(event.target.value as Language)}
        className="h-9 rounded border border-line bg-white px-3 text-xs font-medium text-ink outline-none transition hover:border-ink/30 focus:border-navy"
        aria-label={label}
      >
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.label}
          </option>
        ))}
      </select>
    </label>
  );
}
