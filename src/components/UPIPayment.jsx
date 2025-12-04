import React from 'react';
import QRCode from 'qrcode.react';
import { X, ArrowLeft } from 'lucide-react';

const UPIPayment = ({ amount, onPaymentSuccess, onBack }) => {
  // 1. Define Merchant VPA (Virtual Payment Address)
  const MERCHANT_VPA = "9409223427@naviaxis"; // REPLACE THIS with your actual UPI ID
  const MERCHANT_NAME = "Vrundavan Restaurant";

  // 2. Generate UPI Deep Link
  const upiLink = `upi://pay?pa=${MERCHANT_VPA}&pn=${encodeURIComponent(MERCHANT_NAME)}&am=${amount}&cu=INR&tn=Order #${Math.floor(Math.random() * 10000)}`;

  // 3. Generate QR Code URL (using a public API for this demo)
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiLink)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center animate-in zoom-in duration-300 relative">
        <button
          onClick={onBack}
          className="absolute top-4 left-4 p-2 hover:bg-gray-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={onBack} // Or a specific close function if needed
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-2">Scan to Pay</h2>
        <p className="text-slate-600 mb-6">Use any UPI app to pay</p>
        
        <div className="p-4 bg-gray-100 rounded-xl inline-block border-2 border-slate-100 shadow-inner">
          <img src={qrCodeUrl} alt="UPI QR Code" className="w-48 h-48 mix-blend-multiply" />
        </div>

        <div className="my-6">
          <p className="text-lg font-semibold text-slate-800">Total Amount</p>
          <p className="text-3xl font-bold text-orange-500">₹{parseFloat(amount).toFixed(2)}</p>
        </div>

        <p className="text-xs text-slate-500 mb-4">
          After payment, your order will be confirmed automatically. 
          If you face any issues, please contact us.
        </p>

        <button
          onClick={onPaymentSuccess}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition-all"
        >
          Simulate Successful Payment
        </button>
         <p className="text-center text-xs text-slate-400 mt-3 italic">
            (For simulation purposes only)
          </p>
      </div>
    </div>
  );
};

export default UPIPayment;