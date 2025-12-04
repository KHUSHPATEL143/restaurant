import React from 'react';
import { ShoppingBag, X, Plus, Minus, ChevronRight } from 'lucide-react';

const Cart = ({ 
  isOpen, 
  onClose, 
  cart, 
  updateQuantity, 
  cartTotal, 
  onCheckout 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="p-5 flex items-center justify-between border-b border-gray-100">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <ShoppingBag size={20} className="text-orange-500" />
            Your Cart
          </h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-60">
              <ShoppingBag size={64} className="text-slate-300" />
              <p className="text-lg font-medium text-slate-900">Your cart is empty</p>
              <p className="text-sm text-slate-500">Looks like you haven't added anything yet.</p>
              <button 
                onClick={onClose}
                className="mt-4 px-6 py-2 bg-orange-50 text-orange-600 rounded-full font-semibold text-sm hover:bg-orange-100"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex gap-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover bg-gray-100" />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-semibold text-slate-900 line-clamp-1">{item.name}</h4>
                    <p className="text-sm text-slate-500">₹{item.price.toFixed(0)}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-slate-600"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="text-sm font-semibold w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-slate-600"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col justify-between items-end">
                  <button 
                     onClick={() => updateQuantity(item.id, -item.quantity)} // Remove item completely
                     className="text-slate-300 hover:text-red-500 transition-colors"
                  >
                    <X size={18} />
                  </button>
                  <span className="font-bold text-slate-900">₹{(item.price * item.quantity).toFixed(0)}</span>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-gray-50 space-y-4">
            <div className="flex justify-between items-center text-lg font-bold text-slate-900">
              <span>Subtotal</span>
              <span>₹{cartTotal.toFixed(2)}</span>
            </div>
            <button 
              onClick={onCheckout}
              className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-slate-800 transition-all active:scale-95 flex items-center justify-center gap-2 group"
            >
              Checkout
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
