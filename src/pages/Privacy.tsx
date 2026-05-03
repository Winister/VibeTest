import { motion } from 'motion/react';
import { useEffect } from 'react';

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy | StratByte Solutions";
  }, []);

  return (
    <div className="pt-32 pb-40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tight text-brand-primary">
            Privacy <span className="text-brand-accent">Policy</span>
          </h1>
          <div className="w-24 h-1.5 bg-brand-accent mb-10" />
          
          <div className="prose prose-lg text-gray-700 max-w-none">
            <p className="lead text-xl mb-8">
              At StratByte Cloud Solutions, we are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
            
            <h2 className="text-2xl font-bold text-brand-primary mt-10 mb-4">1. Information We Collect</h2>
            <p className="mb-6">
              We may collect personal information such as your name, email address, phone number, and company details when you communicate with us, use our services, or visit our website.
            </p>

            <h2 className="text-2xl font-bold text-brand-primary mt-10 mb-4">2. How We Use Your Information</h2>
            <p className="mb-6">
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Provide and improve our IT and cloud solutions.</li>
              <li>Communicate with you regarding our services.</li>
              <li>Respond to your inquiries and support requests.</li>
              <li>Comply with legal obligations.</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-primary mt-10 mb-4">3. Data Security</h2>
            <p className="mb-6">
              We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction.
            </p>

            <h2 className="text-2xl font-bold text-brand-primary mt-10 mb-4">4. Sharing Your Information</h2>
            <p className="mb-6">
              We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information with our business partners and trusted affiliates.
            </p>

            <h2 className="text-2xl font-bold text-brand-primary mt-10 mb-4">5. Contact Us</h2>
            <p className="mb-6">
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <a href="mailto:info@stratbyte.cloud" className="text-brand-accent hover:underline font-bold">info@stratbyte.cloud</a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
