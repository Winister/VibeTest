import { useEffect } from 'react';

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy | Stratbyte";
  }, []);

  return (
    <div className="pt-32 pb-40 min-h-screen bg-zinc-50 text-zinc-900 selection:bg-zinc-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h1 className="text-4xl font-medium tracking-tight mb-4 text-zinc-900">Privacy Policy</h1>
          <p className="text-zinc-500 text-sm font-medium">Last Updated: June 2024</p>
        </div>

        <div className="space-y-8 text-zinc-700 leading-relaxed text-sm">
          <section className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
            <h2 className="text-xl font-medium tracking-tight mb-4 text-zinc-900">1. Information Collection</h2>
            <p>
              We collect information that you provide directly to us, including but not limited to your name, corporate email address, phone number, and project specifications when you request a consultation, fill out a form, or otherwise communicate with us.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
            <h2 className="text-xl font-medium tracking-tight mb-4 text-zinc-900">2. Technical Analytics</h2>
            <p className="mb-4">
              When you access our secure web portal at stratbyte.cloud, our servers automatically record certain information infrastructure details such as:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-600">
              <li>Your IP address and regional geodata.</li>
              <li>Browser type, version, and operating system.</li>
              <li>Pages viewed, access times, and routing histories.</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
            <h2 className="text-xl font-medium tracking-tight mb-4 text-zinc-900">3. Data Security & Storage</h2>
            <p>
              We implement industry-standard encryption protocols and elite security architectures to protect your data. All database credentials and proprietary configurations are heavily guarded and never shared with third-party tracking algorithms. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
            <h2 className="text-xl font-medium tracking-tight mb-4 text-zinc-900">4. Third-Party Integrations</h2>
            <p>
              We may utilize third-party operational tools (such as Cloudflare, FormSubmit) for performance diagnostics and form transmissions. These tools operate under their own independent privacy agreements.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
            <h2 className="text-xl font-medium tracking-tight mb-4 text-zinc-900">5. Contact Us</h2>
            <p>
              If you have any questions or require an audit of your data held on our systems, please contact the Data Protection team at: <strong>info@stratbyte.cloud</strong>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
