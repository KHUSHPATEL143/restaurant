import React from 'react';
import { ShoppingBag, ChefHat } from 'lucide-react';

const Header = ({ cartCount, setIsCartOpen, setOrderStep }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setOrderStep('menu')}>
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white">
            <ChefHat size={20} />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900">Vrundavan<span className="text-orange-500">.</span></h1>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ShoppingBag size={24} className="text-slate-700" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-in zoom-in">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;