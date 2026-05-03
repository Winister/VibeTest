import { Service, Reason, Product } from './types';

export const SERVICES: Service[] = [
  { id: 'app-development', title: 'App Development', icon: 'Smartphone' },
  { id: 'blockchain', title: 'Blockchain', icon: 'Link' },
  { id: 'cloud-vpn', title: 'Cloud VPN', icon: 'Shield' },
  { id: 'data-analytics', title: 'Data Analytics', icon: 'BarChart' },
  { id: 'digital-marketing', title: 'Digital Marketing', icon: 'Megaphone' },
  { id: 'e-commerce', title: 'E-commerce', icon: 'ShoppingCart' },
  { id: 'it-consulting', title: 'IT-Consulting', icon: 'Users' },
  { id: 'video-streaming', title: 'Video Streaming', icon: 'Video' },
  { id: 'virtual-machines', title: 'Virtual Machines', icon: 'Server' },
  { id: 'vps-hosting', title: 'VPS Hosting', icon: 'HardDrive' },
  { id: 'web-development', title: 'Web Development', icon: 'Code' },
  { id: 'website-hosting', title: 'Website Hosting', icon: 'Globe' },
];

export const PRODUCTS: Product[] = [
  { id: 'data-backups', title: 'Data Backups', icon: 'DatabaseBackup' },
  { id: 'compute', title: 'Compute', icon: 'Cpu' },
  { id: 'developer-tools', title: 'Developer Tools', icon: 'Terminal' },
  { id: 'managed-databases', title: 'Managed Databases', icon: 'Database' },
  { id: 'networking', title: 'Networking', icon: 'Network' },
  { id: 'storage', title: 'Storage', icon: 'HardDrive' },
  { id: 'electronic-components', title: 'Electronic Components & Supplies', icon: 'Cpu' },
  { id: 'stationery', title: 'Stationery Supplies', icon: 'PenTool' },
  { id: 'tools-machinery', title: 'Tools & General Machinery', icon: 'Wrench' },
  { id: 'printing-av', title: 'Printing, Photographic, Audio, Visual Equipment & Supplies', icon: 'Printer' },
  { id: 'distribution-hvac', title: 'Distribution, Conditioning Systems, Equipment & Components', icon: 'Fan' },
];

export const REASONS_TO_CHOOSE: Reason[] = [
  {
    id: 'support',
    title: '24/7 DEDICATED SUPPORT',
    description: 'Simple tools and predictable pricing with the best support suitable for growing businesses, our solutions and services are designed to serve the unique needs of businesses of different sizes.',
    icon: 'Headset'
  },
  {
    id: 'predictable-cost',
    title: 'PREDICTABLE COST FOR SUSTAINABLE GROWTH',
    description: 'Accurately anticipate and budget for your costs to avoid frequent or significant fluctuations. Predictable costs are essential for effective financial planning and budgeting.',
    icon: 'TrendingUp'
  },
  {
    id: 'collaboration',
    title: 'SEAMLESS COLLABORATION',
    description: 'Our cloud based tools and applications facilitate for seamless collaboration across teams and locations, boosting overall productivity.',
    icon: 'Users'
  },
  {
    id: 'innovation',
    title: 'INNOVATION UNBOUND',
    description: 'We recognize that one size does not fit all. That is why StratByte Cloud Solutions is modular in nature. Get only what you need and leave out what you don\'t.',
    icon: 'Lightbulb'
  }
];
