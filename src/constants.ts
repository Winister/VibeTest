import { Service, Reason, Product } from './types';

export const SERVICES: Service[] = [
  { id: 'app-development', title: 'App Development', icon: 'Smartphone', description: 'Custom mobile & web apps', longDescription: 'We build highly scalable, secure, and user-friendly mobile and web applications tailored to your exact business needs and customer expectations.' },
  { id: 'blockchain', title: 'Blockchain', icon: 'Link', description: 'Blockchain integration & smart contracts', longDescription: 'Leverage the power of decentralized technologies and secure ledgers. Transform your business processes with custom smart contracts and DApps.' },
  { id: 'cloud-vpn', title: 'Cloud VPN', icon: 'Shield', description: 'Secure remote networking', longDescription: 'Ensure secure and private connections between your remote workforce and private networks with our robust Cloud VPN solution.' },
  { id: 'data-analytics', title: 'Data Analytics', icon: 'BarChart', description: 'Business intelligence & reporting', longDescription: 'Make data-driven decisions confidently. Let us handle your data processing, visualization, and actionable intelligence workflows.' },
  { id: 'digital-marketing', title: 'Digital Marketing', icon: 'Megaphone', description: 'SEO & campaign management', longDescription: 'Elevate your online presence through data-backed marketing campaigns, search engine optimization, and robust social media strategies.' },
  { id: 'e-commerce', title: 'E-commerce', icon: 'ShoppingCart', description: 'Online storefront creation', longDescription: 'A complete end-to-end e-commerce platform solution that maximizes your sales with integrated payments, analytics, and responsive design.' },
  { id: 'it-consulting', title: 'IT Consulting', icon: 'Users', description: 'Professional system strategies', longDescription: 'Get expert advice to navigate complex IT landscapes. We align your technology investments with your immediate and long-term business goals.' },
  { id: 'video-streaming', title: 'Video Streaming', icon: 'Video', description: 'Live & VOD services', longDescription: 'Deliver high-quality, buffer-free video content to your audience anywhere in the world using our optimized streaming infrastructure.' },
  { id: 'virtual-machines', title: 'Virtual Machines', icon: 'Server', description: 'Scalable cloud compute', longDescription: 'Deploy scalable and secure virtual machines on demand. Tailor CPU, memory, and storage instantly to match your dynamic workloads.' },
  { id: 'vps-hosting', title: 'VPS Hosting', icon: 'HardDrive', description: 'Private server environments', longDescription: 'Experience superior performance and control with Virtual Private Servers, boasting guaranteed resources and root access.' },
  { id: 'web-development', title: 'Web Development', icon: 'Code', description: 'Modern frontend websites', longDescription: 'Engage your customers with lightning-fast, visually stunning, and highly responsive web platforms built on bleeding-edge technologies.' },
  { id: 'website-hosting', title: 'Website Hosting', icon: 'Globe', description: 'Reliable shared hosting', longDescription: 'Hassle-free, highly available hosting for your websites with unmetered bandwidth, automated backups, and an easy-to-use control panel.' },
];

export const PRODUCTS: Product[] = [
  { id: 'data-backups', title: 'Data Backups', icon: 'DatabaseBackup', description: 'Automated remote backups', longDescription: 'Secure your critical data against loss and ransomware with our robust, automated, encrypted off-site backup solutions.' },
  { id: 'compute', title: 'Compute', icon: 'Cpu', description: 'High-performance clusters', longDescription: 'Access unparalleled processing power for your most demanding workloads, including AI training, data rendering, and intense computations.' },
  { id: 'developer-tools', title: 'Developer Tools', icon: 'Terminal', description: 'CI/CD & repository access', longDescription: 'Supercharge your engineering teams with unified tools for source control, continuous integration, and rapid automated deployments.' },
  { id: 'managed-databases', title: 'Managed Databases', icon: 'Database', description: 'PostgreSQL, MySQL, & NoSQL', longDescription: 'Leave the maintenance, scaling, and high-availability configuration to us. Deploy ready-to-use production databases instantly.' },
  { id: 'networking', title: 'Networking', icon: 'Network', description: 'Load balancers & VPCs', longDescription: 'Architect resilient networks. Utilize our cloud load balancing, private IPs, and firewalls to secure traffic seamlessly.' },
  { id: 'storage', title: 'Storage', icon: 'HardDrive', description: 'Object & block storage', longDescription: 'Store infinite amounts of data effectively with S3-compatible object storage and high-IOPS NVMe block storage volumes.' },
  { id: 'electronic-components', title: 'Electronic Components & Supplies', icon: 'Cpu', description: 'Hardware peripherals', longDescription: 'Source high-quality electronic components, microcontrollers, and computer peripherals directly through our verified supply chains.' },
  { id: 'stationery', title: 'Stationery Supplies', icon: 'PenTool', description: 'Office essentials', longDescription: 'From high-quality printing paper to executive writing tools, get your regular office stationery restocked with zero hassle.' },
  { id: 'tools-machinery', title: 'Tools & General Machinery', icon: 'Wrench', description: 'Industrial equipment', longDescription: 'Equip your workshop or manufacturing floor with precision tools, machinery diagnostics hardware, and automation setups.' },
  { id: 'printing-av', title: 'Printing, Photographic, Audio, Visual Equipment & Supplies', icon: 'Printer', description: 'Studio & office AV tech', longDescription: 'Deploy professional-grade presentation screens, 4K camera equipment, and high-fidelity enterprise audio conferencing suites.' },
  { id: 'distribution-hvac', title: 'Distribution, Conditioning Systems, Equipment & Components', icon: 'Fan', description: 'Server room cooling', longDescription: 'Keep your on-premise hardware operating at optimal temperatures with commercial HVAC systems and smart cooling tech.' },
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
