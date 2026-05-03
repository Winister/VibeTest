import { motion } from 'motion/react';
import { useEffect } from 'react';

export default function Terms() {
  useEffect(() => {
    document.title = "Terms of Service | StratByte Solutions";
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
            Terms of <span className="text-brand-accent">Service</span>
          </h1>
          <div className="w-24 h-1.5 bg-brand-accent mb-10" />
          
          <div className="prose prose-lg text-gray-700 max-w-none">
            <p className="lead text-xl mb-8">
              By accessing or using the services provided by StratByte Cloud Solutions, you agree to comply with and be bound by the following terms and conditions.
            </p>
            
            <h2 className="text-2xl font-bold text-brand-primary mt-10 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-6">
              Please read these Terms of Service carefully before using our website or services. Your access to and use of our services is conditioned on your acceptance of and compliance with these Terms.
            </p>

            <h2 className="text-2xl font-bold text-brand-primary mt-10 mb-4">2. Services</h2>
            <p className="mb-6">
              StratByte Cloud Solutions provides IT consulting, cloud infrastructure management, and related tech services. We reserve the right to modify, suspend, or discontinue any part of our services at any time.
            </p>

            <h2 className="text-2xl font-bold text-brand-primary mt-10 mb-4">3. User Responsibilities</h2>
            <p className="mb-6">
              You agree not to use our services for any unlawful purpose or in any way that could interrupt, damage, or impair our operations. You are responsible for ensuring that all data you provide is accurate and lawful.
            </p>

            <h2 className="text-2xl font-bold text-brand-primary mt-10 mb-4">4. Intellectual Property</h2>
            <p className="mb-6">
              All content, features, and functionality on our website, including text, graphics, logos, and software, are the exclusive property of StratByte Cloud Solutions and are protected by international copyright laws.
            </p>

            <h2 className="text-2xl font-bold text-brand-primary mt-10 mb-4">5. Limitation of Liability</h2>
            <p className="mb-6">
              In no event shall StratByte Cloud Solutions, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of our services.
            </p>

            <h2 className="text-2xl font-bold text-brand-primary mt-10 mb-4">6. Contact Information</h2>
            <p className="mb-6">
              For any legal or service-related inquiries regarding these terms, please contact us at:
              <br />
              <a href="mailto:info@stratbyte.cloud" className="text-brand-accent hover:underline font-bold">info@stratbyte.cloud</a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
