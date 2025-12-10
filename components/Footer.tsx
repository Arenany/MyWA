import React from 'react';
import { getWhatsAppLink } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <span className="text-2xl font-bold tracking-tighter mb-6 block">
              Interacox<span className="text-[#25D366]">.</span>
            </span>
            <p className="text-slate-400 max-w-sm">
              Your trusted partner for high-quality mobile accessories. Factory direct pricing, premium quality, and global shipping.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#categories" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#bestsellers" className="hover:text-white transition-colors">Best Sellers</a></li>
              <li><a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <p className="text-slate-400 mb-2">Shenzhen, China</p>
            <p className="text-slate-400 mb-4">sales@interacox.com (Mock)</p>
            <a 
              href={getWhatsAppLink("Hi, I have a general inquiry.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-slate-700 hover:border-[#25D366] hover:text-[#25D366] px-6 py-2 rounded-full transition-all"
            >
              Start Chat
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} Interacox Accessories. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;