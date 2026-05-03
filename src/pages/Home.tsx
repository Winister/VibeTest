import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Server, Globe, Cpu, MapPin, Phone, Mail } from 'lucide-react';
import { REASONS_TO_CHOOSE } from '../constants';
import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section - Matching Cover Page aesthetic */}
      <section className="relative min-h-[80vh] flex items-center bg-white overflow-hidden pt-16 lg:pt-0">
        {/* Right side background curve */}
        <div className="absolute right-0 top-0 w-full lg:w-2/3 h-full hidden lg:block rounded-l-[200px] overflow-hidden">
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="Office Background" />
          <div className="absolute inset-0 bg-brand-primary/20 mix-blend-multiply"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row py-8 lg:py-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-brand-primary text-white p-8 sm:p-12 lg:p-16 xl:p-20 lg:rounded-r-[120px] rounded-[2.5rem] w-[100%] lg:w-[70%] shadow-2xl xl:shadow-[0_20px_60px_rgba(52,38,122,0.4)] lg:-ml-12 border-l-8 border-brand-accent relative flex flex-col justify-center min-h-[400px]"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold tracking-tight mb-8 leading-tight text-white">
              <span className="text-brand-accent">StratByte</span><br className="hidden sm:block" /> Solutions
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-xl pr-4">
              We provide flexible, scalable IT and cloud solutions that adapt to your business needs, delivering comprehensive insights to help you reach your goals.
            </p>

            <div className="border-l-4 border-brand-accent pl-6 mb-12">
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold italic leading-relaxed text-white">
                Trust,<br />
                Collaboration,<br />
                Accountability,<br />
                Client Success
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-4">
              <Link to="/services" className="bg-brand-accent text-white px-8 py-5 sm:px-10 rounded-full text-base sm:text-lg font-bold hover:bg-brand-accent/90 hover:scale-105 transition-all shadow-xl shadow-brand-accent/30 flex items-center justify-center w-full sm:w-auto">
                Get Started <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link to="/about" className="bg-white/10 text-white border border-white/20 px-8 py-5 sm:px-10 rounded-full text-base sm:text-lg font-bold hover:bg-white/20 hover:scale-105 transition-all flex items-center justify-center w-full sm:w-auto">
                About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section with Brand Color */}
      <section className="bg-brand-primary text-white py-20 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
      <section id="why-choose-us" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-4">
            <span className="text-brand-primary font-bold text-xl uppercase tracking-widest block mb-2">Why</span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-brand-accent uppercase mb-8 leading-tight">
              Choose Us?
            </h2>
            <div className="w-16 h-1 bg-brand-accent mb-8" />
            <p className="text-gray-600 mb-10 leading-relaxed text-lg">
              We provide tools and expertise to make your cloud journey smooth and fully optimized. Predictable pricing with the best support suitable for growing businesses.
            </p>
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
                  <div className="w-16 h-16 bg-brand-accent rounded-full text-white flex items-center justify-center mb-6 ring-8 ring-brand-accent/10 group-hover:scale-110 transition-transform">
                    <IconComponent size={28} />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-brand-accent uppercase">{reason.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
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
            <Link to="/contact" className="bg-white text-brand-accent px-10 py-5 rounded-full text-lg font-bold hover:scale-105 transition-transform shadow-2xl inline-block">
              Book a Consultation
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left relative z-10 border-t border-white/10 pt-16">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
              <div className="w-12 h-12 bg-brand-primary rounded-full text-white flex items-center justify-center mb-4 shadow-lg shrink-0">
                 <MapPin size={24} />
              </div>
              <h4 className="font-bold mb-2 text-white">Visit Us</h4>
              <p className="text-sm text-white/70 leading-relaxed">Cooperative House Plot 692<br />Cha Cha Cha Road<br />Lusaka, Zambia</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
              <div className="w-12 h-12 bg-brand-primary rounded-full text-white flex items-center justify-center mb-4 shadow-lg shrink-0">
                 <Phone size={24} />
              </div>
              <h4 className="font-bold mb-2 text-white">Call Us</h4>
              <p className="text-sm text-white/70 leading-relaxed"><br />+260 768 407 072<br /><span className="opacity-0">.</span></p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
              <div className="w-12 h-12 bg-brand-primary rounded-full text-white flex items-center justify-center mb-4 shadow-lg shrink-0">
                 <Mail size={24} />
              </div>
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
