import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { QrCode, Leaf, Info, Trees as Tree } from 'lucide-react';
import { trees } from '../data/trees';
import TreeCard from '../components/TreeCard';
import PrincipalNote from '../components/PrincipalNote';
import heroImage from '../assets/hero-image.jpg';

const HomePage = () => {
  const { t } = useLanguage();
  const featuredTrees = trees.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 z-10 text-center pt-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            {t('home.hero.title')}
          </h1>
          <h2 className="text-2xl md:text-3xl text-white mb-6">
            {t('home.hero.subtitle')}
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            {t('home.hero.description')}
          </p>
          <Link 
            to="/trees" 
            className="inline-block px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300 text-lg font-semibold"
          >
            {t('home.explore.button')}
          </Link>
        </div>
      </section>

      {/* Principal's Note */}
      <PrincipalNote />

      {/* QR Code Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-green-800 mb-4">
                {t('home.scan.title')}
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {t('home.scan.description')}
              </p>
              <div className="flex flex-col space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <QrCode size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Scan QR Codes</h3>
                    <p className="text-gray-600">Scan QR codes placed near trees and plants</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <Info size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Learn Details</h3>
                    <p className="text-gray-600">Access complete information about the plant</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <Leaf size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Explore Benefits</h3>
                    <p className="text-gray-600">Discover medicinal, environmental, and cultural benefits</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-white rounded-lg shadow-lg p-8 flex items-center justify-center">
                  <div className="relative">
                    <QrCode size={180} className="text-green-800" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Tree size={48} className="text-green-600" />
                    </div>
                  </div>
                </div>
                <div className="absolute -top-3 -left-3 w-full h-full bg-green-200 rounded-lg -z-10"></div>
                <div className="absolute -bottom-3 -right-3 w-full h-full bg-green-300 rounded-lg -z-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Trees Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
            Featured Plants
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTrees.map(tree => (
              <TreeCard key={tree.id} tree={tree} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/trees" 
              className="inline-block px-6 py-3 border-2 border-green-600 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition-colors duration-300 font-semibold"
            >
              View All Plants
            </Link>
          </div>
        </div>
      </section>

      {/* Eco Initiative Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {t('about.eco.title')}
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            {t('about.eco.description')}
          </p>
          <Link 
            to="/about" 
            className="inline-block px-6 py-3 bg-white text-green-700 rounded-full hover:bg-green-100 transition-colors duration-300 font-semibold"
          >
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;