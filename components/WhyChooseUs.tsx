import React from 'react';
import { FEATURES } from '../constants';
import { ShieldCheck, Truck, Zap, Factory } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const getIcon = (index: number) => {
    switch(index) {
      case 0: return <Factory className="w-8 h-8 text-blue-600" />;
      case 1: return <Zap className="w-8 h-8 text-blue-600" />;
      case 2: return <ShieldCheck className="w-8 h-8 text-blue-600" />;
      case 3: return <Truck className="w-8 h-8 text-blue-600" />;
      default: return <Factory className="w-8 h-8 text-blue-600" />;
    }
  };

  return (
    <section id="features" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Why Partner With Us?</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div key={index} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6">
                {getIcon(index)}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;