import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { School, Users, Award, BookOpen } from 'lucide-react';
import schoolImage from '../assets/school-image.jpg';
import ecoClubLogo from '../assets/eco-club-logo.png';

const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-12 text-center">
          {t('about.title')}
        </h1>
        
        {/* School Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-center">
          <div>
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              {t('about.school.name')}
            </h2>
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <School size={24} className="text-green-600" />
              </div>
              <div>
                <p className="font-medium">UDISE Code</p>
                <p className="text-lg">09270203601</p>
              </div>
            </div>
            <p className="text-gray-700 mb-6">
              Prathmik Vidhyalay Narauna is a primary school located in Kakori, dedicated to providing quality education while promoting environmental awareness and sustainability among students.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <Users size={20} className="text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Student-Centered Approach</h3>
                  <p className="text-gray-600">Focusing on holistic development of each student</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <Award size={20} className="text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Quality Education</h3>
                  <p className="text-gray-600">Providing quality primary education to local children</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <BookOpen size={20} className="text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Environmental Education</h3>
                  <p className="text-gray-600">Integrating environmental awareness into curriculum</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={schoolImage} 
              alt="Prathmik Vidhyalay Narauna Kakori" 
              className="rounded-lg shadow-lg z-10 relative"
            />
            <div className="absolute -bottom-5 -right-5 w-full h-full bg-green-200 rounded-lg -z-10"></div>
          </div>
        </div>
        
        {/* Eco Club Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center mb-6">
            <img 
              src={ecoClubLogo} 
              alt="Eco Club Logo" 
              className="h-24 w-auto mr-6 mb-4 md:mb-0"
            />
            <div>
              <h2 className="text-2xl font-bold text-green-700 mb-2">
                {t('about.eco.title')}
              </h2>
              <p className="text-gray-700">
                {t('about.eco.description')}
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-xl font-semibold text-green-600 mb-4">Our Eco Club Activities</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">Tree Plantation</h4>
                <p className="text-gray-700">
                  Regular tree plantation drives within and around the school premises to increase green cover.
                </p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">Plant Identification</h4>
                <p className="text-gray-700">
                  Documentation and labeling of existing flora with QR codes for educational purposes.
                </p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">Environmental Awareness</h4>
                <p className="text-gray-700">
                  Conducting awareness programs about conservation and sustainable practices.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Vision & Mission */}
        <div className="bg-green-700 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Vision</h2>
          <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
            To create environmentally conscious citizens who understand the importance of biodiversity conservation and sustainable living, starting from the school level.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-600 bg-opacity-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Education Goals</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Integrate environmental education in curriculum</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Encourage practical learning through observation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Develop scientific temperament in students</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-600 bg-opacity-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Environmental Goals</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Document and conserve local biodiversity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Create a model eco-friendly school campus</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Promote sustainable practices in local community</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;