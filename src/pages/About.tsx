import { motion } from 'motion/react';
import { ShieldCheck, Target, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight text-brand-primary">
              About <br/><span className="text-brand-accent uppercase font-black text-6xl md:text-8xl mt-2 block">US</span>
            </h1>
            <div className="w-24 h-1.5 bg-brand-accent mx-auto mb-10" />
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              StratByte Cloud Solutions is a Zambian owned company that provides flexible, scalable solutions that adapt to client needs. We provide comprehensive reports, data visualizations, and insights to optimize businesses and help them reach their goals.
            </p>
          </motion.div>
        </div>

        <div className="mb-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 lg:p-16 text-center max-w-4xl mx-auto border-t-8 border-t-brand-primary overflow-hidden relative"
          >
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
            <Lightbulb size={48} className="mx-auto text-brand-accent mb-8" />
            <h2 className="text-brand-primary text-3xl font-display font-bold italic mb-6">"We embrace innovation as a core principle..."</h2>
            <p className="text-lg md:text-xl font-medium leading-relaxed mb-8 text-gray-600">
              ...constantly adapting to the complexities of the IT landscape. By investing in advanced technologies and fostering a culture of continuous learning, we empower ourselves to solve our clients' most challenging IT problems.
            </p>
          </motion.div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-primary">Vision &</h2>
          <h2 className="text-5xl md:text-6xl font-display font-black text-brand-accent uppercase tracking-wider mt-2">Mission</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-10 text-center border-t-4 border-t-brand-accent"
          >
            <div className="mx-auto w-20 h-20 bg-brand-accent/10 text-brand-accent rounded-full flex items-center justify-center mb-8">
              <Target size={36} />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4 text-brand-primary">Mission</h3>
            <p className="text-gray-600 leading-relaxed font-medium">
              To build long-term partnerships with our clients by providing expert guidance, tailored solutions, and unwavering support to help them achieve their business goals through effective IT strategies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-card p-10 text-center border-t-4 border-t-brand-primary"
          >
            <div className="mx-auto w-20 h-20 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center mb-8">
              <Lightbulb size={36} />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4 text-brand-primary">Vision</h3>
            <p className="text-gray-600 leading-relaxed font-medium">
              To be the most trusted and respected IT consulting firm, known for our commitment to client success, deep industry expertise, and collaborative approach.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="glass-card p-10 text-center border-t-4 border-t-brand-accent"
          >
            <div className="mx-auto w-20 h-20 bg-brand-accent text-white rounded-full flex items-center justify-center mb-8 shadow-lg shadow-brand-accent/30">
              <ShieldCheck size={36} />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4 text-brand-primary">Core Values</h3>
            <ul className="text-gray-600 leading-relaxed font-bold space-y-2 text-lg">
              <li>Trust</li>
              <li>Collaboration</li>
              <li>Accountability</li>
              <li>Client Success</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
