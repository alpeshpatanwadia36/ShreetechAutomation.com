import { BranchLocation, IndustrySolution, TestimonialItem } from '../types';

export const COMPANY_DETAILS = {
  name: 'Shree Tech Automation',
  registeredName: 'Shree Tech Automation',
  tagline: 'Your Trusted Partner in Industrial Automation, Security & Hygiene Solutions',
  proprietor: 'Mr. Janak Thakar',
  establishedYear: 2012,
  primaryPhone: '+91 80458 01731',
  secondaryPhone: '+91-77080-84160',
  mobilePhone: '+91-77080-84160',
  primaryEmail: 'info@shreetechautomation.com',
  salesEmail: 'sales@shreetechautomation.com',
  whatsappNumber: '917708084160',
  whatsappUrl: 'https://wa.me/917708084160?text=Hello%20Shree%20Tech%20Automation,%20I%20would%20like%20to%20inquire%20about%20your%20products.',
  googleBusinessShareUrl: 'https://share.google/ayjxfLQ475hEZ6NGn',
  gstNumber: '24AEAPT4592C1ZL',
  workingHours: 'Monday - Saturday: 9:00 AM - 7:00 PM (IST)',
  officialDomains: ['shreetechautomation.in', 'shreetechautomation.com'],
  stats: [
    { label: 'Years of Engineering', value: '12+' },
    { label: 'Automation Projects Delivered', value: '500+' },
    { label: 'Industrial Products Range', value: '45+' },
    { label: 'Client Satisfaction Index', value: '99.4%' },
  ],
};

export const BRANCH_LOCATIONS: BranchLocation[] = [
  {
    city: 'Vadodara',
    state: 'Gujarat',
    type: 'Registered Head Office & Manufacturing Unit',
    proprietor: 'Mr. Janak Thakar',
    address: '4-A, Nirman Deep Complex, Opposite My Apple School, Near Avdhoot Phatak, Manjalpur, Vadodara - 390011, Gujarat, India',
    landmark: 'Opposite My Apple School, Near Avdhoot Phatak (Crossing)',
    phone: '+91 80458 01731',
    phoneAlt: '+91-77080-84160',
    email: 'info@shreetechautomation.com',
    googleShareUrl: 'https://share.google/ayjxfLQ475hEZ6NGn',
    gstNumber: '24AEAPT4592C1ZL',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.4419999999997!2d73.1895!3d22.2619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5f2c42173f3%3A0x8cfc01e3b6e7925e!2sManjalpur%2C%20Vadodara%2C%20Gujarat%20390011!5e0!3m2!1sen!2sin!4v1709600000000!5m2!1sen!2sin',
    coordinates: {
      lat: 22.2619,
      lng: 73.1895,
    },
  },
];

