import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import { X, ArrowLeft } from 'lucide-react';

const UPIPayment = ({ amount, onPaymentSuccess, onBack }) => {
  const [upiId, setUpiId] = useState('');
  const [canPayWithUpi, setCanPayWithUpi] = useState(false);

  // 1. Define Merchant VPA (Virtual Payment Address)
  const MERCHANT_VPA = "9409223427@naviaxis"; // REPLACE THIS with your actual UPI ID
  const MERCHANT_NAME = "Vrundavan Restaurant";

  // 2. Generate UPI Deep Link
  const upiLink = `upi://pay?pa=${MERCHANT_VPA}&pn=${encodeURIComponent(MERCHANT_NAME)}&am=${amount}&cu=INR&tn=Order #${Math.floor(Math.random() * 10000)}`;

  // 3. Generate QR Code URL
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiLink)}`;

  useEffect(() => {
    // Basic check to see if UPI app might be available.
    // This is not foolproof but works for many cases on mobile.
    const testUpiUrl = 'upi://pay';
    const timeout = setTimeout(() => {
      setCanPayWithUpi(false);
    }, 1000);

    window.onblur = () => {
      clearTimeout(timeout);
      setCanPayWithUpi(true);
    };

    try {
      window.location.href = testUpiUrl;
    } catch (e) {
      //
    }
    
    return () => {
      window.onblur = null;
      clearTimeout(timeout);
    }
  }, []);

  const handleUpiIdPayment = () => {
    if (upiId) {
      const userUpiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(MERCHANT_NAME)}&am=${amount}&cu=INR&tn=Order payment`;
      window.location.href = userUpiLink;
    }
  };
  
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

        {canPayWithUpi ? (
           <a href={upiLink} className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold transition-all">
            Pay with UPI App
          </a>
        ) : (
          <div className="flex flex-col gap-2">
            <input 
              type="text"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              placeholder="Enter your UPI ID"
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              onClick={handleUpiIdPayment}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold transition-all"
            >
              Request Payment on UPI ID
            </button>
          </div>
        )}

        <p className="text-xs text-slate-500 my-4">
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