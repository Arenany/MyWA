export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  badge?: string;
}

export interface Category {
  id: string;
  title: string;
  image: string;
  description: string;
}

export interface WhatsAppConfig {
  phoneNumber: string; // Used for custom text links
  shortLink: string;   // Used for generic links
}