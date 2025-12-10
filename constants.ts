import { Product, Category, WhatsAppConfig } from './types';

// CONFIGURATION
export const WHATSAPP_CONFIG: WhatsAppConfig = {
  phoneNumber: '8618659518187', 
  shortLink: 'https://api.whatsapp.com/send?phone=8618659518187'
};

// HELPER FUNCTION
export const getWhatsAppLink = (message?: string) => {
  const baseUrl = "https://api.whatsapp.com/send?phone=8618659518187";
  
  if (message) {
    // Append the pre-filled message if provided
    const encodedMessage = encodeURIComponent(message);
    return `${baseUrl}&text=${encodedMessage}`;
  }
  
  // Return the base URL if no message is provided
  return baseUrl;
};

// DATA
export const CATEGORIES: Category[] = [
  {
    id: 'cables',
    title: 'USB Cables',
    description: 'Braided, Fast Charging, Durable',
    image: 'https://images.unsplash.com/photo-1610450829878-1c8aa8b39b85?auto=format&fit=crop&q=80&w=800' // White USB Cable coil
  },
  {
    id: 'chargers',
    title: 'Fast Chargers',
    description: '20W - 100W GaN Technology',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=800' // White Power Adapter
  },
  {
    id: 'earbuds',
    title: 'TWS & Audio',
    description: 'ANC, Transparency Mode, Hifi',
    image: 'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?auto=format&fit=crop&q=80&w=800' // Silver/White Over-ear Headphones (AirPods Max style)
  },
  {
    id: 'cases',
    title: 'Phone Cases',
    description: 'Silicone, Leather, MagSafe',
    image: 'https://images.unsplash.com/photo-1603351154351-5cf9972a93d8?auto=format&fit=crop&q=80&w=800' // Colorful iPhone Cases
  }
];

export const BEST_SELLERS: Product[] = [
  {
    id: 'p1',
    name: 'AirPods Pro 2 Gen (ANC)',
    category: 'Earbuds',
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&q=80&w=600', // White Earbuds with case
    badge: 'Best Seller'
  },
  {
    id: 'p2',
    name: '20W USB-C Power Adapter',
    category: 'Chargers',
    image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=600', // Apple Style Charger
    badge: 'In Stock'
  },
  {
    id: 'p3',
    name: 'MagSafe Leather Case',
    category: 'Cases',
    image: 'https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&q=80&w=600', // Premium Cases
    badge: 'Hot'
  },
  {
    id: 'p4',
    name: 'Braided C-to-C Cable (2m)',
    category: 'Cables',
    image: 'https://plus.unsplash.com/premium_photo-1664194583917-b089c8c9a3eb?auto=format&fit=crop&q=80&w=600', // Clean white cable
  }
];

export const FEATURES = [
  {
    title: 'Factory Direct',
    description: 'No middlemen. Get the lowest price directly from the source.'
  },
  {
    title: '7+ Years Experience',
    description: 'Serving B2B clients in US & Europe since 2016.'
  },
  {
    title: 'Quality Assurance',
    description: '100% QC inspection before shipment. 1 Year Warranty.'
  },
  {
    title: 'Fast Shipping',
    description: 'DHL/FedEx/UPS Priority shipping to your warehouse.'
  }
];