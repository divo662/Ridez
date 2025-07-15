import { Product, Service, BlogPost } from '@/types/product';

export const bikesData: Product[] = [
  {
    id: '1',
    name: 'Vanquish Comp Carbon',
    price: 4299,
    originalPrice: 4899,
    category: 'Road',
    image: '/assets/hero-bike.png',
    description: 'The ultimate racing machine with carbon fiber frame and premium components.',
    specs: {
      frame: 'Carbon Fiber',
      wheels: 'DT Swiss P1800',
      brakes: 'Disc Hydraulic',
      gears: 'Shimano Ultegra 11-speed',
      weight: '7.8kg'
    },
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Singletrack Speed Pro',
    price: 3299,
    category: 'Mountain',
    image: '/assets/singletrack-bike.png',
    description: 'Built for speed and agility on mountain trails.',
    specs: {
      frame: 'Aluminum',
      wheels: '29" Tubeless',
      brakes: 'Shimano XT Disc',
      gears: 'SRAM GX 12-speed',
      weight: '12.5kg'
    },
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Trail Power Elite',
    price: 2899,
    category: 'Mountain',
    image: '/assets/trail-power.png',
    description: 'Perfect balance of power and control for trail riding.',
    specs: {
      frame: 'Carbon/Aluminum',
      wheels: '27.5" Plus',
      brakes: 'SRAM Level TL',
      gears: 'Shimano Deore 12-speed',
      weight: '13.2kg'
    },
    inStock: true
  },
  {
    id: '4',
    name: 'Road Master Aero',
    price: 2599,
    category: 'Road',
    image: '/assets/road-bike.png',
    description: 'Aerodynamic design for competitive road cycling.',
    specs: {
      frame: 'Aluminum Aero',
      wheels: 'Aero Carbon',
      brakes: 'Rim Brake',
      gears: 'Shimano 105 11-speed',
      weight: '8.9kg'
    },
    inStock: true
  },
  {
    id: '5',
    name: 'Kids Adventure 20"',
    price: 399,
    category: 'Kids',
    image: '/assets/kids-bike.png',
    description: 'Safe and fun bike designed specifically for young riders.',
    specs: {
      frame: 'Steel',
      wheels: '20" Steel',
      brakes: 'V-Brake',
      gears: 'Single Speed',
      weight: '9.1kg'
    },
    inStock: true
  },
  {
    id: '6',
    name: 'Urban Commuter Pro',
    price: 1599,
    category: 'City',
    image: '/assets/hero-bike.png',
    description: 'Perfect for daily commuting with integrated lights and rack.',
    specs: {
      frame: 'Aluminum',
      wheels: '700c Hybrid',
      brakes: 'Disc Hydraulic',
      gears: 'Shimano Altus 8-speed',
      weight: '11.8kg'
    },
    inStock: true
  }
];

export const partsData: Product[] = [
  {
    id: 'p1',
    name: 'Premium Helmet',
    price: 159,
    category: 'Safety',
    image: '/assets/cyclist-accessories.png',
    description: 'MIPS technology helmet with superior ventilation.',
    inStock: true
  },
  {
    id: 'p2',
    name: 'Carbon Fiber Wheels',
    price: 1299,
    category: 'Wheels',
    image: '/assets/cyclist-accessories.png',
    description: 'Lightweight carbon wheels for enhanced performance.',
    inStock: true
  },
  {
    id: 'p3',
    name: 'Pro Bike Computer',
    price: 299,
    category: 'Electronics',
    image: '/assets/cyclist-accessories.png',
    description: 'GPS-enabled computer with heart rate monitoring.',
    inStock: true
  },
  {
    id: 'p4',
    name: 'Hydraulic Brake Set',
    price: 449,
    category: 'Brakes',
    image: '/assets/cyclist-accessories.png',
    description: 'Professional grade hydraulic disc brakes.',
    inStock: true
  },
  {
    id: 'p5',
    name: 'Racing Pedals',
    price: 189,
    category: 'Drivetrain',
    image: '/assets/cyclist-accessories.png',
    description: 'Clipless pedals for maximum power transfer.',
    inStock: true
  },
  {
    id: 'p6',
    name: 'Cycling Jersey Set',
    price: 89,
    category: 'Apparel',
    image: '/assets/cyclist-accessories.png',
    description: 'Breathable jersey with matching shorts.',
    inStock: true
  }
];

export const servicesData: Service[] = [
  {
    id: 's1',
    name: 'Basic Tune-Up',
    price: 89,
    description: 'Complete bike inspection and basic adjustments.',
    duration: '2 hours',
    image: '/assets/service-bike.png',
    features: ['Brake adjustment', 'Gear tuning', 'Chain lubrication', 'Tire pressure check']
  },
  {
    id: 's2',
    name: 'Premium Service',
    price: 199,
    description: 'Comprehensive maintenance and parts replacement.',
    duration: '4 hours',
    image: '/assets/service-bike.png',
    features: ['Full disassembly', 'Deep cleaning', 'Parts replacement', 'Performance optimization']
  },
  {
    id: 's3',
    name: 'Bike Fitting',
    price: 149,
    description: 'Professional bike fitting for optimal comfort and performance.',
    duration: '1.5 hours',
    image: '/assets/service-bike.png',
    features: ['Posture analysis', 'Saddle adjustment', 'Handlebar positioning', 'Pedal alignment']
  }
];

export const blogData: BlogPost[] = [
  {
    id: 'b1',
    title: 'Top 10 Mountain Biking Trails This Season',
    excerpt: 'Discover the most exciting mountain biking trails that will challenge your skills and reward you with breathtaking views.',
    image: '/assets/trail-power.png',
    date: '2024-01-15',
    author: 'Sarah Wilson',
    category: 'Trail Guides'
  },
  {
    id: 'b2',
    title: 'Bike Maintenance 101: Essential Tips',
    excerpt: 'Learn the fundamental bike maintenance skills every cyclist should know to keep their ride in perfect condition.',
    image: '/assets/service-bike.png',
    date: '2024-01-10',
    author: 'Mike Chen',
    category: 'Maintenance'
  },
  {
    id: 'b3',
    title: 'Road Cycling Nutrition Guide',
    excerpt: 'Fuel your rides properly with our comprehensive guide to cycling nutrition and hydration strategies.',
    image: '/assets/road-bike.png',
    date: '2024-01-05',
    author: 'Emma Rodriguez',
    category: 'Nutrition'
  },
  {
    id: 'b4',
    title: 'Best Kids Bikes for Every Age',
    excerpt: 'Help your child discover the joy of cycling with our guide to choosing the perfect bike for their age and skill level.',
    image: '/assets/kids-bike.png',
    date: '2023-12-28',
    author: 'David Thompson',
    category: 'Kids Cycling'
  },
  {
    id: 'b5',
    title: 'Carbon vs Aluminum: Frame Materials Compared',
    excerpt: 'Understanding the differences between bike frame materials to make the best choice for your riding style.',
    image: '/assets/hero-bike.png',
    date: '2023-12-20',
    author: 'Lisa Park',
    category: 'Gear Reviews'
  },
  {
    id: 'b6',
    title: 'Winter Cycling: Stay Warm and Safe',
    excerpt: 'Essential tips and gear recommendations for cycling safely and comfortably during the winter months.',
    image: '/assets/singletrack-bike.png',
    date: '2023-12-15',
    author: 'Alex Johnson',
    category: 'Seasonal Tips'
  }
];