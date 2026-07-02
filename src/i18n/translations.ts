export type Language = 'ja' | 'en' | 'zh-CN' | 'zh-TW';

export type SectionId = 'home' | 'about' | 'services' | 'strengths' | 'company' | 'contact';

export const languages: Array<{ code: Language; label: string }> = [
  { code: 'ja', label: '日本語' },
  { code: 'en', label: 'English' },
  { code: 'zh-CN', label: '简体中文' },
  { code: 'zh-TW', label: '繁體中文' },
];

export const sectionIds: SectionId[] = ['home', 'about', 'services', 'strengths', 'company', 'contact'];

export type Translation = {
  services: {
    label: string;
    title: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
      tags: string[];
    }>;
  };
  strengths: {
    label: string;
    title: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
      keywords: string[];
    }>;
  };
  company: {
    label: string;
    title: string;
    description: string;
    rows: Array<[string, string]>;
  };
  contact: {
    label: string;
    title: string;
    description: string;
    note: string;
    cta: string;
    emailLabel: string;
    phoneLabel: string;
    addressLabel: string;
    hoursLabel: string;
    closedLabel: string;
    email: string;
    phone: string;
    phoneHref: string;
    address: string;
    hours: string;
    closed: string;
  };
};

export const translations = {} as Record<Language, Translation>;
