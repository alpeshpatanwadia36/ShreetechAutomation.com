export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: 'doors' | 'interlocks' | 'security' | 'hygiene' | 'curtains' | 'valves';
  categoryLabel: string;
  tagline: string;
  description: string;
  keyFeatures: string[];
  specifications: ProductSpecification[];
  applications: string[];
  imageUrl: string;
  onlineImageUrl?: string;
  popular?: boolean;
  brochureAvailable?: boolean;
}

export interface ProductCategory {
  id: 'all' | 'doors' | 'interlocks' | 'security' | 'hygiene' | 'curtains' | 'valves';
  name: string;
  iconName: string;
  description: string;
  count: number;
}

export interface BranchLocation {
  city: string;
  state: string;
  type: string;
  address: string;
  phone: string;
  phoneAlt?: string;
  email: string;
  mapEmbedUrl: string;
  googleShareUrl?: string;
  proprietor?: string;
  landmark?: string;
  gstNumber?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface QuoteRequestData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  city: string;
  category: string;
  productName: string;
  quantity: number;
  dimensions?: string;
  notes?: string;
  preferredContact: 'whatsapp' | 'email' | 'call';
}

export interface IndustrySolution {
  title: string;
  description: string;
  icon: string;
  recommendedProducts: string[];
  benefits: string[];
  imageUrl: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  location: string;
  content: string;
  rating: number;
  productInstalled: string;
}
