import React from 'react';
import { Clock, Star, UtensilsCrossed } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-slate-900 text-white py-12 sm:py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center space-y-4">
        <span className="text-orange-400 font-semibold tracking-wider text-sm uppercase">Est. 2024</span>
        <h2 className="text-4xl sm:text-6xl font-extrabold leading-tight">
          Authentic Flavors, <br/> Delivered to You.
        </h2>
        <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto">
          Experience culinary excellence with our locally sourced ingredients and masterfully crafted dishes.
        </p>
        
        <div className="pt-6 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-orange-500" /> 20-30 min delivery
          </div>
          <div className="flex items-center gap-2">
            <Star size={16} className="text-orange-500" /> 4.9 (2k+ reviews)
          </div>
          <div className="flex items-center gap-2">
            <UtensilsCrossed size={16} className="text-orange-500" /> Free Delivery on all orders
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
