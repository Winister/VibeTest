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
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              About <span className="text-brand-accent">StratByte</span>
            </h1>
            <p className="text-lg md:text-xl text-black/50 max-w-2xl mx-auto leading-relaxed">
              StratByte Cloud Solutions is a Zambian owned company that provides flexible, scalable solutions that adapt to client needs. We provide comprehensive reports, data visualizations, and insights to optimize businesses and help them reach their goals.
            </p>
          </motion.div>
        </div>

        <div className="mb-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 lg:p-16 text-center max-w-4xl mx-auto"
          >
            <Lightbulb size={48} className="mx-auto text-brand-accent mb-8" />
            <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
              "We embrace innovation as a core principle, constantly adapting to the complexities of the IT landscape. By investing in advanced technologies and fostering a culture of continuous learning, we empower ourselves to solve our clients' most challenging IT problems."
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 text-center"
          >
            <div className="mx-auto w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center mb-6">
              <Target size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-black/60 leading-relaxed">
              To build long-term partnerships with our clients by providing expert guidance, tailored solutions, and unwavering support to help them achieve their business goals through effective IT strategies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-card p-8 text-center"
          >
            <div className="mx-auto w-16 h-16 bg-brand-accent text-white rounded-2xl flex items-center justify-center mb-6">
              <Lightbulb size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-black/60 leading-relaxed">
              To be the most trusted and respected IT consulting firm, known for our commitment to client success, deep industry expertise, and collaborative approach.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="glass-card p-8 text-center"
          >
            <div className="mx-auto w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Core Values</h3>
            <p className="text-black/60 leading-relaxed font-medium">
              Trust,<br/>
              Collaboration,<br/>
              Accountability,<br/>
              Client Success
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
