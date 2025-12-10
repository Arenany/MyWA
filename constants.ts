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
    image: 'https://picsum.photos/id/10/800/800' // Placeholder: Abstract tech
  },
  {
    id: 'chargers',
    title: 'Fast Chargers',
    description: '20W - 100W GaN Technology',
    image: 'https://picsum.photos/id/20/800/800' // Placeholder: Tech item
  },
  {
    id: 'earbuds',
    title: 'TWS Earbuds',
    description: 'ANC, Transparency Mode, Hifi',
    image: 'https://picsum.photos/id/30/800/800' // Placeholder: White gadget
  },
  {
    id: 'cases',
    title: 'Phone Cases',
    description: 'Silicone, Leather, MagSafe',
    image: 'https://picsum.photos/id/40/800/800' // Placeholder: Colorful
  }
];

export const BEST_SELLERS: Product[] = [
  {
    id: 'p1',
    name: 'AirPods Pro 2 Gen (ANC)',
    category: 'Earbuds',
    image: 'https://picsum.photos/id/146/600/600',
    badge: 'Best Seller'
  },
  {
    id: 'p2',
    name: '20W USB-C Power Adapter',
    category: 'Chargers',
    image: 'https://picsum.photos/id/2/600/600',
    badge: 'In Stock'
  },
  {
    id: 'p3',
    name: 'MagSafe Clear Case iPhone 15',
    category: 'Cases',
    image: 'https://picsum.photos/id/3/600/600',
    badge: 'Hot'
  },
  {
    id: 'p4',
    name: 'Braided C-to-C Cable (2m)',
    category: 'Cables',
    image: 'https://picsum.photos/id/4/600/600',
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