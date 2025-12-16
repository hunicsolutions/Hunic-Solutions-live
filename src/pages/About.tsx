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
        description="A collective of engineers, designers, and strategists dedicated to digital perfection. Learn about Hunic Solutions' mission and team."
        keywords="about hunic solutions, software development team, technology partner, digital innovation"
        canonicalUrl="https://hunicsolutions.com/about"
      />
      <WebPageSchema 
        name="About Hunic Solutions"
        description="Founded in 2018, Hunic Solutions is a technology partner that prioritizes code quality, security, and long-term scalability."
        url="https://hunicsolutions.com/about"
      />
      
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-hunic-dark border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 text-white tracking-tight">Who We Are</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A collective of engineers, designers, and strategists dedicated to digital perfection.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="prose prose-invert prose-lg">
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-gray-400">
                Founded in 2018, Hunic Solutions emerged from a frustration with "good enough" software. We saw businesses struggling with bloated templates, insecure plugins, and disconnected data systems.
              </p>
              <p className="text-gray-400 mt-4">
                We set out to build a different kind of technology partner—one that prioritizes code quality, security, and long-term scalability over quick fixes. Today, we serve clients ranging from agile startups to established enterprises, helping them navigate the complex digital landscape with confidence.
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
              <p className="text-gray-400 text-sm">To empower organizations through robust, scalable, and intuitive technology solutions that drive measurable growth.</p>
            </div>
            <div className="p-8 bg-hunic-card border border-gray-800 hover:border-hunic-cyan transition-colors">
              <Eye className="w-10 h-10 text-hunic-cyan mb-4" />
              <h3 className="text-xl font-bold mb-2">Our Vision</h3>
              <p className="text-gray-400 text-sm">A digital world where software is seamless, secure, and accessible to businesses of all sizes.</p>
            </div>
            <div className="p-8 bg-hunic-card border border-gray-800 hover:border-hunic-cyan transition-colors">
              <Heart className="w-10 h-10 text-hunic-cyan mb-4" />
              <h3 className="text-xl font-bold mb-2">Our Values</h3>
              <p className="text-gray-400 text-sm">Transparency in code, integrity in business, and relentless innovation in every project we touch.</p>
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
