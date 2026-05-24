import { motion } from 'motion/react';
import { ShieldCheck, Target, Lightbulb, Users, Award, Zap, ArrowRight, Server, Check } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  useEffect(() => {
    document.title = "Our DNA | StratByte Solutions";
  }, []);

  return (
    <div className="pt-24 pb-40 overflow-hidden bg-white">
      {/* Top Banner Accent */}
      <div className="w-full h-1.5 bg-gradient-to-r from-brand-primary via-brand-accent to-blue-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Dynamic Abstract Background Glows */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

        {/* Hero Concept Section */}
        <div className="py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7"
            >
              {/* Specialized Tagline Badge */}
              <div className="inline-flex items-center space-x-2 bg-brand-primary/5 border border-brand-primary/10 rounded-full px-4 py-1.5 mb-6 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-ping" />
                <span className="text-xs font-black text-brand-primary uppercase tracking-widest leading-none">Who We Are</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight mb-8 leading-[1.0] uppercase text-gray-900">
                Pioneering <span className="text-brand-primary">Cloud Core</span><br />
                Across <span className="text-brand-accent">SADC Region</span>
              </h1>

              <div className="h-[2px] w-20 bg-brand-accent mb-8" />

              <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed mb-8 max-w-2xl">
                StratByte Cloud Solutions is an elite, Zambian-owned technology firm specializing in designing and implementing flexible, hyperscale cloud environments. We bridge the gap between complex infrastructure and outstanding operational performance.
              </p>

              {/* Unique stats bento element inside about */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-gray-50/50 border border-gray-100 p-6 rounded-[2rem]">
                <div>
                  <h4 className="text-2xl font-display font-black text-brand-primary">100%</h4>
                  <p className="text-xs font-bold text-gray-550 uppercase tracking-tight mt-1">Zambian Owned</p>
                </div>
                <div>
                  <h4 className="text-2xl font-display font-black text-brand-accent">99.99%</h4>
                  <p className="text-xs font-bold text-gray-550 uppercase tracking-tight mt-1">Uptime Standard</p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <h4 className="text-2xl font-display font-black text-blue-600">Enterprise</h4>
                  <p className="text-xs font-bold text-gray-550 uppercase tracking-tight mt-1">Grade Service</p>
                </div>
              </div>
            </motion.div>

            {/* Visual Geometric Wireframe representation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="bg-gray-50 border border-gray-150 rounded-[2.5rem] p-8 lg:p-10 shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, #0099B9 1px, transparent 0)', backgroundSize: '20px 20px' }} />
                
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400">STRUCTURE PROTOCOL</span>
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-primary" />
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="bg-white p-5 rounded-2xl border border-gray-100 flex items-start space-x-4">
                    <div className="p-3 bg-brand-primary/10 rounded-xl text-brand-primary">
                      <Users size={22} className="animate-pulse" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-gray-800 uppercase tracking-tight mb-1">Customer Obsessed Coaching</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">Guiding regional giants and nimble startups with tailored expert consulting blueprints.</p>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-gray-100 flex items-start space-x-4">
                    <div className="p-3 bg-brand-accent/10 rounded-xl text-brand-accent">
                      <Award size={22} />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-gray-800 uppercase tracking-tight mb-1">Certified Cloud Engineers</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">Direct support from certified virtualization and global Kubernetes microservices pioneers.</p>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-gray-100 flex items-start space-x-4">
                    <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
                      <Zap size={22} />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-gray-800 uppercase tracking-tight mb-1">Resilient Core Backbone</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">Ensuring lightning-fast network latency routing for all prominent tech hubs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Philosophy Callout Card */}
        <div className="my-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-10 lg:p-14 text-center max-w-5xl mx-auto rounded-[3rem] border border-gray-150 overflow-hidden relative shadow-sm"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-accent/5 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-primary/5 rounded-full blur-2xl pointer-events-none" />
            
            <Lightbulb size={40} className="mx-auto text-brand-accent mb-6 animate-pulse" />
            
            <h2 className="text-gray-950 text-2xl md:text-3.5xl font-display font-black uppercase tracking-tight leading-tight max-w-3xl mx-auto mb-6">
              "We embrace innovation as a core principle, constantly adapting to technical complexities."
            </h2>
            
            <p className="text-sm md:text-base font-medium leading-relaxed max-w-2xl mx-auto text-gray-550">
              By investing systematically in advanced orchestration tools and fostering a culture of rigorous continuous learning, we empower our core engineers to solve our clients' most severe IT headaches before they ever impact live traffic.
            </p>
          </motion.div>
        </div>

        {/* Dynamic Bento Block Section (Mission, Vision, Core Values) */}
        <div className="py-20 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-accent font-bold text-lg uppercase tracking-widest block mb-2">Our Foundation</span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-brand-primary uppercase tracking-tight">
              Mission, Vision & <span className="text-brand-accent">Values</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Box 1: Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 bg-white border border-gray-150 rounded-[2.5rem] p-8 lg:p-10 hover:border-brand-primary/35 transition-all shadow-sm hover:shadow-lg relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-2xl" />
              <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl text-brand-primary flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Target size={26} />
              </div>
              
              <h3 className="text-2xl font-display font-black text-brand-primary uppercase tracking-tight mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                To build unshakeable, long-term partnerships with clients by providing tailored, masterfully architected consulting blueprints and elite tier support. We enable modern teams to transform legacy operations into ultra-efficient cloud infrastructures.
              </p>

              <div className="mt-8 flex items-center justify-between pointer-events-none">
                <span className="text-[10px] font-mono text-gray-400 font-bold uppercase tracking-wider">COLLABORATIVE ARCHITECTURE</span>
                <span className="text-brand-primary font-bold">01</span>
              </div>
            </motion.div>

            {/* Box 2: Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-6 bg-white border border-gray-150 rounded-[2.5rem] p-8 lg:p-10 hover:border-brand-accent/35 transition-all shadow-sm hover:shadow-lg relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-2xl" />
              <div className="w-14 h-14 bg-brand-accent/10 rounded-2xl text-brand-accent flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Lightbulb size={26} />
              </div>
              
              <h3 className="text-2xl font-display font-black text-brand-primary uppercase tracking-tight mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                To stand as the absolute beacon of trusted technical excellence and managed infrastructure in Southern Africa. We aspire to ignite local tech ecosystems through cutting-edge design, rigorous standards, and bulletproof operational reliability.
              </p>

              <div className="mt-8 flex items-center justify-between pointer-events-none">
                <span className="text-[10px] font-mono text-gray-400 font-bold uppercase tracking-wider">REGIONAL LEADERSHIP</span>
                <span className="text-brand-accent font-bold">02</span>
              </div>
            </motion.div>

            {/* Box 3: Core Values Wide Banner */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-12 bg-gradient-to-br from-brand-primary to-brand-accent rounded-[3rem] p-8 lg:p-12 text-white relative overflow-hidden shadow-md group"
            >
              {/* Abs grid bg */}
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, white 1px, transparent 0)', backgroundSize: '16px 16px' }} />
              
              <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                    <ShieldCheck size={24} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-display font-black tracking-tight uppercase leading-none mb-4">Values We Live By</h3>
                  <p className="text-white/80 text-sm leading-relaxed max-w-sm">
                    Our operating values dictate how we code, how we coordinate, and how we measure user-facing success daily. There are no safe shortcuts on the path to master craft.
                  </p>
                </div>

                <div className="lg:col-span-1" />

                <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Trust', desc: 'Sustained through honest billing and verified cluster performance reports.' },
                    { title: 'Collaboration', desc: 'Solving structural IT tasks elbow-to-elbow with client engineering teams.' },
                    { title: 'Accountability', desc: 'No shifting blame—we take total responsibility for your production state.' },
                    { title: 'Client Success', desc: 'We only evaluate our accomplishments by the scale of your achievements.' }
                  ].map((val) => (
                    <div key={val.title} className="bg-white/10 border border-white/10 p-5 rounded-2xl hover:bg-white/15 transition-all">
                      <div className="flex items-center space-x-2.5 mb-2">
                        <Check size={16} className="text-white bg-white/15 p-0.5 rounded-full shrink-0" />
                        <span className="font-display font-black tracking-tight text-base uppercase">{val.title}</span>
                      </div>
                      <p className="text-xs text-white/80 leading-relaxed font-medium">{val.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Minimal High-End CTA inside About */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 bg-gray-50 border border-gray-150 p-6 rounded-[2.5rem] w-full max-w-2xl mx-auto shadow-sm">
            <span className="text-sm font-bold text-gray-700">Want to see our active offerings and live tools?</span>
            <Link to="/services" className="bg-brand-primary text-white text-xs font-black uppercase tracking-widest px-6 py-3 rounded-full hover:bg-brand-primary/95 hover:-translate-y-0.5 transition-all shadow-md">
              Browse Solutions
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
