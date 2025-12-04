import React from 'react';
import { ChefHat, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
            <ChefHat size={20} />
          </div>
          <span className="font-bold text-lg">Vrundavan.</span>
        </div>
        <div className="text-slate-500 text-sm">
          © 2024 Vrundavan Restaurant. All rights reserved.
        </div>
        <div className="flex gap-6">
          <Phone size={20} className="text-slate-400 hover:text-slate-900 cursor-pointer transition-colors" />
          <MapPin size={20} className="text-slate-400 hover:text-slate-900 cursor-pointer transition-colors" />
          <div className="flex gap-2">
            <div className="w-5 h-5 bg-slate-200 rounded-full" />
            <div className="w-5 h-5 bg-slate-200 rounded-full" />
            <div className="w-5 h-5 bg-slate-200 rounded-full" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
