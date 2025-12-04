export const CATEGORIES = [
  { id: 'all', name: 'All', icon: '<UtensilsCrossed size={18} />' },
  { id: 'burgers', name: 'Burgers', icon: '<span className="text-lg">🍔</span>' },
  { id: 'pizza', name: 'Pizza', icon: '<span className="text-lg">🍕</span>' },
  { id: 'main', name: 'Mains', icon: '<span className="text-lg">🥩</span>' },
  { id: 'sides', name: 'Sides', icon: '<span className="text-lg">🍟</span>' },
  { id: 'drinks', name: 'Drinks', icon: '<Coffee size={18} />' },
];

export const MENU_ITEMS = [
  {
    id: 999,
    name: "Payment Test Item",
    description: "Use this item to test the UPI payment gateway integration for just ₹1.",
    price: 1.00,
    category: "sides",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9674c36d?auto=format&fit=crop&w=600&q=80",
    popular: false
  },
  {
    id: 1,
    name: "The Classic Smash",
    description: "Double smashed patty, american cheese, pickles, onions, house sauce on brioche.",
    price: 199.00,
    category: "burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    popular: true
  },
  {
    id: 2,
    name: "Truffle Mushroom Swiss",
    description: "Angus beef, sautéed wild mushrooms, swiss cheese, truffle aioli.",
    price: 249.00,
    category: "burgers",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=600&q=80",
    popular: false
  },
  {
    id: 3,
    name: "Margherita di Napoli",
    description: "San Marzano tomato sauce, fresh mozzarella di bufala, basil, extra virgin olive oil.",
    price: 299.00,
    category: "pizza",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80",
    popular: true
  },
  {
    id: 4,
    name: "Spicy Pepperoni",
    description: "Tomato sauce, mozzarella, spicy pepperoni, chili honey drizzle.",
    price: 349.00,
    category: "pizza",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80",
    popular: false
  },
  {
    id: 5,
    name: "Herb Crusted Salmon",
    description: "Atlantic salmon, quinoa salad, lemon butter sauce, asparagus.",
    price: 549.00,
    category: "main",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a7270028d?auto=format&fit=crop&w=600&q=80",
    popular: false
  },
  {
    id: 6,
    name: "Ribeye Steak Frites",
    description: "10oz Ribeye, peppercorn sauce, truffle fries, arugula salad.",
    price: 649.00,
    category: "main",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=600&q=80",
    popular: true
  },
  {
    id: 7,
    name: "Crispy Calamari",
    description: "Served with marinara and lemon wedges.",
    price: 199.00,
    category: "sides",
    image: "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=600&q=80",
    popular: false
  },
  {
    id: 8,
    name: "Truffle Fries",
    description: "Parmesan, parsley, white truffle oil.",
    price: 129.00,
    category: "sides",
    image: "https://images.unsplash.com/photo-1573080496987-a199f8cd75c5?auto=format&fit=crop&w=600&q=80",
    popular: true
  },
  {
    id: 9,
    name: "Craft Lemonade",
    description: "Freshly squeezed, choose classic or strawberry.",
    price: 79.00,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
    popular: false
  },
  {
    id: 10,
    name: "Iced Caramel Macchiato",
    description: "Espresso, vanilla syrup, milk, caramel drizzle.",
    price: 149.00,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80",
    popular: false
  },
];