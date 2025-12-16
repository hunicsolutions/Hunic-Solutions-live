import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/content';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SEO } from '../components/SEO';
import { WebPageSchema } from '../components/Schema';

const Services: React.FC = () => {
  return (
    <div className="bg-hunic-dark min-h-screen">
      <SEO 
        title="Services"
        description="Comprehensive digital solutions engineered for modern business challenges. Custom software development, AI automation, web development, and secure hosting."
        keywords="software development services, AI automation, web development, cloud hosting, enterprise solutions"
        canonicalUrl="https://hunicsolutions.com/services"
      />
      <WebPageSchema 
        name="Services - Hunic Solutions"
        description="Comprehensive digital solutions including custom software development, AI automation, web development, and secure hosting services."
        url="https://hunicsolutions.com/services"
      />
      
       <section className="py-20 bg-hunic-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">Our Services</h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Comprehensive digital solutions engineered for modern business challenges.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-hunic-cyan/5 rounded-full blur-3xl"></div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10">
            {services.map((service, index) => (
              <div key={service.id} className="group relative bg-hunic-card border border-gray-800 hover:border-hunic-cyan/40 transition-all duration-300 overflow-hidden clip-corner">
                <div className="grid md:grid-cols-2">
                   <div className="p-8 md:p-12 flex flex-col justify-center">
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-hunic-cyan transition-colors">{service.title}</h2>
                      <p className="text-gray-400 mb-6">{service.shortDescription}</p>
                      
                      <div className="mb-8">
                        <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-3">Key Features</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.features.slice(0, 4).map((f, i) => (
                            <li key={i} className="flex items-center text-sm text-gray-300">
                              <CheckCircle size={14} className="text-hunic-cyan mr-2" /> {f}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link to={`/services/${service.id}`} className="inline-flex items-center text-white font-bold uppercase tracking-wider hover:text-hunic-cyan transition-colors mt-auto">
                        Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                      </Link>
                   </div>
                   <div className="h-64 md:h-auto bg-gray-900 relative overflow-hidden">
                      <div className="absolute inset-0 bg-hunic-cyan/10 mix-blend-overlay z-10 group-hover:bg-hunic-cyan/0 transition-colors"></div>
                      <img src={service.heroImage} alt={service.title} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
