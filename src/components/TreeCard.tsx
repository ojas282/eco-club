import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { Tree } from '../data/trees';
import { useLanguage } from '../context/LanguageContext';

interface TreeCardProps {
  tree: Tree;
}

const TreeCard: React.FC<TreeCardProps> = ({ tree }) => {
  const { language, t } = useLanguage();
  const isEnglish = language === 'en';

  return (
    <Link 
      to={`/trees/${tree.id}`}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={tree.image} 
          alt={isEnglish ? tree.name_en : tree.name_hi} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-green-800 mb-1">
          {isEnglish ? tree.name_en : tree.name_hi}
        </h3>
        <p className="text-gray-600 text-sm italic mb-3">
          {tree.scientific_name}
        </p>
        
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Calendar size={16} className="mr-1" />
          <span>{t('tree.details.planted')}: {new Date(tree.planted_date).toLocaleDateString()}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Clock size={16} className="mr-1" />
          <span>{t('tree.details.lifespan')}: {isEnglish ? tree.lifespan_en : tree.lifespan_hi}</span>
        </div>
        
        <p className="text-gray-700 line-clamp-3 mb-3">
          {isEnglish ? tree.description_en.substring(0, 100) + '...' : tree.description_hi.substring(0, 100) + '...'}
        </p>
        
        <div className="flex justify-end">
          <span className="inline-block px-3 py-1 text-xs rounded-full bg-green-100 text-green-800">
            {tree.type}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default TreeCard;