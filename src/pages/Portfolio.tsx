import React from 'react';
import { portfolio } from '../data/content';
import { ExternalLink } from 'lucide-react';
import { SEO } from '../components/SEO';
import { WebPageSchema } from '../components/Schema';

const Portfolio: React.FC = () => {
  return (
    <div className="bg-hunic-dark min-h-screen">
      <SEO 
        title="Portfolio"
        description="A showcase of our technical capabilities and successful digital transformations. View our completed projects and case studies."
        keywords="portfolio, case studies, web development projects, software solutions, digital transformation"
        canonicalUrl="https://hunicsolutions.com/portfolio"
      />
      <WebPageSchema 
        name="Portfolio - Hunic Solutions"
        description="Showcase of technical capabilities and successful digital transformations across various industries."
        url="https://hunicsolutions.com/portfolio"
      />
      
      <section className="py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Selected Work</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            A showcase of our technical capabilities and successful digital transformations.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {portfolio.map((project, index) => (
              <article key={project.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-3/5 group cursor-pointer relative overflow-hidden clip-corner border border-gray-800">
                  <div className="absolute inset-0 bg-hunic-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none mix-blend-overlay" aria-hidden="true"></div>
                  <img src={project.image} alt={`${project.title} - ${project.category} project`} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="w-full md:w-2/5">
                  <span className="text-hunic-cyan text-sm font-bold uppercase tracking-widest mb-2 block">{project.category}</span>
                  <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
                  <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-8">
                    <h3 className="text-xs uppercase text-gray-600 font-bold mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs border border-gray-700">{t}</span>
                      ))}
                    </div>
                  </div>

                  <button className="flex items-center text-white font-bold uppercase tracking-wider hover:text-hunic-cyan transition-colors" aria-label={`View ${project.title} case study`}>
                    View Case Study <ExternalLink size={16} className="ml-2" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
