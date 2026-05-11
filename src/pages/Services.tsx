import { motion } from 'motion/react';
import { SERVICES, PRODUCTS } from '../constants';
import * as Icons from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  useEffect(() => {
    document.title = "Products & Solutions | StratByte Solutions";
  }, []);

  return (
    <div className="pt-32 pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-medium text-brand-primary italic mb-2 tracking-tight">
              Our Products &
            </h1>
            <h1 className="text-5xl md:text-7xl font-display font-black mb-8 tracking-tight text-brand-accent uppercase">
             SOLUTIONS
            </h1>
            <div className="w-24 h-1.5 bg-brand-accent mx-auto mb-10" />
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We offer a wide array of tools and consulting services to ensure your business is fully equipped for the digital age.
            </p>
          </motion.div>
        </div>

        <div className="mb-24 relative">
          <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-[100px] -z-10" />
          <h2 className="text-4xl font-display font-black mb-12 text-brand-accent uppercase tracking-wide">SOLUTIONS</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, index) => {
              const IconComponent = (Icons as any)[service.icon || 'Cloud'] || Icons.Cloud;
              return (
                <Link key={service.id} to={`/solution/service/${service.id}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="glass-card flex items-center p-6 hover:border-brand-accent hover:scale-105 transition-all bg-white/80 backdrop-blur-md cursor-pointer block h-full"
                  >
                    <div className="w-12 h-12 bg-white ring-4 ring-[#4A72F6]/20 text-[#4A72F6] rounded-xl flex items-center justify-center mr-4 shrink-0 shadow-sm border border-[#4A72F6]/10">
                      <IconComponent size={24} />
                    </div>
                    <h3 className="font-bold text-base text-brand-primary">{service.title}</h3>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px] -z-10" />
          <h2 className="text-4xl font-display font-black mb-12 text-brand-accent uppercase tracking-wide">PRODUCTS</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product, index) => {
              const IconComponent = (Icons as any)[product.icon || 'Box'] || Icons.Box;
              return (
                <Link key={product.id} to={`/solution/product/${product.id}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="glass-card flex items-center p-6 hover:border-brand-primary hover:scale-105 transition-all bg-white/80 backdrop-blur-md border-l-4 border-l-brand-primary cursor-pointer block h-full"
                  >
                    <div className="w-12 h-12 bg-brand-primary/10 text-brand-primary rounded-xl flex items-center justify-center mr-4 shrink-0">
                      <IconComponent size={24} />
                    </div>
                    <h3 className="font-bold text-base leading-tight text-brand-primary">{product.title}</h3>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
