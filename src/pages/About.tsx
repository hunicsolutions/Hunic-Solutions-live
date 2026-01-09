import React from 'react';
import { team } from '../data/content';
import { Target, Eye, Heart } from 'lucide-react';
import { SEO } from '../components/SEO';
import { WebPageSchema } from '../components/Schema';

const About: React.FC = () => {
  return (
    <div className="bg-hunic-dark min-h-screen">
      <SEO 
        title="About Us"
        description="Hunic Solutions is a web development company dedicated to helping small businesses succeed online with professional websites, SEO, and reliable hosting."
        keywords="about hunic solutions, web development company, small business websites, local web developer"
        canonicalUrl="https://hunicsolutions.com/about"
      />
      <WebPageSchema 
        name="About Hunic Solutions"
        description="Hunic Solutions helps small businesses establish and grow their online presence with professional website development and digital marketing."
        url="https://hunicsolutions.com/about"
      />
      
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-hunic-dark border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 text-white tracking-tight">About Us</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Helping small businesses succeed online with professional websites and digital marketing.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="prose prose-invert prose-lg">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-400">
                At Hunic Solutions, we believe every small business deserves a professional online presence. We're passionate about helping local businesses compete in the digital marketplace with affordable, high-quality websites and effective SEO strategies.
              </p>
              <p className="text-gray-400 mt-4">
                Unlike big agencies that treat you like a number, we provide personalized service and build lasting relationships with our clients. Your success is our success, and we're committed to helping you grow.
              </p>
            </div>
            <div className="relative h-80 w-full bg-gray-800 clip-corner overflow-hidden border border-gray-700">
               <img src="https://picsum.photos/id/3/800/600" alt="Hunic Office" className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-black/40 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-hunic-card border border-gray-800 hover:border-hunic-cyan transition-colors">
              <Target className="w-10 h-10 text-hunic-cyan mb-4" />
              <h3 className="text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-gray-400 text-sm">To help small businesses thrive online with professional websites and effective digital marketing.</p>
            </div>
            <div className="p-8 bg-hunic-card border border-gray-800 hover:border-hunic-cyan transition-colors">
              <Eye className="w-10 h-10 text-hunic-cyan mb-4" />
              <h3 className="text-xl font-bold mb-2">Our Vision</h3>
              <p className="text-gray-400 text-sm">Every business, regardless of size, having access to quality web development and digital marketing services.</p>
            </div>
            <div className="p-8 bg-hunic-card border border-gray-800 hover:border-hunic-cyan transition-colors">
              <Heart className="w-10 h-10 text-hunic-cyan mb-4" />
              <h3 className="text-xl font-bold mb-2">Our Values</h3>
              <p className="text-gray-400 text-sm">Transparency, quality craftsmanship, and building long-term relationships with our clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="group text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden clip-corner border-2 border-gray-700 group-hover:border-hunic-cyan transition-colors">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-hunic-cyan text-sm uppercase tracking-wide mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm max-w-xs mx-auto">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
