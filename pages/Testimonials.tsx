import React from 'react';
import { testimonials } from '../data/content';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <div className="bg-hunic-dark min-h-screen">
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Client Stories</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto px-4">
          Don't just take our word for it. Here is what industry leaders say about working with Hunic Solutions.
        </p>
      </section>

      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-hunic-card border border-gray-800 p-8 relative hover:border-hunic-cyan/30 transition-colors">
                <Quote className="absolute top-8 right-8 text-gray-700 w-10 h-10 opacity-50" />
                <p className="text-gray-300 italic mb-8 relative z-10 text-lg">"{t.quote}"</p>
                <div className="mt-auto">
                   <h4 className="text-white font-bold">{t.name}</h4>
                   <p className="text-hunic-cyan text-sm mb-1">{t.role}</p>
                   <p className="text-gray-500 text-xs uppercase tracking-wide">{t.company}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-hunic-cyan/50 to-transparent opacity-50"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
