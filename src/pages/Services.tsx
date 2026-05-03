import { motion } from 'motion/react';
import { SERVICES, PRODUCTS } from '../constants';
import * as Icons from 'lucide-react';

export default function Services() {
  return (
    <div className="pt-32 pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              Our Products & <span className="text-brand-accent">Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-black/50 max-w-2xl mx-auto leading-relaxed">
              We offer a wide array of tools and consulting services to ensure your business is fully equipped for the digital age.
            </p>
          </motion.div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">SOLUTIONS</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, index) => {
              const IconComponent = (Icons as any)[service.icon || 'Cloud'] || Icons.Cloud;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="glass-card flex items-center p-6 hover:border-brand-accent transition-colors"
                >
                  <div className="w-10 h-10 bg-brand-accent/10 text-brand-accent rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <IconComponent size={20} />
                  </div>
                  <h3 className="font-bold text-sm">{service.title}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-12 text-center">PRODUCTS</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product, index) => {
              const IconComponent = (Icons as any)[product.icon || 'Box'] || Icons.Box;
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="glass-card flex items-center p-6 hover:border-brand-accent transition-colors"
                >
                  <div className="w-10 h-10 bg-black/5 text-black/60 rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <IconComponent size={20} />
                  </div>
                  <h3 className="font-bold text-sm leading-tight">{product.title}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
