import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Success = ({ customerDetails, finalTotal, onOrderMore }) => {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-in zoom-in duration-300">
        <CheckCircle2 size={48} className="text-green-600" />
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Payment Successful!</h2>
      <p className="text-slate-600 max-w-md mx-auto mb-8 text-lg">
        Thanks {customerDetails.name.split(' ')[0]}! We have received your payment of <strong>₹{finalTotal}</strong>.
      </p>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 max-w-sm w-full text-left mb-8">
        <h3 className="font-semibold text-slate-900 border-b pb-2 mb-4">Order Details</h3>
        <div className="space-y-2 mb-4">
          <p className="flex justify-between text-sm"><span className="text-slate-500">Order ID</span> <span className="font-mono text-slate-900">#8293</span></p>
          <p className="flex justify-between text-sm"><span className="text-slate-500">Estimated Time</span> <span className="text-slate-900">35 mins</span></p>
          <p className="flex justify-between text-sm"><span className="text-slate-500">Address</span> <span className="text-slate-900 truncate max-w-[150px]">{customerDetails.address}</span></p>
        </div>
      </div>
      <button 
        onClick={onOrderMore}
        className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-full font-semibold transition-all"
      >
        Order More
      </button>
    </main>
  );
};

export default Success;
