import { useEffect, useState } from 'react';
import { About } from './components/About';
import { ContactCTA } from './components/ContactCTA';
import { EntrancePage } from './components/EntrancePage';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServiceCards } from './components/ServiceCards';
import { Values } from './components/Values';
import { homeContent } from './content/homeContent';
import type { Language } from './i18n/translations';

function App() {
  const [language, setLanguage] = useState<Language>('ja');
  const [entered, setEntered] = useState(false);
  const content = homeContent[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = content.meta.title;
  }, [content.meta.title, language]);

  if (!entered) {
    return <EntrancePage onEnter={() => setEntered(true)} />;
  }

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header content={content} language={language} onLanguageChange={setLanguage} />
      <main>
        <Hero content={content} />
        <ServiceCards content={content} />
        <Values content={content} />
        <About content={content} />
        <ContactCTA content={content} />
      </main>
      <Footer content={content} />
    </div>
  );
}

export default App;
