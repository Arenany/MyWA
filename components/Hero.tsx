import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { getWhatsAppLink } from '../constants';
import EditableImage from './EditableImage';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 rounded-bl-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
              B2B Wholesale Only
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Premium Mobile <br />
              <span className="text-slate-400">Accessories.</span>
            </h1>
            
            <h2 className="text-xl text-slate-600 max-w-lg leading-relaxed">
              Factory direct pricing for Apple & Samsung accessories. 
              Over 7 years of manufacturing excellence serving US & EU markets.
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href={getWhatsAppLink("Hi Interacox, I would like to get your wholesale price list.")}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-2xl font-bold text-lg shadow-xl shadow-green-500/20 transition-all hover:-translate-y-1"
              >
                Get Price List
                <ArrowRight size={20} />
              </a>
              
              <a 
                href="https://wa.me/c/8618659518187"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-slate-200 hover:border-slate-900 text-slate-900 rounded-2xl font-bold text-lg transition-all"
              >
                View Catalog
                <FileText size={20} />
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/40 to-purple-200/40 rounded-3xl blur-2xl transform rotate-3 scale-95 opacity-70" />
            
            <EditableImage
              imageId="hero-main"
              src="https://picsum.photos/id/160/1000/1000"
              alt="Premium Mobile Accessories Collection"
              className="relative w-full h-auto rounded-3xl shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02] bg-white"
            />
            
            {/* Float Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow hidden md:flex z-30">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                7Y+
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Experience</p>
                <p className="text-xs text-slate-500">Since 2016</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;