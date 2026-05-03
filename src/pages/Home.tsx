import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Server, Globe, Cpu, MapPin, Phone, Mail } from 'lucide-react';
import { REASONS_TO_CHOOSE } from '../constants';
import * as Icons from 'lucide-react';

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden technical-grid py-24 lg:py-40 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-sm font-bold mb-8 uppercase tracking-widest border border-brand-accent/20">
              Next-Gen Infrastructure
            </span>
            <h1 className="text-6xl md:text-8xl font-display font-medium tracking-tight mb-8 max-w-4xl mx-auto leading-[0.9]">
              Precision Cloud <br /> <span className="text-brand-accent">Engineering.</span>
            </h1>
            <p className="text-lg md:text-xl text-black/50 mb-12 max-w-2xl mx-auto leading-relaxed">
              We provide flexible, scalable solutions that adapt to client needs with comprehensive reporting, visualizations, and insights.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-black/80 transition-all shadow-xl shadow-black/10 flex items-center justify-center">
                Get Started <ArrowRight size={18} className="ml-2" />
              </button>
              <button className="w-full sm:w-auto bg-white border border-black/10 px-8 py-4 rounded-full text-sm font-bold hover:bg-black/5 transition-all flex items-center justify-center">
                Explore Solutions
              </button>
            </div>
          </motion.div>

          {/* Abstract Visual Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full h-full opacity-30">
            <div className="absolute top-0 right-1/4 w-64 h-64 bg-brand-accent/20 blur-[120px] rounded-full" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-brand-accent/10 blur-[150px] rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Uptime', value: '99.99%', icon: <Server size={20} /> },
              { label: 'Locations', value: '24+', icon: <Globe size={20} /> },
              { label: 'Efficiency', value: '85%', icon: <Cpu size={20} /> },
              { label: 'Security', value: 'Zero Trust', icon: <ChevronRight size={20} /> },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col space-y-2 border-l border-white/10 pl-6"
              >
                <div className="flex items-center text-brand-accent mb-1">
                  {stat.icon}
                  <span className="text-xs font-bold uppercase tracking-widest ml-2">{stat.label}</span>
                </div>
                <span className="text-3xl md:text-5xl font-display font-medium">{stat.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-24 lg:py-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Why <span className="text-brand-accent">Choose Us?</span>
            </h2>
            <p className="text-black/50 mb-10 leading-relaxed">
              We provide tools and expertise to make your cloud journey smooth and fully optimized.
            </p>
            <div className="space-y-4">
              {['24/7 Support', 'Sustainable Growth', 'Seamless Collaboration'].map((item) => (
                <div key={item} className="flex items-center space-x-3 text-sm font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
            {REASONS_TO_CHOOSE.map((reason, index) => {
              const IconComponent = (Icons as any)[reason.icon] || Icons.Cloud;
              return (
                <motion.div
                  key={reason.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-8 group hover:border-brand-accent transition-colors"
                >
                  <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                  <p className="text-black/60 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 lg:py-40 bg-brand-accent text-white rounded-[2rem] mx-4 mb-24 overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-7xl font-display font-bold leading-[0.9] mb-12 tracking-tight">
            Ready to <span className="italic opacity-80">modernize</span> <br /> your stack?
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-xl mx-auto leading-relaxed">
            Join the elite teams building the future on StratByte's managed infrastructure.
          </p>
          <div className="flex justify-center mb-16">
            <button className="bg-white text-brand-accent px-10 py-5 rounded-full text-lg font-bold hover:scale-105 transition-transform shadow-2xl">
              Book a Consultation
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left relative z-10 border-t border-white/10 pt-16">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
              <MapPin className="mb-4 text-brand-accent" size={24} />
              <h4 className="font-bold mb-2 text-white">Visit Us</h4>
              <p className="text-sm text-white/70 leading-relaxed">Cooperative House Plot 692<br />Cha Cha Cha Road<br />Lusaka, Zambia</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
              <Phone className="mb-4 text-brand-accent" size={24} />
              <h4 className="font-bold mb-2 text-white">Call Us</h4>
              <p className="text-sm text-white/70 leading-relaxed"><br />+260 97 3602780<br /><span className="opacity-0">.</span></p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
              <Mail className="mb-4 text-brand-accent" size={24} />
              <h4 className="font-bold mb-2 text-white">Email Us</h4>
              <p className="text-sm text-white/70 leading-relaxed"><br /><a href="mailto:info@stratbyte.cloud" className="hover:text-white transition-colors">info@stratbyte.cloud</a><br /><span className="opacity-0">.</span></p>
            </div>
          </div>
        </div>
        {/* Decorative background circle */}
        <div className="absolute -bottom-1/2 -right-1/4 w-[600px] h-[600px] bg-black/10 rounded-full" />
        <div className="absolute top-1/4 -left-1/4 w-[400px] h-[400px] bg-white/5 rounded-full" />
      </section>
    </div>
  );
}
