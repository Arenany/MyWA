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
    image: 'https://images.unsplash.com/photo-1625244516428-278ce245b95c?auto=format&fit=crop&q=80&w=800' // White coiled cable
  },
  {
    id: 'chargers',
    title: 'Fast Chargers',
    description: '20W - 100W GaN Technology',
    image: 'https://images.unsplash.com/photo-1624450392331-50720468305f?auto=format&fit=crop&q=80&w=800' // White power adapter in socket or on table
  },
  {
    id: 'earbuds',
    title: 'TWS Earbuds',
    description: 'ANC, Transparency Mode, Hifi',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=800' // High quality earbuds case
  },
  {
    id: 'cases',
    title: 'Phone Cases',
    description: 'Silicone, Leather, MagSafe',
    image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&q=80&w=800' // Stack of phone cases
  }
];

export const BEST_SELLERS: Product[] = [
  {
    id: 'p1',
    name: 'AirPods Pro 2 Gen (ANC)',
    category: 'Earbuds',
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&q=80&w=600', // White Earbuds on surface
    badge: 'Best Seller'
  },
  {
    id: 'p2',
    name: '20W USB-C Power Adapter',
    category: 'Chargers',
    image: 'https://images.unsplash.com/photo-1620714798602-5e43c52a92f0?auto=format&fit=crop&q=80&w=600', // Clean Apple-style adapter
    badge: 'In Stock'
  },
  {
    id: 'p3',
    name: 'MagSafe Leather Case',
    category: 'Cases',
    image: 'https://images.unsplash.com/photo-1605236453692-cd0285a73d8d?auto=format&fit=crop&q=80&w=600', // Dark leather case texture
    badge: 'Hot'
  },
  {
    id: 'p4',
    name: 'Braided C-to-C Cable (2m)',
    category: 'Cables',
    image: 'https://images.unsplash.com/photo-1594549181032-e8c963038446?auto=format&fit=crop&q=80&w=600', // Coiled cable
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