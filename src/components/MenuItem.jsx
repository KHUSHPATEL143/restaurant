import React from 'react';
import { Plus } from 'lucide-react';

const MenuItem = ({ item, onAddToCart }) => {
  return (
    <div className="group bg-white rounded-2xl p-3 shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col">
      <div className="relative h-48 rounded-xl overflow-hidden mb-4">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {item.popular && (
          <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
            POPULAR
          </span>
        )}
        <button 
          onClick={() => onAddToCart(item)}
          className="absolute bottom-2 right-2 bg-white text-slate-900 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all active:scale-95"
        >
          <Plus size={20} />
        </button>
      </div>
      
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-slate-900">{item.name}</h3>
          <span className="font-semibold text-slate-900">₹{item.price.toFixed(0)}</span>
        </div>
        <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
          {item.description}
        </p>
        <button 
          onClick={() => onAddToCart(item)}
          className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 hover:border-slate-300 transition-colors"
        >
          Add to Order
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
