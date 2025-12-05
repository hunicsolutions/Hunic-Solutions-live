import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Shield, Cpu, Zap, Activity, Layers } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center tech-grid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-hunic-dark via-hunic-dark/95 to-black z-0" />
        <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-hunic-cyan/10 blur-[120px] rounded-full" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 px-3 py-1 border border-hunic-cyan/30 bg-hunic-cyan/5 text-hunic-cyan text-xs font-bold uppercase tracking-widest clip-corner">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span>Accepting New Clients</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
                Architecting <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-hunic-cyan to-blue-600">Digital Futures</span>
              </h1>
              
              <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
                Hunic Solutions empowers forward-thinking businesses with enterprise-grade software, AI automation, and high-performance digital infrastructure.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="px-8 py-4 bg-hunic-cyan text-hunic-dark font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 clip-corner flex items-center group">
                  Get a Quote <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/portfolio" className="px-8 py-4 bg-transparent border border-gray-600 text-white font-bold uppercase tracking-wider hover:border-hunic-cyan hover:text-hunic-cyan transition-all duration-300 clip-corner">
                  View Work
                </Link>
              </div>
            </div>
            
            <div className="hidden md:block relative">
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
      <section className="py-24 bg-hunic-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-hunic-cyan font-bold tracking-widest uppercase mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white">Engineering Excellence</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Layers, title: 'Web Development', desc: 'Performance-obsessed websites and web apps tailored for scalability.' },
              { icon: Zap, title: 'AI & Automation', desc: 'Intelligent algorithms to automate workflows and enhance decision making.' },
              { icon: Shield, title: 'Secure Hosting', desc: 'Enterprise-grade infrastructure management and 24/7 security monitoring.' },
            ].map((item, i) => (
              <div key={i} className="p-8 border border-gray-800 hover:border-hunic-cyan/50 bg-hunic-card/20 transition-all duration-300 group">
                <item.icon className="w-12 h-12 text-hunic-cyan mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-gray-400 mb-6">{item.desc}</p>
                <Link to="/services" className="text-sm font-bold uppercase tracking-wider text-hunic-cyan group-hover:underline decoration-2 underline-offset-4">Explore</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-black border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Why Hunic Solutions?</h3>
              <p className="text-gray-400 text-lg mb-8">
                In a world of template-based agencies, we are engineers. We don't just drag-and-drop; we write robust, scalable code designed to grow with your business.
              </p>
              <ul className="space-y-4">
                {[
                  'Custom architecture, no bloatware',
                  'Security-first development lifecycle',
                  'Dedicated post-launch support',
                  'Data-driven design decisions'
                ].map((point, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-hunic-cyan mr-4" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link to="/about" className="inline-block border-b border-hunic-cyan text-white pb-1 hover:text-hunic-cyan transition-colors">More about our philosophy</Link>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                 <div className="bg-gray-800 h-48 w-full clip-corner flex flex-col items-center justify-center border border-gray-700 hover:border-hunic-cyan transition-colors">
                    <span className="text-4xl font-bold text-white mb-2">98%</span>
                    <span className="text-gray-400 text-sm uppercase tracking-wide">Client Retention</span>
                 </div>
                 <div className="bg-gray-800 h-48 w-full clip-corner flex flex-col items-center justify-center border border-gray-700 hover:border-hunic-cyan transition-colors mt-8">
                    <span className="text-4xl font-bold text-white mb-2">150+</span>
                    <span className="text-gray-400 text-sm uppercase tracking-wide">Projects Shipped</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-hunic-cyan/5"></div>
         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to upgrade your technology?</h2>
            <p className="text-xl text-gray-400 mb-10">
              Schedule a free technical consultation. No sales pressure, just engineering solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="px-8 py-4 bg-hunic-cyan text-hunic-dark font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 clip-corner">
                Book a Consult
              </Link>
            </div>
         </div>
      </section>
    </>
  );
};

export default Home;