export const INDUSTRIES_SERVED: IndustrySolution[] = [
  {
    title: 'Pharmaceuticals & Cleanrooms',
    description: 'Ensuring strict compliance with cGMP, USFDA, and ISO 14644 standards with sterile airlock interlocks and hygiene barriers.',
    icon: 'Pill',
    recommendedProducts: [
      'Cleanroom Microprocessor Door Interlock System',
      'Flameproof Door Interlock System',
      'Stainless Steel Air Curtains',
      'Electronic Glue Pad Insect Catchers',
    ],
    benefits: [
      'Zero cross-contamination between pressure cascades',
      'Audit-ready electronic interlocking logs',
      'Hermetic sealing against particulate matter',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Food, Dairy & Beverage Processing',
    description: 'Protecting food preparation and packaging corridors from airborne insects, temperature leaks, and dust infiltration.',
    icon: 'Utensils',
    recommendedProducts: [
      'High Speed PVC Roll Up Doors',
      'Amber Anti-Insect PVC Strip Curtains',
      'HACCP Shatterproof Insect Killers',
      'High Velocity Commercial Air Curtains',
    ],
    benefits: [
      'FSSAI & HACCP audit compliance',
      'Insect-free raw material and packaging airlocks',
      'Temperature loss reduction up to 45%',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Cold Storage & Warehousing',
    description: 'Minimizing thermal bridging and refrigeration compressor workload while enabling fast forklift traffic.',
    icon: 'Snowflake',
    recommendedProducts: [
      'Polar Grade Low-Temp PVC Strip Curtains (-40°C)',
      'Rapid High-Speed Insulated Roll Up Doors',
      'Automatic Sliding Gate Operators',
      'Air Curtains with Heated & Non-Heated options',
    ],
    benefits: [
      'Drastic reduction in energy and power bills',
      'Prevents ice condensation on door frames',
      'Forklift-safe impact-resistant flexible curtains',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Chemical & Hazardous Plants',
    description: 'Flameproof automation and precision fluid regulation in combustible gas and chemical synthesis atmospheres.',
    icon: 'FlaskConical',
    recommendedProducts: [
      'Flameproof Zone 1 / Class 1 Interlocks',
      'Pneumatic Control Valves & Actuators',
      'Motorized Heavy Butterfly Dampers',
      'ANPR Gate Automation for Tankers',
    ],
    benefits: [
      'CIMFR / PESO certified spark-safe protection',
      'Corrosion resistant alloy LM6 and SS316 finishes',
      'Fail-safe spring return emergency shutoff',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Corporate HQs & Tech Parks',
    description: 'Sleek architectural pedestrian speed gates, optical biometric verification, and touchless vehicle ANPR access.',
    icon: 'Building2',
    recommendedProducts: [
      'Automatic Flap Barrier Speed Gates',
      'AISI 304 Tripod Turnstiles',
      'ANPR Parking Barrier Automation',
      'Automatic Sensor Shoe Shining Machines',
    ],
    benefits: [
      'High pedestrian throughput (up to 45 persons/min)',
      'Anti-tailgating optical beam verification',
      'Seamless integration with HR payroll & visitor management',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Textile, Paper & Heavy Engineering',
    description: 'Robust isolation of dust, lint, and flying fibers while regulating heavy vehicle and trolley movement across bays.',
    icon: 'Factory',
    recommendedProducts: [
      'Ribbed Heavy-Duty Strip Curtains',
      'High-Speed PVC Fabric Doors',
      'Heavy Duty Sliding Gate Motors',
      'Butterfly Dampers for Exhaust Ducts',
    ],
    benefits: [
      'Contains ambient noise and spinning mill dust',
      'Heavy industrial continuous duty endurance',
      'Reduced downtime with rapid self-repairing tracks',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: 'K. Rajasekaran',
    role: 'Head of Engineering & Projects',
    company: 'Leading Pharma Sterile Formulations',
    location: 'Ahmedabad, Gujarat',
    content: 'Shree Tech Automation installed 4-door cleanroom interlock systems and rapid PVC roll-up doors in our Class B manufacturing suite. The interlocking logic is fail-safe, and their team provided outstanding installation and validation support.',
    rating: 5,
    productInstalled: 'Cleanroom Door Interlock & PVC Rapid Doors',
  },
  {
    name: 'Manish Patel',
    role: 'General Manager - Operations',
    company: 'Apex Logistics & Cold Chain Parks',
    location: 'Vadodara, Gujarat',
    content: 'We fitted their Polar grade PVC strip curtains and high-speed automatic doors across 12 deep-freezer bays. We observed an immediate 35% reduction in compressor load and zero frosting. Shree Tech is our preferred automation vendor.',
    rating: 5,
    productInstalled: 'Polar Strip Curtains & High-Speed Doors',
  },
  {
    name: 'Dr. Anita Sridhar',
    role: 'Quality Assurance Director',
    company: 'BioHealth Laboratories',
    location: 'Bengaluru, Karnataka',
    content: 'Their SS304 air curtains and electronic glue pad fly catchers made passing our USFDA and WHO-GMP hygiene audit seamless. Sturdy build, whisper-quiet operation, and prompt dispatch.',
    rating: 5,
    productInstalled: 'SS 304 Air Curtains & Insect Traps',
  },
];

export const FAQS = [
  {
    question: 'How do I place an order or request a custom quotation?',
    answer: 'You can use the interactive RFQ calculator on this website, send us an email at info@shreetechautomation.com, or directly message our technical team via WhatsApp at +91-77080-84160. We typically provide formal quotation and dimensional drawings within 2 to 4 business hours.',
  },
  {
    question: 'Do you provide Pan-India delivery and on-site installation?',
    answer: 'Yes. Shree Tech Automation manufactures and supplies across all Indian states and overseas. Our certified technicians provide on-site installation, wiring commissioning, and user training for door interlocks, rapid doors, turnstiles, and gate motors.',
  },
  {
    question: 'Can your cleanroom door interlocks be customized for flameproof areas?',
    answer: 'Absolutely. We specialize in PESO/CIMFR certified flameproof interlock systems rated for Gas Groups IIA, IIB, and IIC in Zone 1 & 2 hazardous environments like chemical plants and solvent airlocks.',
  },
  {
    question: 'What is the standard warranty and after-sales service policy?',
    answer: 'All our products carry a comprehensive 12-month manufacturer warranty covering motors, controllers, and mechanical assemblies. We maintain a ready inventory of spare parts and provide both AMC (Annual Maintenance Contracts) and on-call service.',
  },
  {
    question: 'How can I deploy this modern application onto my WordPress hosting?',
    answer: 'This application is engineered as a lightweight, lightning-fast static single-page application with relative assets. You can deploy it directly onto any WordPress cPanel / Apache / Nginx server by uploading the build files to your public_html folder or embedding it into an existing WordPress page. Click the "WordPress Deployment Guide" in the top bar or footer for step-by-step instructions and to download the deployment package.',
  },
];
