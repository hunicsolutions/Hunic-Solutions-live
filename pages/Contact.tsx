import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting Hunic Solutions. We will respond shortly.');
  };

  return (
    <div className="bg-hunic-dark min-h-screen">
      <section className="py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-400">
            Have a project in mind? Let's build something extraordinary.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="text-hunic-cyan w-6 h-6 mr-4 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-200">Headquarters</h4>
                      <p className="text-gray-400">101 Tech Blvd, Suite 400<br />Innovation City, CA 90210</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-hunic-cyan w-6 h-6 mr-4" />
                    <div>
                      <h4 className="font-bold text-gray-200">Phone</h4>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="text-hunic-cyan w-6 h-6 mr-4" />
                    <div>
                      <h4 className="font-bold text-gray-200">Email</h4>
                      <p className="text-gray-400">hello@hunic.solutions</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {[
                    { q: "What is your typical project timeline?", a: "Timelines vary by complexity, but most custom web builds take 6-10 weeks." },
                    { q: "Do you offer post-launch support?", a: "Yes, we have comprehensive maintenance packages to keep your software secure." },
                    { q: "Can you take over an existing project?", a: "Absolutely. We specialize in refactoring and modernizing legacy codebases." }
                  ].map((faq, i) => (
                    <div key={i} className="border border-gray-800 p-4 bg-hunic-card/30">
                      <h4 className="font-bold text-gray-200 mb-2 text-sm">{faq.q}</h4>
                      <p className="text-gray-400 text-sm">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-hunic-card border border-gray-800 p-8 clip-corner">
              <h2 className="text-2xl font-bold text-white mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-900 border border-gray-700 p-4 text-white focus:border-hunic-cyan focus:outline-none transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-gray-900 border border-gray-700 p-4 text-white focus:border-hunic-cyan focus:outline-none transition-colors"
                    placeholder="john@company.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Project Details</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-gray-900 border border-gray-700 p-4 text-white focus:border-hunic-cyan focus:outline-none transition-colors"
                    placeholder="Tell us about your goals..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-hunic-cyan text-hunic-dark font-bold uppercase tracking-wider hover:bg-white transition-all flex items-center justify-center group">
                  Send Message <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
