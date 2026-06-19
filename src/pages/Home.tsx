import { motion } from 'motion/react';
import { ArrowRight, Code, Cpu, Activity, TrendingUp, MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = "Stratbyte | Minimal Enterprise Solutions";
  }, []);

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <div className="bg-white text-zinc-900 min-h-screen pt-24">
      
      {/* 1. HERO SECTION */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-6xl font-medium tracking-tight mb-8 text-zinc-900 leading-[1.1]">
                Engineering digital <br className="hidden sm:block" />
                <span className="text-zinc-400">transformation.</span>
              </h1>

              <p className="text-lg text-zinc-500 leading-relaxed max-w-2xl mb-12">
                We design, deploy, and maintain custom high-conversion web architectures and robust enterprise IT configurations for Zambia's most ambitious teams.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                <a 
                  href="#contact" 
                  className="bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-4 rounded-full text-sm font-medium transition-all flex items-center justify-center gap-2"
                >
                  Talk to an Expert
                  <ArrowRight size={16} />
                </a>
                <Link 
                  to="/services" 
                  className="bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-200 px-8 py-4 rounded-full text-sm font-medium transition-all flex items-center justify-center"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section id="services" className="py-24 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-4">
              Core capabilities
            </h2>
            <p className="text-zinc-500">
              We deploy highly targeted components to build responsive business solutions.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl border border-zinc-200">
              <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center mb-6">
                <Code size={20} className="text-zinc-900" />
              </div>
              <h3 className="text-lg font-medium text-zinc-900 mb-3">Software Dev</h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                Fast, modern, and fully scalable web applications written directly from the ground up.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl border border-zinc-200">
              <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center mb-6">
                <Cpu size={20} className="text-zinc-900" />
              </div>
              <h3 className="text-lg font-medium text-zinc-900 mb-3">IT Consultancy</h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                Optimizing infrastructure, server management, and technical workflows.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl border border-zinc-200">
              <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center mb-6">
                <Activity size={20} className="text-zinc-900" />
              </div>
              <h3 className="text-lg font-medium text-zinc-900 mb-3">Fleet Tech</h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                Advanced OBD2 scanning, software updates, and custom automotive tech integrations.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl border border-zinc-200">
              <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center mb-6">
                <TrendingUp size={20} className="text-zinc-900" />
              </div>
              <h3 className="text-lg font-medium text-zinc-900 mb-3">Growth</h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                Direct customer acquisition funnels mapped to boost business profit margins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-6">
                Bridging strategy with execution
              </h2>
              <p className="text-zinc-500 leading-relaxed mb-6">
                At Stratbyte, we don't believe in generic templates. We understand that actual business growth requires custom-architected infrastructure.
              </p>
              <p className="text-zinc-500 leading-relaxed">
                By bridging enterprise-grade technology with precise execution methodologies, we build systems designed to operate at maximum efficiency for Zambian enterprises.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-zinc-900 mt-1 shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-zinc-900">99.9% Uptime</h4>
                  <p className="text-sm text-zinc-500 mt-1">Designed for maximum reliability and structural redundancy.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-zinc-900 mt-1 shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-zinc-900">Custom Scalable Code</h4>
                  <p className="text-sm text-zinc-500 mt-1">100% bespoke scripts optimized for speed.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-zinc-900 mt-1 shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-zinc-900">Rapid Turnaround</h4>
                  <p className="text-sm text-zinc-500 mt-1">Local expert teams addressing queries rapidly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONTACT SECTION */}
      <section id="contact" className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-medium tracking-tight mb-6">
                Start your project
              </h2>
              <p className="text-zinc-400 mb-12 max-w-md">
                Request quotes or review setups with our systems administrators. We respond inside 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <MapPin className="text-zinc-500" size={20} />
                  <span className="text-sm text-zinc-300">Cooperative House, Cha Cha Cha Road, Lusaka</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-zinc-500" size={20} />
                  <a href="tel:+260956450838" className="text-sm text-zinc-300 hover:text-white transition-colors">+260 95 645 0838</a>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-zinc-500" size={20} />
                  <a href="mailto:info@stratbyte.cloud" className="text-sm text-zinc-300 hover:text-white transition-colors">info@stratbyte.cloud</a>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-2xl p-8">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-2">First Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-sm focus:border-white focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-2">Email</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-sm focus:border-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-2">Message</label>
                  <textarea 
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-sm focus:border-white focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button 
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-white text-zinc-900 py-3 rounded-lg text-sm font-medium hover:bg-zinc-200 transition-colors disabled:opacity-50"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
                {formStatus === 'success' && (
                  <p className="text-sm text-emerald-400 text-center">Message sent successfully!</p>
                 )}
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
