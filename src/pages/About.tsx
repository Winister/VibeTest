import { motion } from 'motion/react';
import { ShieldCheck, Target, Lightbulb, Users, Award, Zap, Check, ArrowRight, FileText, Phone } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  useEffect(() => {
    document.title = "Our Corporate DNA | Stratbyte";
  }, []);

  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdXGx6Km7SQNY4Fw59KlvBud_ZWtwhvHeUfVKE5i8u0qgtrtg/viewform?usp=publish-editor";

  return (
    <div className="pt-24 pb-40 bg-zinc-50 text-zinc-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        
        {/* 1. HERO DESCRIPTION SPLIT */}
        <div className="py-12 lg:py-20">
          <div className="grid gap-16 lg:grid-cols-12 items-center">
            
            {/* Left Content Box */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center space-x-2 bg-zinc-100 border border-zinc-200 rounded-full px-4 py-1.5 mb-6">
                <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase leading-none">Corporate DNA</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight mb-6 leading-[1.05] text-zinc-900">
                Pioneering <span className="text-zinc-500">Digital Craft</span> <br />
                Across Zambia & SADC
              </h1>

              <div className="h-0.5 w-16 bg-zinc-900 mb-8" />

              <p className="text-lg text-zinc-500 leading-relaxed mb-8 max-w-2xl">
                Stratbyte is an elite technology firm specializing in beautiful custom web development, complex mobile database architectures, and certified IT operations. We help ambitious companies translate legacy struggles into lightning-fast, secure digital solutions.
              </p>

              {/* Stats Bento Matrix */}
              <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 bg-white border border-zinc-200 p-8 rounded-3xl shadow-sm">
                <div>
                  <h4 className="text-3xl font-medium text-zinc-900 mb-1">100%</h4>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Zambian Owned</p>
                </div>
                <div>
                  <h4 className="text-3xl font-medium text-zinc-900 mb-1">30+</h4>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Delivered Portals</p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <h4 className="text-3xl font-medium text-zinc-900 mb-1">SLA</h4>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Guarantees</p>
                </div>
              </div>
            </motion.div>

            {/* Right Interactive Card Deck */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="bg-white border border-zinc-200 rounded-3xl p-8 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-6">Execution values</p>

                <div className="space-y-4">
                  {/* Item 1 */}
                  <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100 flex items-start space-x-4">
                    <div className="p-3 bg-white rounded-xl text-zinc-900 shadow-sm border border-zinc-100 shrink-0">
                      <Users size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-zinc-900 mb-1">Customer Blueprint</h4>
                      <p className="text-sm text-zinc-500 leading-relaxed">Guiding regional enterprises and local farms with tailored expert engineering consulting plans.</p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100 flex items-start space-x-4">
                    <div className="p-3 bg-white rounded-xl text-zinc-900 shadow-sm border border-zinc-100 shrink-0">
                      <Award size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-zinc-900 mb-1">Engineering Standards</h4>
                      <p className="text-sm text-zinc-500 leading-relaxed">Dedicated local experts directly supporting your custom hosting, designs, and databases.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* 2. PHILOSOPHY HIGHLIGHT BANNER */}
        <section className="my-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900 p-12 sm:p-20 text-center max-w-5xl mx-auto rounded-3xl overflow-hidden text-white"
          >
            <Lightbulb size={36} className="mx-auto text-zinc-400 mb-8" />
            
            <h2 className="text-2xl md:text-4xl font-medium tracking-tight leading-tight max-w-3xl mx-auto mb-8">
              "We embrace custom coding as a core value, discarding templates to write responsive interfaces for every layout we launch."
            </h2>
            
            <p className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto text-zinc-400">
              By investing systematically in elite, clean layouts and prioritizing fast loading times for mobile devices, our team minimizes customer drop-offs and crafts high-converting platforms that elevate user trust of local businesses.
            </p>
          </motion.div>
        </section>

        {/* 3. MISSION & VISION GRID */}
        <section className="py-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-zinc-500 font-medium text-sm uppercase tracking-widest block mb-4">Our Foundation</span>
            <h2 className="text-4xl font-medium text-zinc-900 tracking-tight">
              Mission & Vision
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-12">
            
            {/* Mission Box */}
            <motion.div
              className="lg:col-span-6 bg-white border border-zinc-200 rounded-3xl p-10 shadow-sm"
            >
              <div className="w-14 h-14 bg-zinc-50 rounded-2xl text-zinc-900 flex items-center justify-center mb-8 border border-zinc-100">
                <Target size={24} />
              </div>
              
              <h3 className="text-2xl font-medium text-zinc-900 mb-4">Our Mission</h3>
              <p className="text-base text-zinc-500 leading-relaxed mb-10">
                To build long-term, direct partnerships with enterprise teams and small businesses in Zambia, equipping them with gorgeous custom websites, scalable hybrid mobile databases, and transparent IT guides to unlock actual profit.
              </p>

              <div className="flex items-center justify-between text-zinc-400 pt-8 border-t border-zinc-100">
                <span className="text-xs font-bold uppercase tracking-widest">LOCAL ENGINEERING TRUTHS</span>
                <span className="font-medium text-sm">01</span>
              </div>
            </motion.div>

            {/* Vision Box */}
            <motion.div
              className="lg:col-span-6 bg-white border border-zinc-200 rounded-3xl p-10 shadow-sm"
            >
              <div className="w-14 h-14 bg-zinc-50 rounded-2xl text-zinc-900 flex items-center justify-center mb-8 border border-zinc-100">
                <Lightbulb size={24} />
              </div>
              
              <h3 className="text-2xl font-medium text-zinc-900 mb-4">Our Vision</h3>
              <p className="text-base text-zinc-500 leading-relaxed mb-10">
                To be the primary pillar of premium digital craftsmanship, web development excellence, and local SSD hosting across Southern Africa. We inspire and trigger tech ecosystems with transparent costs and absolute security.
              </p>

              <div className="flex items-center justify-between text-zinc-400 pt-8 border-t border-zinc-100">
                <span className="text-xs font-bold uppercase tracking-widest">SADC REGIONAL VALUE</span>
                <span className="font-medium text-sm">02</span>
              </div>
            </motion.div>

            {/* Values Banner */}
            <motion.div
              className="lg:col-span-12 bg-white border border-zinc-200 rounded-3xl p-10 lg:p-14 shadow-sm"
            >
              <div className="grid gap-12 lg:grid-cols-12 items-center">
                <div className="lg:col-span-5">
                  <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center mb-6 border border-zinc-100 text-zinc-900">
                    <ShieldCheck size={28} />
                  </div>
                  <h3 className="text-3xl font-medium tracking-tight mb-4 text-zinc-900">Values We Code By</h3>
                  <p className="text-base text-zinc-500 leading-relaxed max-w-sm">
                    Our engineering values dictate how we write systems, how we handle hosting security, and how we deliver on time. There are no shortcuts on the path to master craft.
                  </p>
                </div>

                <div className="lg:col-span-1" />

                <div className="lg:col-span-6 grid gap-6 sm:grid-cols-2">
                  {[
                    { title: 'Trustworthiness', desc: 'No complex billing markup or sudden developer fees. Precise estimates adapted for Zambia.' },
                    { title: 'Hand-Craftsmanship', desc: 'We write layout code block-by-block. No rigid automated templates that hurt SEO.' },
                    { title: 'Security Safeguard', desc: 'Secure database portals with robust encryption codes to secure corporate logs.' },
                    { title: 'Customer Alignment', desc: 'We only evaluate our outcomes by the actual visual performance of your live site.' }
                  ].map((val) => (
                    <div key={val.title} className="bg-zinc-50 border border-zinc-100 p-6 rounded-2xl">
                      <div className="flex items-center space-x-3 mb-3">
                        <Check size={16} className="text-zinc-900 bg-white shadow-sm p-0.5 rounded-full shrink-0" />
                        <span className="font-medium text-sm text-zinc-900">{val.title}</span>
                      </div>
                      <p className="text-sm text-zinc-500 leading-relaxed">{val.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* 4. CALL TO ACTION */}
        <section className="mt-16 text-center max-w-3xl mx-auto bg-white border border-zinc-200 p-12 rounded-3xl shadow-sm">
          <h3 className="text-2xl font-medium text-zinc-900 mb-4">Ready to plan your website layout?</h3>
          <p className="text-sm text-zinc-500 mb-8 max-w-xl mx-auto leading-relaxed">
            Take 2 minutes to submit your required features, pages, and menus. Complete our specialized website development brief on Google Forms to get immediate pricing.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={googleFormUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium px-8 py-4 rounded-xl flex items-center gap-2 transition-colors w-full sm:w-auto justify-center"
            >
              <FileText size={16} />
              <span>Submit Web Requirements</span>
            </a>
            
            <Link to="/services" className="bg-zinc-50 hover:bg-zinc-100 text-zinc-900 border border-zinc-200 px-8 py-4 rounded-xl text-sm font-medium transition-colors w-full sm:w-auto justify-center flex">
              Browse Services
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
