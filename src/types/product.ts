export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  description: string;
  specs?: {
    frame?: string;
    wheels?: string;
    brakes?: string;
    gears?: string;
    weight?: string;
    material?: string;
  };
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface BlogPost {
  content: string;
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export interface Service {
  id: string;
  name: string;
  price: number;
  description: string;
  duration: string;
  image: string;
  features: string[];
}