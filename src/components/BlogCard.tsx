import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { BlogPost } from '../types';

export function BlogCard({ post, index }: { post: BlogPost, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
      id={`blog-card-${post.id}`}
    >
      <Link to={`/blog/${post.id}`}>
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl mb-6">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
              {post.category}
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-4 text-xs text-black/40 mb-3">
          <span className="flex items-center">
            <Calendar size={14} className="mr-1" />
            {new Date(post.date).toLocaleDateString()}
          </span>
          <span className="flex items-center">
            <User size={14} className="mr-1" />
            {post.author}
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-accent transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-black/60 text-sm mb-6 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center text-sm font-bold group-hover:translate-x-2 transition-transform">
          Read More <ArrowRight size={16} className="ml-2" />
        </div>
      </Link>
    </motion.div>
  );
}
