import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BEST_SELLERS, getWhatsAppLink } from '../constants';
import EditableImage from './EditableImage';

const BestSellers: React.FC = () => {
  return (
    <section id="bestsellers" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Best Sellers</h2>
            <p className="text-slate-500">Items currently trending in US & European markets.</p>
          </div>
          <a href={getWhatsAppLink("Send me the full catalog PDF")} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
            View All Products &rarr;
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BEST_SELLERS.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-100 mb-4 group transform translate-z-0">
                <EditableImage
                  imageId={`prod-${product.id}`}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
                
                {product.badge && (
                  <div className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wide rounded-md z-10">
                    {product.badge}
                  </div>
                )}
              </div>
              
              <div className="flex-1">
                <p className="text-xs font-semibold text-slate-400 mb-1">{product.category}</p>
                <h3 className="text-lg font-bold text-slate-900 leading-tight mb-2">{product.name}</h3>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-slate-500 font-medium">MOQ: 50 pcs</span>
                  <span className="text-sm font-bold text-blue-600">Wholesale Only</span>
                </div>
                <a 
                  href={getWhatsAppLink(`Hi, I am interested in the ${product.name}. What is the price for 100 units?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-[#25D366] hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 group"
                >
                  <MessageCircle size={18} className="text-slate-400 group-hover:text-white transition-colors" />
                  <span>Inquire Price</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;