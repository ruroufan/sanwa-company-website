import type { Language } from '../i18n/translations';

const languageOptions: Array<{ code: Language; label: string }> = [
  { code: 'ja', label: '日本語' },
  { code: 'en', label: 'English' },
  { code: 'zh-CN', label: '简体中文' },
  { code: 'zh-TW', label: '繁體中文' },
];

type LanguageSwitcherProps = {
  currentLanguage: Language;
  label: string;
  onChange: (language: Language) => void;
};

export function LanguageSwitcher({ currentLanguage, label, onChange }: LanguageSwitcherProps) {
  return (
    <label className="inline-flex items-center gap-2 font-grotesk text-xs font-medium text-warmText">
      <span className="sr-only">{label}</span>
      <select
        value={currentLanguage}
        onChange={(event) => onChange(event.target.value as Language)}
        className="h-9 rounded-full border border-warmLine bg-ivory px-3 font-grotesk text-xs font-medium text-ink outline-none transition hover:border-sage/50 focus:border-sage"
        aria-label={label}
      >
        {languageOptions.map((language) => (
          <option key={language.code} value={language.code}>
            {language.label}
          </option>
        ))}
      </select>
    </label>
  );
}
