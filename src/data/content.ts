import { ServiceData, Project, Testimonial, TeamMember } from '../types';

export const services: ServiceData[] = [
  {
    id: 'website-development',
    title: 'Website Development',
    shortDescription: 'Professional, mobile-responsive websites built for your business.',
    fullDescription: 'We create beautiful, fast-loading websites that work flawlessly on all devices. From simple business sites to complex e-commerce platforms, we build professional web presences that help you connect with customers and grow your business online.',
    heroImage: 'https://picsum.photos/id/1/1200/600',
    painPoints: [
      'Need a professional online presence',
      'Current website looks outdated',
      'Website doesn\'t work well on mobile',
      'Difficult to update content yourself'
    ],
    features: [
      'Mobile-Responsive Design',
      'Fast Loading Speeds',
      'Easy Content Management',
      'Contact Forms & Integration'
    ],
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    benefits: [
      'Professional online presence',
      'Works perfectly on all devices',
      'Easy to update and maintain'
    ],
    industries: ['Small Business', 'Contractors', 'Professional Services', 'Retail']
  },
  {
    id: 'seo-services',
    title: 'SEO & Digital Marketing',
    shortDescription: 'Get found online with comprehensive SEO services.',
    fullDescription: 'Search Engine Optimization helps your business show up when customers search for your services. We optimize your website, manage your online presence, create content, and track your rankings so you can attract more customers organically.',
    heroImage: 'https://picsum.photos/id/2/1200/600',
    painPoints: [
      'Not showing up in Google searches',
      'Competitors ranking higher than you',
      'Not getting enough website traffic',
      'Unsure how to improve online visibility'
    ],
    features: [
      'Google Business Profile Management',
      'Keyword Research & Optimization',
      'Monthly Blog Posts',
      'Social Media Marketing',
      'Review Management',
      'Analytics & Reporting'
    ],
    techStack: ['Google Analytics', 'Google Search Console', 'SEMrush', 'Social Media'],
    benefits: [
      'Increase website traffic',
      'Rank higher in search results',
      'Attract more qualified leads'
    ],
    industries: ['Local Business', 'E-commerce', 'Services', 'Healthcare']
  },
  {
    id: 'hosting-maintenance',
    title: 'Website Hosting & Maintenance',
    shortDescription: 'Reliable hosting with professional support and maintenance.',
    fullDescription: 'Keep your website running smoothly with our hosting and maintenance packages. We handle all the technical details including security updates, backups, uptime monitoring, and email setup so you can focus on your business.',
    heroImage: 'https://picsum.photos/id/60/1200/600',
    painPoints: [
      'Website down or loading slowly',
      'Security concerns and hacking',
      'Need professional email addresses',
      'Don\'t know who to call when problems arise'
    ],
    features: [
      'Fast, Secure Hosting',
      'Daily Automated Backups',
      'Professional Email Setup',
      'Security Monitoring',
      'Monthly Maintenance & Updates',
      'Priority Support'
    ],
    techStack: ['Cloudflare', 'AWS', 'cPanel', 'SSL Certificates'],
    benefits: [
      'Peace of mind your site is secure',
      'Fast, reliable performance',
      'Professional support when you need it'
    ],
    industries: ['All Business Types']
  }
];

export const portfolio: Project[] = [
  {
    id: '1',
    title: 'Nova FinTech Dashboard',
    category: 'Web App',
    description: 'A real-time financial analytics platform processing millions of transactions daily.',
    image: 'https://picsum.photos/id/445/800/600',
    tech: ['React', 'D3.js', 'Python']
  },
  {
    id: '2',
    title: 'Orbit Logistics Tracker',
    category: 'Custom Software',
    description: 'End-to-end supply chain management system with IoT integration.',
    image: 'https://picsum.photos/id/119/800/600',
    tech: ['Node.js', 'MongoDB', 'IoT']
  },
  {
    id: '3',
    title: 'Aura Health PWA',
    category: 'Web Development',
    description: 'Progressive Web App for patient scheduling and telemedicine.',
    image: 'https://picsum.photos/id/237/800/600',
    tech: ['Vue.js', 'WebRTC', 'Firebase']
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'CTO',
    company: 'ConstructFlow',
    quote: 'Hunic Solutions completely overhauled our legacy ERP. Their attention to detail and technical expertise is unmatched in the industry.',
    industry: 'Construction'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder',
    company: 'Apex Trading',
    quote: 'The automation tools they built for us saved our team 40 hours a week. Truly transformative technology.',
    industry: 'Finance'
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Director of Ops',
    company: 'GreenStream HVAC',
    quote: 'Professional, timely, and futuristic. Our new customer portal has increased client satisfaction scores by 25%.',
    industry: 'HVAC'
  }
];

export const team: TeamMember[] = [
  {
    name: 'Alex Mercer',
    role: 'CEO & Lead Architect',
    bio: 'Former Systems Engineer with 15 years experience in scalable infrastructure.',
    image: 'https://picsum.photos/id/1005/400/400'
  },
  {
    name: 'Samantha Vance',
    role: 'Head of Engineering',
    bio: 'Expert in distributed systems and scalable backend architecture.',
    image: 'https://picsum.photos/id/338/400/400'
  },
  {
    name: 'David Kovač',
    role: 'Senior Frontend Engineer',
    bio: 'Expert in React ecosystem and high-performance UI/UX design.',
    image: 'https://picsum.photos/id/64/400/400'
  }
];
