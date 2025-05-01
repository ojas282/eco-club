import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { trees, Tree } from '../data/trees';
import { Calendar, Clock, MapPin, ArrowLeft, Leaf } from 'lucide-react';
import ImageGallery from '../components/ImageGallery';

const TreeDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const [tree, setTree] = useState<Tree | null>(null);
  const isEnglish = language === 'en';
  
  useEffect(() => {
    if (id) {
      const foundTree = trees.find(t => t.id === parseInt(id));
      setTree(foundTree || null);
      window.scrollTo(0, 0);
    }
  }, [id]);

  if (!tree) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Tree not found</h2>
          <Link to="/trees" className="text-green-600 hover:text-green-700">
            Return to tree catalog
          </Link>
        </div>
      </div>
    );
  }

  const galleryImages = tree.gallery.map(url => ({
    url,
    caption: isEnglish ? tree.name_en : tree.name_hi
  }));

  return (
    <div className="pt-20 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Link 
            to="/trees" 
            className="inline-flex items-center text-green-600 hover:text-green-700"
          >
            <ArrowLeft size={16} className="mr-1" />
            <span>Back to Tree Catalog</span>
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <ImageGallery images={galleryImages} />
          
          <div className="p-6">
            <h1 className="text-3xl font-bold text-green-800 mb-2">
              {isEnglish ? tree.name_en : tree.name_hi}
            </h1>
            <p className="text-gray-600 italic mb-4">{tree.scientific_name}</p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center px-3 py-1 bg-green-100 rounded-full text-green-800">
                <Leaf size={16} className="mr-1" />
                <span>{tree.type}</span>
              </div>
              <div className="flex items-center px-3 py-1 bg-blue-100 rounded-full text-blue-800">
                <Calendar size={16} className="mr-1" />
                <span>{new Date(tree.planted_date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center px-3 py-1 bg-amber-100 rounded-full text-amber-800">
                <Clock size={16} className="mr-1" />
                <span>{isEnglish ? tree.lifespan_en : tree.lifespan_hi}</span>
              </div>
              <div className="flex items-center px-3 py-1 bg-purple-100 rounded-full text-purple-800">
                <MapPin size={16} className="mr-1" />
                <span>{tree.location.area}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold text-green-800 mb-3">
                  {t('tree.details.description')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isEnglish ? tree.description_en : tree.description_hi}
                </p>
                
                <h2 className="text-xl font-semibold text-green-800 mb-3">
                  Location Details
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-gray-700 mb-2">
                    <span className="font-medium">Area:</span> {tree.location.area}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Coordinates:</span> {tree.location.coordinates}
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-green-800 mb-3">
                  {t('tree.details.uses')}
                </h2>
                <ul className="space-y-2 mb-6">
                  {(isEnglish ? tree.uses_en : tree.uses_hi).map((use, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                        <Leaf size={12} className="text-green-600" />
                      </div>
                      <span className="text-gray-700">{use}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreeDetailPage;