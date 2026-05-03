import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { Service } from '../types';

export function ServiceCard({ service, index }: { service: Service, index: number }) {
  const IconComponent = (Icons as any)[service.icon] || Icons.Cloud;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass-card p-8 group hover:border-brand-accent transition-colors"
      id={`service-${service.id}`}
    >
      <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors">
        <IconComponent size={24} />
      </div>
      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
      <p className="text-black/60 text-sm leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
}
