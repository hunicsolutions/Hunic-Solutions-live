import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/content';
import { ArrowRight, CheckCircle, Check } from 'lucide-react';
import { SEO } from '../components/SEO';
import { WebPageSchema } from '../components/Schema';

const Services: React.FC = () => {
  return (
    <div className="bg-hunic-dark min-h-screen">
      <SEO 
        title="Services"
        description="Professional website development, SEO services, and reliable hosting for small businesses. Custom websites, search engine optimization, and ongoing support."
        keywords="website development, SEO services, web hosting, small business websites, search engine optimization"
        canonicalUrl="https://hunicsolutions.com/services"
      />
      <WebPageSchema 
        name="Services - Hunic Solutions"
        description="Professional website development, SEO services, and reliable hosting for small businesses."
        url="https://hunicsolutions.com/services"
      />
      
       <section className="py-20 bg-hunic-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">Our Services</h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Professional web solutions designed to help your business thrive online.
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

      {/* Pricing Section */}
      <section className="py-24 bg-black/40 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-hunic-cyan font-bold tracking-widest uppercase mb-3">Simple Pricing</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">Affordable Plans for Every Business</h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Start with $1,000 and choose the monthly plan that fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-hunic-card border-2 border-gray-800 hover:border-hunic-cyan/50 transition-all duration-300 p-8 clip-corner">
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-white mb-2">Essential</h4>
                <div className="flex items-baseline mb-4">
                  <span className="text-5xl font-bold text-hunic-cyan">$50</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <p className="text-gray-400">Perfect for businesses getting started online</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-hunic-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Website hosting included</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-hunic-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Professional email address setup</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-hunic-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Working contact page form</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-hunic-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Basic SEO setup with keywords</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-hunic-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">1 hour of web development work monthly</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-hunic-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Security updates & backups</span>
                </li>
              </ul>

              <Link 
                to="/contact" 
                className="block w-full text-center px-8 py-4 bg-transparent border-2 border-hunic-cyan text-hunic-cyan font-bold uppercase tracking-wider hover:bg-hunic-cyan hover:text-hunic-dark transition-all duration-300"
              >
                Get Started
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="bg-hunic-card border-2 border-hunic-cyan transition-all duration-300 p-8 clip-corner relative">
              <div className="absolute top-0 right-0 bg-hunic-cyan text-hunic-dark text-xs font-bold uppercase tracking-wider px-4 py-1">
                Most Popular
              </div>
              
              <div className="mb-8 mt-4">
                <h4 className="text-2xl font-bold text-white mb-2">Professional</h4>
                <div className="flex items-baseline mb-4">
                  <span className="text-5xl font-bold text-hunic-cyan">$100</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <p className="text-gray-400">Everything in Essential, plus SEO & marketing</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-hunic-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300"><strong className="text-white">All Essential features</strong></span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-hunic-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Google Business Profile post (1/month)</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-hunic-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Facebook marketing post (1/month)</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-hunic-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Professional blog post on website (1/month)</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-hunic-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Review management & responses</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-hunic-cyan mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Rybbit analytics & reporting</span>
                </li>
              </ul>

              <Link 
                to="/contact" 
                className="block w-full text-center px-8 py-4 bg-hunic-cyan text-hunic-dark font-bold uppercase tracking-wider hover:bg-white transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 text-lg mb-4">
              <strong className="text-white">$1,000 one-time setup fee</strong> covers custom website design, development, and initial SEO configuration
            </p>
            <p className="text-gray-500 text-sm">
              All plans include SSL certificate, mobile-responsive design, and ongoing support. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Pricing Breakdown */}
      <section className="py-24 bg-hunic-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-hunic-cyan font-bold tracking-widest uppercase mb-3">What's Included</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">Complete Pricing Breakdown</h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to know about our pricing and what you get
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* One-Time Setup Details */}
            <div className="bg-hunic-card border border-gray-800 p-8 clip-corner">
              <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-hunic-cyan mr-3">$1,000</span> One-Time Setup Fee
              </h4>
              <p className="text-gray-400 mb-6">
                This one-time investment covers everything needed to launch your professional online presence:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-hunic-cyan mr-3 mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-white">Custom Website Design</strong>
                    <p className="text-sm text-gray-400">Tailored to your brand and business needs</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-hunic-cyan mr-3 mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-white">Full Development</strong>
                    <p className="text-sm text-gray-400">5-8 pages of professional content and functionality</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-hunic-cyan mr-3 mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-white">Mobile Responsive</strong>
                    <p className="text-sm text-gray-400">Perfect display on all devices and screen sizes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-hunic-cyan mr-3 mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-white">SEO Foundation</strong>
                    <p className="text-sm text-gray-400">Keywords, meta tags, and Google Business setup</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-hunic-cyan mr-3 mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-white">SSL Certificate</strong>
                    <p className="text-sm text-gray-400">Secure HTTPS for customer trust and SEO</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-hunic-cyan mr-3 mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-white">Content Integration</strong>
                    <p className="text-sm text-gray-400">We'll work with you to create compelling content</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Monthly Plan Comparison */}
            <div className="bg-hunic-card border border-gray-800 p-8 clip-corner">
              <h4 className="text-2xl font-bold text-white mb-6">Monthly Plan Details</h4>
              <p className="text-gray-400 mb-6">
                After your website launches, choose a monthly plan for ongoing support and growth:
              </p>
              
              <div className="space-y-6">
                <div className="border-l-4 border-hunic-cyan pl-4">
                  <h5 className="text-lg font-bold text-white mb-2">Essential Plan - $50/month</h5>
                  <p className="text-sm text-gray-400 mb-3">Perfect for maintaining your online presence</p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Reliable hosting and 99.9% uptime</li>
                    <li>• Professional email (yourname@yourdomain.com)</li>
                    <li>• Working contact forms with email delivery</li>
                    <li>• Basic SEO maintenance and updates</li>
                    <li>• 1 hour of development work per month</li>
                    <li>• Automatic backups and security updates</li>
                    <li>• Email and phone support</li>
                  </ul>
                </div>

                <div className="border-l-4 border-hunic-cyan pl-4 bg-hunic-cyan/5 py-4">
                  <h5 className="text-lg font-bold text-white mb-2">Professional Plan - $100/month</h5>
                  <p className="text-sm text-gray-400 mb-3">Everything in Essential, plus active marketing</p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• All Essential plan features included</li>
                    <li>• 1 Google Business Profile post per month</li>
                    <li>• 1 Facebook business page post per month</li>
                    <li>• 1 professional blog article per month (SEO-optimized)</li>
                    <li>• Review monitoring and professional responses</li>
                    <li>• Monthly analytics reports with Rybbit</li>
                    <li>• Priority support and faster turnaround</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold text-white mb-8 text-center">Pricing FAQs</h4>
            <div className="space-y-6">
              <div className="bg-hunic-card border border-gray-800 p-6 clip-corner">
                <h5 className="text-lg font-bold text-white mb-2">Can I cancel my monthly plan?</h5>
                <p className="text-gray-400">
                  Yes, you can cancel anytime with 30 days notice. No long-term contracts or cancellation fees. Your website and domain remain yours.
                </p>
              </div>

              <div className="bg-hunic-card border border-gray-800 p-6 clip-corner">
                <h5 className="text-lg font-bold text-white mb-2">What happens to my website if I cancel?</h5>
                <p className="text-gray-400">
                  You own your website and domain. If you cancel, we'll provide all files and help you migrate to another host. Your investment is protected.
                </p>
              </div>

              <div className="bg-hunic-card border border-gray-800 p-6 clip-corner">
                <h5 className="text-lg font-bold text-white mb-2">Can I upgrade or downgrade my plan?</h5>
                <p className="text-gray-400">
                  Absolutely! You can switch between Essential and Professional plans anytime. Changes take effect the following billing cycle.
                </p>
              </div>

              <div className="bg-hunic-card border border-gray-800 p-6 clip-corner">
                <h5 className="text-lg font-bold text-white mb-2">What if I need more than 1 hour of development per month?</h5>
                <p className="text-gray-400">
                  Additional development work is available at $100/hour. We'll always get your approval before doing extra work beyond your monthly allowance.
                </p>
              </div>

              <div className="bg-hunic-card border border-gray-800 p-6 clip-corner">
                <h5 className="text-lg font-bold text-white mb-2">Do you offer payment plans for the setup fee?</h5>
                <p className="text-gray-400">
                  Yes! We offer flexible payment arrangements. Contact us to discuss a payment plan that works for your budget—typically split over 2-4 months.
                </p>
              </div>

              <div className="bg-hunic-card border border-gray-800 p-6 clip-corner">
                <h5 className="text-lg font-bold text-white mb-2">Are there any hidden fees?</h5>
                <p className="text-gray-400">
                  No hidden fees! The setup fee and monthly plan are all-inclusive. Domain registration (typically $15-20/year) is the only additional cost if you need us to register a new domain.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-400 text-lg mb-6">Have more questions about pricing?</p>
            <Link 
              to="/contact" 
              className="inline-block px-8 py-4 bg-hunic-cyan text-hunic-dark font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 clip-corner"
            >
              Contact Us for a Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
