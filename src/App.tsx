import React, { useState } from 'react';
import { Github, Facebook, Mail, Instagram, ExternalLink, Code2, Languages } from 'lucide-react';
import { translations } from './translations';

type Language = 'en' | 'ar' | 'sv';

function App() {
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang];

  const isRTL = lang === 'ar';

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Language Switcher */}
      <div className="absolute top-4 right-4 flex gap-2">
        <button 
          onClick={() => setLang('en')} 
          className={`px-2 py-1 rounded ${lang === 'en' ? 'bg-blue-500' : 'bg-gray-700'}`}
        >
          EN
        </button>
        <button 
          onClick={() => setLang('sv')} 
          className={`px-2 py-1 rounded ${lang === 'sv' ? 'bg-blue-500' : 'bg-gray-700'}`}
        >
          SV
        </button>
        <button 
          onClick={() => setLang('ar')} 
          className={`px-2 py-1 rounded ${lang === 'ar' ? 'bg-blue-500' : 'bg-gray-700'} font-arabic`}
        >
          ع
        </button>
      </div>

      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t.title}</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">{t.role}</p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/tiger3homs" className="hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="mailto:tiger3homs@gmail.com" className="hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://facebook.com/tiger3homs" className="hover:text-blue-400 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="https://instagram.com/obajda.s" className="hover:text-blue-400 transition-colors">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">{t.projects.title}</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <Code2 className="text-blue-400" size={24} />
              <div className="flex space-x-4">
                <a href="https://github.com/tiger3homs/project1" className="hover:text-blue-400 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://tiger3homs.github.io/project1/" className="hover:text-blue-400 transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t.projects.project1.title}</h3>
            <p className="text-gray-400">{t.projects.project1.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {t.projects.project1.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-blue-900 rounded-full text-sm">{tag}</span>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <Code2 className="text-blue-400" size={24} />
              <div className="flex space-x-4">
                <a href="https://github.com/tiger3homs/project2" className="hover:text-blue-400 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://project2.demo.com" className="hover:text-blue-400 transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t.projects.project2.title}</h3>
            <p className="text-gray-400">{t.projects.project2.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {t.projects.project2.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-blue-900 rounded-full text-sm">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-800/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">{t.about.title}</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            {t.about.description}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
        <p>{t.footer}</p>
      </footer>
    </div>
  );
}

export default App;