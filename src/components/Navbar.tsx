import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import ecoClubLogo from '../assets/eco-club-logo.png';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <img src={ecoClubLogo} alt="Eco Club Logo" className="h-10 w-auto" />
            <div className="flex flex-col">
              <h1 className={`font-bold text-lg ${scrolled ? 'text-green-700' : 'text-green-600'}`}>
                {t('home.hero.subtitle')}
              </h1>
              <p className="text-xs text-gray-600">UDISE: 09270203601</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link hover:text-green-600 transition-colors">
              {t('nav.home')}
            </Link>
            <Link to="/about" className="nav-link hover:text-green-600 transition-colors">
              {t('nav.about')}
            </Link>
            <Link to="/trees" className="nav-link hover:text-green-600 transition-colors">
              {t('nav.trees')}
            </Link>
            <Link to="/contact" className="nav-link hover:text-green-600 transition-colors">
              {t('nav.contact')}
            </Link>
            
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-1 rounded-full bg-green-100 hover:bg-green-200 text-green-800 transition-all"
            >
              <Globe size={16} />
              <span>{t('language.toggle')}</span>
            </button>
          </div>

          <div className="flex md:hidden items-center">
            <button 
              onClick={toggleLanguage}
              className="mr-4 flex items-center space-x-1 px-2 py-1 rounded-full bg-green-100 hover:bg-green-200 text-green-800"
            >
              <Globe size={14} />
              <span className="text-sm">{t('language.toggle')}</span>
            </button>
            
            <button onClick={toggleMenu} className="text-green-800">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div 
          className={`md:hidden absolute left-0 right-0 bg-white shadow-md transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-60 py-4' : 'max-h-0'
          }`}
          style={{ top: '100%' }}
        >
          <div className="flex flex-col space-y-3 px-4">
            <Link to="/" className="py-2 hover:text-green-600" onClick={closeMenu}>
              {t('nav.home')}
            </Link>
            <Link to="/about" className="py-2 hover:text-green-600" onClick={closeMenu}>
              {t('nav.about')}
            </Link>
            <Link to="/trees" className="py-2 hover:text-green-600" onClick={closeMenu}>
              {t('nav.trees')}
            </Link>
            <Link to="/contact" className="py-2 hover:text-green-600" onClick={closeMenu}>
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;