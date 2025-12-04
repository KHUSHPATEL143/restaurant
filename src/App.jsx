import React, { useState } from 'react';
import { MENU_ITEMS, CATEGORIES } from './data/menu'; // Import CATEGORIES here
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Menu from './components/Menu.jsx';
import Cart from './components/Cart.jsx';
import Checkout from './components/Checkout.jsx';
import Success from './components/Success.jsx';
import Footer from './components/Footer.jsx';
import UPIPayment from './components/UPIPayment.jsx';

const App = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderStep, setOrderStep] = useState('menu'); // 'menu', 'checkout', 'payment', 'success'
  const [searchQuery, setSearchQuery] = useState('');
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    phone: '',
    address: '',
    notes: ''
  });

  // Filter menu logic
  const filteredMenu = MENU_ITEMS.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Cart Logic
  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (itemId, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: Math.max(0, item.quantity + delta) };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Calculate final total including tax (5% GST) and delivery
  const deliveryFee = 0; // Delivery is now free for all orders
  const taxAmount = cartTotal * 0.05;
  const finalTotal = (cartTotal + deliveryFee + taxAmount).toFixed(2);

  const handlePaymentSuccess = () => {
    setOrderStep('success');
    setCart([]);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (orderStep) {
      case 'checkout':
        return (
          <Checkout
            cart={cart}
            cartTotal={cartTotal}
            finalTotal={finalTotal}
            customerDetails={customerDetails}
            setCustomerDetails={setCustomerDetails}
            setOrderStep={setOrderStep} // Pass setOrderStep for navigation
            onPaymentSuccess={handlePaymentSuccess}
          />
        );
      case 'success':
        return (
          <Success
            customerDetails={customerDetails}
            finalTotal={finalTotal}
            onOrderMore={() => {
              setOrderStep('menu');
              setCustomerDetails({ name: '', phone: '', address: '', notes: '' });
            }}
          />
        );
      case 'payment':
        return (
          <UPIPayment
            amount={finalTotal}
            onPaymentSuccess={handlePaymentSuccess}
            onBack={() => setOrderStep('checkout')}
          />
        );
      case 'menu':
      default:
        return (
          <>
            <Hero />
            <Menu
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              filteredMenu={filteredMenu}
              onAddToCart={addToCart}
            />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-slate-800 font-sans">
      <Header
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
        onLogoClick={() => setOrderStep('menu')}
      />

      {renderContent()}

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        updateQuantity={updateQuantity}
        cartTotal={cartTotal}
        onCheckout={() => {
          setIsCartOpen(false);
          setOrderStep('checkout');
        }}
      />
      
      <Footer />
    </div>
  );
};


export default App;
