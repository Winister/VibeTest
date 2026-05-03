import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { BLOG_POSTS } from '../constants';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="pt-40 text-center">
        <h1 className="text-4xl font-bold mb-8">Post not found.</h1>
        <Link to="/blog" className="text-brand-accent font-bold">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/blog" className="inline-flex items-center text-sm font-bold text-black/40 hover:text-black mb-12 transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to Knowledge Base
          </Link>

          <div className="mb-12">
            <span className="px-4 py-1.5 bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-widest rounded-full mb-6 inline-block">
              {post.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-10 leading-[0.9] tracking-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-black/40 border-y border-black/5 py-8">
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                Authored by {post.author}
              </div>
              <button className="flex items-center ml-auto hover:text-black transition-colors">
                <Share2 size={18} className="mr-2" /> Share
              </button>
            </div>
          </div>

          <div className="aspect-[21/9] rounded-3xl overflow-hidden mb-16 shadow-2xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <article className="prose prose-lg prose-black max-w-none">
            <div className="markdown-body">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </article>

          <div className="mt-24 p-12 glass-card bg-black text-white rounded-[2rem] overflow-hidden relative">
            <h3 className="text-3xl font-bold mb-6 relative z-10">Need expert cloud advice?</h3>
            <p className="text-white/60 mb-10 max-w-lg relative z-10 leading-relaxed">
              Our engineering team is ready to help you architect your next major project.
            </p>
            <button className="bg-brand-accent text-white px-8 py-4 rounded-full font-bold hover:brightness-110 transition-all relative z-10">
              Get in touch
            </button>
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/20 blur-[80px] -mr-32 -mt-32" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
