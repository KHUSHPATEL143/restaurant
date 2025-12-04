import React from 'react';
import { Search, UtensilsCrossed, Coffee } from 'lucide-react'; // Import necessary icons
import MenuItem from './MenuItem.jsx';
import { CATEGORIES } from '../data/menu';

const Menu = ({ 
  activeCategory, 
  setActiveCategory, 
  searchQuery, 
  setSearchQuery, 
  filteredMenu, 
  onAddToCart 
}) => {
  // Helper function to render icons based on category ID
  const renderCategoryIcon = (catId) => {
    switch (catId) {
      case 'all': return <UtensilsCrossed size={18} />;
      case 'burgers': return <span className="text-lg">🍔</span>;
      case 'pizza': return <span className="text-lg">🍕</span>;
      case 'main': return <span className="text-lg">🥩</span>;
      case 'sides': return <span className="text-lg">🍟</span>;
      case 'drinks': return <Coffee size={18} />;
      default: return null;
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between mb-8">
        {/* Category Scroller */}
        <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === cat.id 
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-400'
              }`}
            >
              {renderCategoryIcon(cat.id)} {/* Render icon here */}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search menu..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredMenu.length > 0 ? (
          filteredMenu.map(item => (
            <MenuItem key={item.id} item={item} onAddToCart={onAddToCart} />
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
            <div className="inline-block p-4 rounded-full bg-gray-100 mb-4">
              <Search size={32} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">No items found</h3>
            <p className="text-gray-500">Try adjusting your search or category filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
