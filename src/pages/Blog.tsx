import { motion } from 'motion/react';
import { BLOG_POSTS } from '../constants';
import { BlogCard } from '../components/BlogCard';

export default function Blog() {
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
              Knowledge <span className="text-brand-accent">Base.</span>
            </h1>
            <p className="text-lg md:text-xl text-black/50 max-w-2xl mx-auto leading-relaxed">
              Insights, case studies, and engineering deep-dives from the StratByte Cloud Solutions team.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Main Feed */}
          <div className="md:col-span-2 lg:col-span-2 grid grid-cols-1 gap-16">
            {BLOG_POSTS.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-12">
            <div className="glass-card p-8">
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest border-b border-black/5 pb-4">Categories</h4>
              <div className="space-y-3">
                {['Strategy', 'Case Study', 'Tutorials', 'Security', 'DevOps'].map((cat) => (
                  <button key={cat} className="flex justify-between w-full text-sm font-medium hover:text-brand-accent transition-colors">
                    <span>{cat}</span>
                    <span className="text-black/30 font-mono">0{Math.floor(Math.random() * 9) + 1}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="glass-card p-8 bg-black text-white">
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/40">Subscribe</h4>
              <p className="text-sm text-white/60 mb-8 leading-relaxed">
                Stay updated with our latest cloud engineering insights.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-brand-accent"
                />
                <button className="w-full bg-brand-accent py-4 rounded-xl text-sm font-bold hover:brightness-110 transition-all">
                  Join Newsletter
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
