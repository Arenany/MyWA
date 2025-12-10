import React from 'react';
import { CATEGORIES } from '../constants';
import EditableImage from './EditableImage';

const CategoryGrid: React.FC = () => {
  return (
    <section id="categories" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Products</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            High-margin essentials for your wholesale business. Top quality materials with low defect rates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {CATEGORIES.map((cat) => (
            <div 
              key={cat.id} 
              className="group relative h-80 md:h-96 rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform translate-z-0"
            >
              <EditableImage
                imageId={`cat-${cat.id}`}
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 pointer-events-none" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{cat.title}</h3>
                <p className="text-slate-300 mb-4">{cat.description}</p>
                <span className="inline-block text-sm font-semibold text-white border-b border-white pb-1 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  View Details &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;