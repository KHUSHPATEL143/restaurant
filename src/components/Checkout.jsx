import React from 'react';
import { ArrowLeft, MapPin } from 'lucide-react';

const Checkout = ({
  cart,
  cartTotal,
  finalTotal,
  customerDetails,
  setCustomerDetails,
  setOrderStep,
  onBackToMenu,
}) => {
  const deliveryFee = 0; // Delivery is now free as per App.js
  const taxAmount = cartTotal * 0.05; // 5% GST as per App.js

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Assuming validation passes, move to payment step
    setOrderStep('payment');
    window.scrollTo(0, 0); // Scroll to top when navigating
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
      <button
        onClick={onBackToMenu}
        className="flex items-center text-slate-500 hover:text-slate-800 mb-6 transition-colors"
      >
        <ArrowLeft size={20} className="mr-2" /> Back to Menu
      </button>

      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">Checkout</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Form */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <MapPin size={20} className="text-orange-500" /> Delivery Details
            </h3>
            <form id="checkout-form" onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input
                  required
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="John Doe"
                  value={customerDetails.name}
                  onChange={e => setCustomerDetails({ ...customerDetails, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                <input
                  required
                  type="tel"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="(555) 123-4567"
                  value={customerDetails.phone}
                  onChange={e => setCustomerDetails({ ...customerDetails, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Delivery Address</label>
                <textarea
                  required
                  rows="3"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="123 Main St, Apt 4B"
                  value={customerDetails.address}
                  onChange={e => setCustomerDetails({ ...customerDetails, address: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Delivery Instructions (Optional)</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Gate code, drop off location..."
                  value={customerDetails.notes}
                  onChange={e => setCustomerDetails({ ...customerDetails, notes: e.target.value })}
                />
              </div>
            </form>
          </div>
        </div>

        {/* Order Summary */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-semibold text-lg mb-4">Your Order</h3>
            <div className="space-y-4 max-h-80 overflow-y-auto mb-4 pr-2">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-sm">
                      {item.quantity}x
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">{item.name}</p>
                      <p className="text-xs text-slate-500">₹{item.price.toFixed(0)} / ea</p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-slate-900">
                    ₹{(item.price * item.quantity).toFixed(0)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-dashed border-gray-200 pt-4 space-y-2">
              <div className="flex justify-between text-sm text-slate-600">
                <span>Subtotal</span>
                <span>₹{cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-slate-600">
                <span>Delivery Fee</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
              <div className="flex justify-between text-sm text-slate-600">
                <span>Tax (5% GST)</span>
                <span>₹{taxAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-slate-900 pt-2">
                <span>Total</span>
                <span>₹{finalTotal}</span>
              </div>
            </div>

            <button
              type="submit"
              form="checkout-form"
              className="w-full mt-6 bg-slate-900 hover:bg-slate-800 text-white py-3.5 rounded-xl font-bold text-lg shadow-lg shadow-slate-900/10 transition-all active:scale-95"
            >
              Proceed to Pay
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;

