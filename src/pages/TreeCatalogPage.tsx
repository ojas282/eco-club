import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Search, Filter } from 'lucide-react';
import { trees, Tree } from '../data/trees';
import TreeCard from '../components/TreeCard';

const TreeCatalogPage = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [filteredTrees, setFilteredTrees] = useState<Tree[]>(trees);
  
  const treeTypes = ['tree', 'shrub', 'herb', 'climber'];
  
  useEffect(() => {
    let results = trees;
    
    // Filter by search term
    if (searchTerm) {
      results = results.filter(tree => 
        tree.name_en.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tree.name_hi.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tree.scientific_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by type
    if (selectedType) {
      results = results.filter(tree => tree.type === selectedType);
    }
    
    setFilteredTrees(results);
  }, [searchTerm, selectedType]);

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-6 text-center">
          {t('trees.title')}
        </h1>
        
        {/* Search and Filter */}
        <div className="bg-white shadow-md rounded-lg p-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Search input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder={t('trees.search')}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Filter dropdown */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter size={18} className="text-gray-400" />
              </div>
              <select
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="">{t('trees.filter')}</option>
                {treeTypes.map(type => (
                  <option key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {/* Tree Grid */}
        {filteredTrees.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTrees.map(tree => (
              <TreeCard key={tree.id} tree={tree} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No trees or plants match your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TreeCatalogPage;