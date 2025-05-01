import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import ecoClubLogo from '../assets/eco-club-logo.png';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <img src={ecoClubLogo} alt="Eco Club Logo" className="h-12 w-auto mr-3" />
              <div>
                <h3 className="font-bold text-lg">{t('home.hero.title')}</h3>
                <p className="text-xs text-green-200">{t('footer.eco.initiative')}</p>
              </div>
            </div>
            <p className="text-sm text-green-200">
              UDISE: 09270203601
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-green-200 hover:text-white transition">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-green-200 hover:text-white transition">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/trees" className="text-green-200 hover:text-white transition">
                  {t('nav.trees')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-green-200 hover:text-white transition">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <address className="not-italic text-green-200 space-y-2">
              <p>Prathmik Vidhyalay Narauna</p>
              <p>Kakori, Lucknow</p>
              <p>Uttar Pradesh, India</p>
              <p className="flex items-center mt-2">
                <Mail size={16} className="mr-2" />
                <a href="mailto:info@example.com" className="hover:text-white">
                  info@example.com
                </a>
              </p>
            </address>
          </div>

          {/* Social Media */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-green-700 p-2 rounded-full hover:bg-green-600 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-green-700 p-2 rounded-full hover:bg-green-600 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-green-700 p-2 rounded-full hover:bg-green-600 transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-6 text-center text-sm text-green-300">
          <p>&copy; {currentYear} {t('home.hero.subtitle')}. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;