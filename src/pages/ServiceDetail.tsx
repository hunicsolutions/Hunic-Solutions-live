import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { services } from '../data/content';
import { Check, XCircle, ArrowRight, Layers, Cpu } from 'lucide-react';
import { SEO } from '../components/SEO';
import { ServiceSchema, BreadcrumbSchema } from '../components/Schema';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = services.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="bg-hunic-dark min-h-screen">
      <SEO 
        title={service.title}
        description={service.shortDescription}
        keywords={`${service.title}, software development, digital solutions`}
        canonicalUrl={`https://hunicsolutions.com/services/${service.id}`}
        ogImage={service.heroImage}
      />
      <ServiceSchema 
        name={service.title}
        description={service.shortDescription}
      />
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: 'https://hunicsolutions.com/' },
          { name: 'Services', url: 'https://hunicsolutions.com/services' },
          { name: service.title, url: `https://hunicsolutions.com/services/${service.id}` }
        ]}
      />
      
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={service.heroImage} alt={service.title} className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-hunic-dark via-hunic-dark/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <span className="text-hunic-cyan font-bold tracking-[0.2em] uppercase mb-4 block">Service Overview</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">{service.title}</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">{service.shortDescription}</p>
        </div>
      </section>

      {/* Description & Pain Points */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">The Challenge</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                {service.fullDescription}
              </p>
              
              <div className="bg-hunic-card border border-red-900/30 p-8 rounded-sm">
                <h3 className="text-red-400 font-bold uppercase tracking-wider mb-4 flex items-center">
                  <XCircle className="mr-2" size={20} /> Common Pain Points
                </h3>
                <ul className="space-y-3">
                  {service.painPoints.map((point, i) => (
                    <li key={i} className="flex items-start text-gray-400">
                      <span className="mr-3 text-red-500/50 mt-1.5">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Our Solution</h2>
              <div className="grid gap-6">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex p-6 bg-hunic-card border border-gray-800 hover:border-hunic-cyan/50 transition-colors clip-corner">
                    <div className="mr-4 mt-1">
                      <div className="w-8 h-8 bg-hunic-cyan/10 text-hunic-cyan flex items-center justify-center rounded-sm">
                        <Check size={16} strokeWidth={3} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{feature}</h4>
                      <p className="text-sm text-gray-500">Engineered for maximum efficiency and scale.</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Industries Served</h3>
                <div className="flex flex-wrap gap-2">
                  {service.industries.map((ind, i) => (
                    <span key={i} className="px-3 py-1 border border-gray-700 text-gray-300 text-sm">{ind}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-black/50 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Technology Stack</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {service.techStack.map((tech, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-20 h-20 bg-gray-800 flex items-center justify-center rounded-sm border border-gray-700 group-hover:border-hunic-cyan group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all">
                  <Cpu className="text-gray-400 group-hover:text-hunic-cyan transition-colors" size={32} />
                </div>
                <span className="mt-3 text-sm font-bold text-gray-500 group-hover:text-white transition-colors">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-hunic-dark to-blue-900/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to scale?</h2>
          <p className="text-xl text-gray-400 mb-10">
            Let's discuss how our {service.title} services can transform your business operations.
          </p>
          <div className="flex justify-center gap-4">
             <Link to="/contact" className="px-8 py-4 bg-hunic-cyan text-hunic-dark font-bold uppercase tracking-wider hover:bg-white transition-all clip-corner">
                Start Project
             </Link>
             <Link to="/services" className="px-8 py-4 bg-transparent border border-gray-600 text-white font-bold uppercase tracking-wider hover:text-hunic-cyan hover:border-hunic-cyan transition-all clip-corner">
                All Services
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
