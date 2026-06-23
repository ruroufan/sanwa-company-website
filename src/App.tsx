import { useEffect, useState } from 'react';
import { About } from './components/About';
import { CompanyInfo } from './components/CompanyInfo';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Strengths } from './components/Strengths';
import type { Language } from './i18n/translations';
import { translations } from './i18n/translations';

function App() {
  const [language, setLanguage] = useState<Language>('ja');
  const t = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = `${t.meta.companyName} | SANWA Co., Ltd.`;
  }, [language, t.meta.companyName]);

  return (
    <div className="min-h-screen bg-white text-ink">
      <Header language={language} t={t} onLanguageChange={setLanguage} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Services t={t} />
        <Strengths t={t} />
        <CompanyInfo t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}

export default App;
