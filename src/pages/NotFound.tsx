import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { SEO } from '../components/SEO';

const NotFound: React.FC = () => {
  return (
    <>
      <SEO 
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist. Return to Hunic Solutions homepage."
        noIndex={true}
      />
      
      <section className="relative min-h-[80vh] flex items-center justify-center tech-grid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-hunic-dark via-hunic-dark/95 to-black z-0" aria-hidden="true" />
        <div className="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-hunic-cyan/10 blur-[120px] rounded-full" aria-hidden="true" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="space-y-8">
            {/* 404 Display */}
            <div className="relative">
              <h1 className="text-9xl md:text-[200px] font-bold text-hunic-cyan/20 select-none">
                404
              </h1>
            </div>
            
            {/* Error Message */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Page Not Found
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                The page you're looking for doesn't exist or has been moved. 
                Let's get you back on track.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link
                to="/"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-hunic-cyan to-hunic-blue rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-hunic-cyan/25 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Home className="w-5 h-5" />
                Go to Homepage
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-hunic-cyan/30 rounded-lg text-white font-semibold hover:bg-white/10 hover:border-hunic-cyan/50 transition-all duration-300"
              >
                View Our Services
              </Link>
            </div>
            
            {/* Helpful Links */}
            <div className="pt-12">
              <p className="text-gray-500 mb-4">You might be looking for:</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/about" className="text-hunic-cyan hover:text-hunic-blue transition-colors">
                  About
                </Link>
                <span className="text-gray-700">•</span>
                <Link to="/services" className="text-hunic-cyan hover:text-hunic-blue transition-colors">
                  Services
                </Link>
                {/* <span className="text-gray-700">•</span>
                <Link to="/portfolio" className="text-hunic-cyan hover:text-hunic-blue transition-colors">
                  Portfolio
                </Link>
                <span className="text-gray-700">•</span>
                <Link to="/testimonials" className="text-hunic-cyan hover:text-hunic-blue transition-colors">
                  Testimonials
                </Link> */}
                <span className="text-gray-700">•</span>
                <Link to="/contact" className="text-hunic-cyan hover:text-hunic-blue transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
