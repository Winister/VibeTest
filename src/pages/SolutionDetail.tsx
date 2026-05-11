import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import * as Icons from 'lucide-react';
import { SERVICES, PRODUCTS } from '../constants';

export default function SolutionDetail() {
  const { type, id } = useParams<{ type: string; id: string }>();
  const navigate = useNavigate();
  
  const isService = type === 'service';
  const item = isService 
    ? SERVICES.find(s => s.id === id) 
    : PRODUCTS.find(p => p.id === id);

  useEffect(() => {
    if (item) {
      document.title = `${item.title} | StratByte Solutions`;
    }
  }, [item]);

  if (!item) {
    return (
      <div className="pt-32 pb-40 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Solution Not Found</h1>
        <button onClick={() => navigate('/services')} className="text-brand-accent hover:underline flex items-center">
          <ArrowLeft className="mr-2" /> Back to Services
        </button>
      </div>
    );
  }

  const IconComponent = (Icons as any)[item.icon || (isService ? 'Cloud' : 'Box')] || Icons.Box;

  return (
    <div className="pt-32 pb-40 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate('/services')}
          className="flex items-center text-gray-500 hover:text-brand-primary mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to all solutions
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-brand-primary/5 border border-brand-primary/10 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl" />
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 relative z-10">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-brand-primary/10 text-brand-primary rounded-2xl flex items-center justify-center shrink-0 mr-6">
                <IconComponent size={32} />
              </div>
              <div>
                <h1 className="text-3xl md:text-5xl font-display font-bold text-brand-primary">
                  {item.title}
                </h1>
                <span className="inline-block mt-2 px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-bold uppercase tracking-wider">
                  {isService ? 'Service' : 'Product'}
                </span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg text-gray-600 mb-12 relative z-10">
            <p className="text-xl font-medium leading-relaxed mb-6 text-brand-primary border-l-4 border-brand-accent pl-4">
              {item.description}
            </p>
            <p className="leading-relaxed">
              {item.longDescription}
            </p>
            
            <ul className="mt-8 space-y-3 list-none pl-0">
              <li className="flex items-center text-gray-700">
                <CheckCircle2 className="text-green-500 mr-3" size={20}/>
                Instant Access & Setup
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle2 className="text-green-500 mr-3" size={20}/>
                24/7 Priority Support
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle2 className="text-green-500 mr-3" size={20}/>
                Satisfaction Guarantee
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 relative z-10 text-center">
            <h3 className="text-xl font-bold text-brand-primary mb-4">Ready to get started?</h3>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">Contact our team to discuss your specific requirements and how we can tailor this solution to fit your business.</p>
            <button 
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-brand-primary text-white rounded-xl font-bold hover:bg-brand-primary/90 transition-all shadow-lg hover:-translate-y-1 inline-block"
            >
              Contact Us
            </button>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
