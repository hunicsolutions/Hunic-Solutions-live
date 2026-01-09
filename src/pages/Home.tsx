import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Shield, Cpu, Zap, Activity, Layers, Check } from 'lucide-react';
import { SEO } from '../components/SEO';
import { OrganizationSchema, WebPageSchema } from '../components/Schema';

const Home: React.FC = () => {
  return (
    <>
      <SEO 
        title="Professional Website Development & SEO Services"
        description="Hunic Solutions builds professional websites for small businesses. Custom web development, SEO services, and reliable hosting with ongoing support."
        keywords="website development, SEO services, small business websites, web design, search engine optimization, website hosting"
        canonicalUrl="https://hunicsolutions.com/"
      />
      <OrganizationSchema />
      <WebPageSchema 
        name="Hunic Solutions - Professional Website Development & SEO"
        description="Professional website development, SEO services, and reliable hosting for small businesses."
        url="https://hunicsolutions.com/"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center tech-grid overflow-hidden" aria-label="Hero section">
        <div className="absolute inset-0 bg-gradient-to-br from-hunic-dark via-hunic-dark/95 to-black z-0" aria-hidden="true" />
        <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-hunic-cyan/10 blur-[120px] rounded-full" aria-hidden="true" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 px-3 py-1 border border-hunic-cyan/30 bg-hunic-cyan/5 text-hunic-cyan text-xs font-bold uppercase tracking-widest clip-corner" role="status" aria-live="polite">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span>Accepting New Clients</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
                Professional Websites <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-hunic-cyan to-blue-600">Built for Growth</span>
              </h1>
              
              <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
                Hunic Solutions helps small businesses succeed online with professional website development, SEO services, and reliable hosting.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="px-8 py-4 bg-hunic-cyan text-hunic-dark font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 clip-corner flex items-center group">
                  Get a Quote <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
                <Link to="/services" className="px-8 py-4 bg-transparent border border-gray-600 text-white font-bold uppercase tracking-wider hover:border-hunic-cyan hover:text-hunic-cyan transition-all duration-300 clip-corner">
                  Our Services
                </Link>
              </div>
            </div>
            
            <div className="hidden md:block relative" aria-hidden="true">
              <div className="relative z-10 grid grid-cols-2 gap-4 p-4 border border-gray-800 bg-hunic-card/30 backdrop-blur clip-corner">
                <div className="col-span-2 aspect-video bg-gray-800/50 rounded flex items-center justify-center border border-gray-700">
                  <Activity className="text-hunic-cyan w-16 h-16 animate-pulse" />
                </div>
                <div className="aspect-square bg-gray-800/50 rounded flex items-center justify-center border border-gray-700">
                  <Code className="text-blue-500 w-12 h-12" />
                </div>
                <div className="aspect-square bg-gray-800/50 rounded flex items-center justify-center border border-gray-700">
                  <Cpu className="text-purple-500 w-12 h-12" />
                </div>
              </div>
              <div className="absolute -inset-4 bg-hunic-cyan/20 blur-xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-hunic-dark relative" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-hunic-cyan font-bold tracking-widest uppercase mb-3" id="services-heading">What We Do</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white">Services to Grow Your Business</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Layers, title: 'Website Development', desc: 'Professional, mobile-responsive websites that showcase your business and attract customers.' },
              { icon: Zap, title: 'SEO & Marketing', desc: 'Get found on Google with SEO optimization, content creation, and social media management.' },
              { icon: Shield, title: 'Hosting & Support', desc: 'Reliable hosting, email setup, and ongoing maintenance with professional support.' },
            ].map((item, i) => (
              <article key={i} className="p-8 border border-gray-800 hover:border-hunic-cyan/50 bg-hunic-card/20 transition-all duration-300 group">
                <item.icon className="w-12 h-12 text-hunic-cyan mb-6 group-hover:scale-110 transition-transform" aria-hidden="true" />
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-gray-400 mb-6">{item.desc}</p>
                <Link to="/services" className="text-sm font-bold uppercase tracking-wider text-hunic-cyan group-hover:underline decoration-2 underline-offset-4">Learn More</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-black border-y border-gray-800" aria-labelledby="value-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6" id="value-heading">Why Choose Hunic Solutions?</h3>
              <p className="text-gray-400 text-lg mb-8">
                We're a local web development partner dedicated to helping small businesses succeed online. Professional quality, personal service, and affordable pricing.
              </p>
              <ul className="space-y-4" role="list">
                {[
                  'Custom designs that reflect your brand',
                  'Mobile-responsive and fast-loading',
                  'Ongoing support and maintenance',
                  'Transparent pricing with no hidden fees'
                ].map((point, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-hunic-cyan mr-4" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link to="/about" className="inline-block border-b border-hunic-cyan text-white pb-1 hover:text-hunic-cyan transition-colors">More about our philosophy</Link>
              </div>
            </div>
            <div className="relative" aria-hidden="true">
              <div className="grid grid-cols-2 gap-4">
                 <div className="bg-gray-800 h-48 w-full clip-corner flex flex-col items-center justify-center border border-gray-700 hover:border-hunic-cyan transition-colors">
                    <span className="text-4xl font-bold text-white mb-2">100+</span>
                    <span className="text-gray-400 text-sm uppercase tracking-wide">Websites Built</span>
                 </div>
                 <div className="bg-gray-800 h-48 w-full clip-corner flex flex-col items-center justify-center border border-gray-700 hover:border-hunic-cyan transition-colors mt-8">
                    <span className="text-4xl font-bold text-white mb-2">5★</span>
                    <span className="text-gray-400 text-sm uppercase tracking-wide">Average Rating</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-24 bg-black/40 border-y border-gray-800" aria-labelledby="pricing-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-hunic-cyan font-bold tracking-widest uppercase mb-3" id="pricing-heading">Transparent Pricing</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">Simple Plans, No Surprises</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            {/* Setup Fee */}
            <div className="bg-hunic-card border border-gray-800 p-8 text-center">
              <div className="text-4xl font-bold text-white mb-2">$1,000</div>
              <div className="text-hunic-cyan font-bold uppercase tracking-wider mb-4">One-Time Setup</div>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>Custom website design</li>
                <li>Full development</li>
                <li>Initial SEO setup</li>
              </ul>
            </div>

            {/* Essential Plan */}
            <div className="bg-hunic-card border border-gray-800 p-8 text-center">
              <div className="text-5xl font-bold text-hunic-cyan mb-2">$50</div>
              <div className="text-white font-bold uppercase tracking-wider mb-4">/month</div>
              <div className="text-gray-300 mb-4">Essential</div>
              <ul className="text-sm text-gray-400 space-y-2 text-left">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-hunic-cyan mr-2 mt-0.5 flex-shrink-0" />
                  <span>Hosting & Email</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-hunic-cyan mr-2 mt-0.5 flex-shrink-0" />
                  <span>Contact Forms</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-hunic-cyan mr-2 mt-0.5 flex-shrink-0" />
                  <span>Basic SEO</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-hunic-cyan mr-2 mt-0.5 flex-shrink-0" />
                  <span>1hr Dev Work</span>
                </li>
              </ul>
            </div>

            {/* Professional Plan */}
            <div className="bg-gradient-to-br from-hunic-cyan/10 to-blue-600/10 border-2 border-hunic-cyan p-8 text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-hunic-cyan text-hunic-dark text-xs font-bold uppercase tracking-wider px-3 py-1">
                Popular
              </div>
              <div className="text-5xl font-bold text-hunic-cyan mb-2">$100</div>
              <div className="text-white font-bold uppercase tracking-wider mb-4">/month</div>
              <div className="text-gray-300 mb-4">Professional</div>
              <ul className="text-sm text-gray-400 space-y-2 text-left">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-hunic-cyan mr-2 mt-0.5 flex-shrink-0" />
                  <span>Everything in Essential</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-hunic-cyan mr-2 mt-0.5 flex-shrink-0" />
                  <span>Monthly Blog Posts</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-hunic-cyan mr-2 mt-0.5 flex-shrink-0" />
                  <span>Social Media Posts</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-hunic-cyan mr-2 mt-0.5 flex-shrink-0" />
                  <span>Review Management</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-hunic-cyan mr-2 mt-0.5 flex-shrink-0" />
                  <span>Analytics & Reporting</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center text-hunic-cyan font-bold uppercase tracking-wider hover:text-white transition-colors">
              View Full Pricing Details <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden" aria-labelledby="cta-heading">
         <div className="absolute inset-0 bg-hunic-cyan/5" aria-hidden="true"></div>
         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" id="cta-heading">Ready to grow your business online?</h2>
            <p className="text-xl text-gray-400 mb-10">
              Get a free consultation and quote. Let's discuss how we can help you succeed online.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="px-8 py-4 bg-hunic-cyan text-hunic-dark font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 clip-corner">
                Get Started Today
              </Link>
            </div>
         </div>
      </section>
    </>
  );
};

export default Home;
