import { Service, Reason, Product } from './types';

export const SERVICES: Service[] = [
  { 
    id: 'web-development', 
    title: 'Website Development', 
    icon: 'Code', 
    description: 'High-speed, modern websites & portals', 
    longDescription: 'Our hallmark service. We design and develop state-of-the-art, lightning-fast corporate websites, portfolios, and web portals that convert visitors into active customers. Built with next-generation responsiveness and strict SEO excellence.' 
  },
  { 
    id: 'app-development', 
    title: 'App Development', 
    icon: 'Smartphone', 
    description: 'Bespoke mobile & hybrid applications', 
    longDescription: 'We build enterprise-grade, highly scalable mobile and web applications tailored specifically for Android, iOS, and modern web environments. From payment integration to real-time sync systems, we program it with ultimate precision.' 
  },
  { 
    id: 'it-consulting', 
    title: 'IT Consultancy', 
    icon: 'Users', 
    description: 'Strategic systems & engineering guides', 
    longDescription: 'Our certified consulting engineers help you navigate complex technical challenges, restructure outdated operating networks, architect private setups, and map corporate hardware investments with bulletproof efficiency.' 
  },
  { 
    id: 'website-hosting', 
    title: 'Website Hosting', 
    icon: 'Globe', 
    description: 'Ultra-fast SSD hosting from K50/mo', 
    longDescription: 'Get reliable, fast, and secure local SSD website hosting. Includes automatic backup cycles, 99.9% target uptime, free staging setups, and real support from engineers right here in Lusaka.' 
  },
  { 
    id: 'vps-hosting', 
    title: 'VPS Hosting', 
    icon: 'HardDrive', 
    description: 'Private server environments', 
    longDescription: 'Experience superior performance and control with Virtual Private Servers, boasting guaranteed resources, full root access, and robust containerization.' 
  },
  { 
    id: 'cloud-vpn', 
    title: 'Cloud VPN', 
    icon: 'Shield', 
    description: 'Secure corporate networking', 
    longDescription: 'Ensure secure and private tunnels between your distributed workforce and private data blocks with our customized Cloud VPN infrastructure.' 
  },
  { 
    id: 'data-analytics', 
    title: 'Data Analytics', 
    icon: 'BarChart', 
    description: 'Business intelligence & reports', 
    longDescription: 'Turn system logs and user data into actionable sales insights. We build real-time interactive business intelligence dashboards and metrics tracking portals.' 
  },
  { 
    id: 'e-commerce', 
    title: 'E-commerce Platforms', 
    icon: 'ShoppingCart', 
    description: 'Secure, high-converting digital storefronts', 
    longDescription: 'A complete end-to-end e-commerce program that maximizes local sales with direct mobile money (MTN, Airtel, Zamtel) and credit card payment integration.' 
  },
  { 
    id: 'digital-marketing', 
    title: 'Digital Marketing', 
    icon: 'Megaphone', 
    description: 'Enterprise SEO & campaign management', 
    longDescription: 'Elevate your search rankings and maximize customer conversion with highly targeted, data-backed optimization and search campaigns.' 
  },
  { 
    id: 'virtual-machines', 
    title: 'Virtual Machines', 
    icon: 'Server', 
    description: 'Elastic virtual cloud compute', 
    longDescription: 'Provision flexible, robust virtual CPU and RAM clusters on demand to handle fluctuating workloads with automated load balancing.' 
  }
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
    id: 'expert-engineering',
    title: 'Elite Digital Craftsmanship',
    description: 'We code from scratch, optimizing all assets for rapid download. Our responsive layouts are customized for complete lead conversion and pristine aesthetics.',
    icon: 'Code'
  },
  {
    id: 'predictable-cost',
    title: 'Transparent Local Pricing',
    description: 'Get clear, detailed quotes with no hidden fees or surprising technical markups. Simple, predictable billing adapted for Zambia businesses.',
    icon: 'TrendingUp'
  },
  {
    id: 'strategic-partner',
    title: 'Empathetic IT Consultancy',
    description: 'We don\'t just deploy code—we analyze your exact business constraints, customer journey, and operations to align software with profits.',
    icon: 'Users'
  },
  {
    id: 'always-on-support',
    title: 'Committed Regional Desk',
    description: 'When you need to update content, scale data storage, or modify layouts, our local Lusaka team is always ready and reachable.',
    icon: 'Headset'
  }
];
