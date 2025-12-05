import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Code, Server, Cpu, Database, Layout as LayoutIcon, Zap, Globe, Mail, MapPin, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-hunic-dark/90 backdrop-blur-md border-b border-hunic-cyan/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-hunic-cyan text-hunic-dark flex items-center justify-center font-bold text-xl rounded-sm clip-corner group-hover:bg-white transition-colors">
              H
            </div>
            <span className="text-2xl font-bold tracking-tighter text-white">HUNIC<span className="text-hunic-cyan">.</span>SOLUTIONS</span>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium tracking-wide uppercase transition-colors hover:text-hunic-cyan ${location.pathname === link.path ? 'text-hunic-cyan' : 'text-gray-300'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="ml-4 px-6 py-2 bg-transparent border border-hunic-cyan text-hunic-cyan text-sm font-bold uppercase tracking-wider hover:bg-hunic-cyan hover:text-hunic-dark transition-all duration-300 clip-corner">
                Start Project
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-hunic-cyan">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-hunic-dark border-b border-hunic-cyan/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-4 text-base font-medium text-gray-300 hover:text-hunic-cyan hover:bg-hunic-card"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-hunic-cyan text-hunic-dark flex items-center justify-center font-bold text-sm clip-corner">H</div>
              <span className="text-xl font-bold tracking-tighter text-white">HUNIC<span className="text-hunic-cyan">.</span></span>
            </div>
            <p className="text-sm leading-relaxed">
              Forging the future of digital business with high-performance software, AI integration, and strategic innovation.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services/website-development" className="hover:text-hunic-cyan transition-colors">Web Development</Link></li>
              <li><Link to="/services/custom-software" className="hover:text-hunic-cyan transition-colors">Custom Software</Link></li>
              <li><Link to="/services/ai-automation" className="hover:text-hunic-cyan transition-colors">AI & Automation</Link></li>
              <li><Link to="/services/data-integrations" className="hover:text-hunic-cyan transition-colors">API Integration</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-hunic-cyan transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-hunic-cyan transition-colors">Portfolio</Link></li>
              <li><Link to="/testimonials" className="hover:text-hunic-cyan transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="hover:text-hunic-cyan transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center"><MapPin size={16} className="mr-3 text-hunic-cyan" /> 101 Tech Blvd, Innovation City</li>
              <li className="flex items-center"><Phone size={16} className="mr-3 text-hunic-cyan" /> +1 (555) 123-4567</li>
              <li className="flex items-center"><Mail size={16} className="mr-3 text-hunic-cyan" /> hello@hunic.solutions</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-xs flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Hunic Solutions. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-hunic-dark text-white selection:bg-hunic-cyan selection:text-hunic-dark">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};
