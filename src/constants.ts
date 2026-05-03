import { BlogPost, Service, Reason, Product } from './types';

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

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'future-of-multicloud',
    title: 'The Future of Multi-Cloud Strategy',
    excerpt: 'Why businesses are moving away from single-provider lock-in and embracing hybrid architectures.',
    content: `
      # The Future of Multi-Cloud Strategy
      
      In the rapidly evolving landscape of cloud computing, the concept of a single-cloud strategy is becoming increasingly obsolete. Businesses today are recognizing the inherent risks of vendor lock-in and the immense benefits of a multi-cloud approach.
      
      ## Why Multi-Cloud?
      
      1. **Risk Mitigation:** Distributing workloads across different providers ensures that a regional outage in one doesn't bring your entire business to a halt.
      2. **Best-of-Breed Services:** Different cloud providers excel in different areas. AWS might be your choice for general-purpose computing, while Google Cloud leads in data analytics and AI.
      3. **Cost Optimization:** Leveraging competitive pricing between providers can significantly reduce your monthly infrastructure spend.
      
      ## The Challenges
      
      While the benefits are clear, managing multiple clouds introduces complexity in networking, security, and governance. This is where StratByte Cloud Solutions excels.
    `,
    author: 'Sarah Chen',
    date: '2024-03-15',
    category: 'Strategy',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'serverless-efficiency',
    title: 'Maximizing Efficiency with Serverless',
    excerpt: 'How StratByte helped a fintech startup reduce operational costs by 40% through AWS Lambda.',
    content: `
      # Maximizing Efficiency with Serverless
      
      Serverless computing has shifted the focus from managing servers to writing code. For startups, this agility is a game-changer.
      
      ## Case Study: SparkFin
      
      SparkFin, a rising fintech player, was struggling with unpredictable traffic spikes. Their traditional EC2-based architecture was either over-provisioned (wasting money) or under-provisioned (causing latency).
      
      By migrating their core transaction processing to AWS Lambda and DynamoDB, we achieved:
      - **40% Reduction** in monthly cloud bill.
      - **Zero** manual server maintenance.
      - **Auto-scaling** that handles millions of requests seamlessly.
    `,
    author: 'Michael Rossi',
    date: '2024-03-10',
    category: 'Case Study',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
  },
];
