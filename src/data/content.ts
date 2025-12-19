import { ServiceData, Project, Testimonial, TeamMember } from '../types';

export const services: ServiceData[] = [
  {
    id: 'website-development',
    title: 'Website Development',
    shortDescription: 'High-performance, SEO-optimized websites tailored for growth.',
    fullDescription: 'We build more than just websites; we create digital experiences that drive conversions. Our development process merges aesthetic excellence with rigid technical performance standards to ensure your brand stands out in a crowded digital landscape.',
    heroImage: 'https://picsum.photos/id/1/1200/600',
    painPoints: [
      'Slow loading speeds driving customers away',
      'Outdated designs that hurt brand credibility',
      'Poor mobile responsiveness',
      'Complex CMS that is hard to manage'
    ],
    features: [
      'Responsive, Mobile-First Design',
      'SEO-Optimized Architecture',
      'Custom Headless CMS Integration',
      'Interactive WebGL Elements'
    ],
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js'],
    benefits: [
      'Increase conversion rates by up to 40%',
      'Lightning fast page loads under 1 second',
      'Full ownership of your code and assets'
    ],
    industries: ['E-commerce', 'Professional Services', 'Startups']
  },
  {
    id: 'hosting-maintenance',
    title: 'Hosting & Maintenance',
    shortDescription: 'Secure, scalable hosting with 24/7 proactive monitoring.',
    fullDescription: 'Stop worrying about server downtime, security patches, or backups. Hunic Solutions provides enterprise-grade infrastructure management so you can focus on running your business while we keep your digital assets secure and online.',
    heroImage: 'https://picsum.photos/id/2/1200/600',
    painPoints: [
      'Frequent downtime and server crashes',
      'Security vulnerabilities and hack fears',
      'Slow API response times',
      'Lack of technical support when things break'
    ],
    features: [
      '99.99% Uptime SLA',
      'Daily Automated Backups',
      'DDoS Protection & WAF',
      '24/7 Performance Monitoring'
    ],
    techStack: ['AWS', 'Docker', 'Kubernetes', 'Cloudflare', 'Redis'],
    benefits: [
      'Peace of mind with enterprise security',
      'Scale instantly during traffic spikes',
      'Predictable monthly costs'
    ],
    industries: ['SaaS', 'Healthcare', 'Finance']
  },
  {
    id: 'data-integrations',
    title: 'Data Integrations & API',
    shortDescription: 'Seamlessly connect your disparate software systems.',
    fullDescription: 'Data silos slow down decision-making. We architect robust API gateways and data pipelines that allow your CRM, ERP, and custom apps to talk to each other in real-time, creating a unified source of truth for your organization.',
    heroImage: 'https://picsum.photos/id/60/1200/600',
    painPoints: [
      'Manual data entry errors',
      'Disconnected software systems',
      'Lack of real-time business insights',
      'Inefficient workflows due to data toggling'
    ],
    features: [
      'Custom REST & GraphQL API Development',
      'Legacy System Modernization',
      'Real-time Webhook Implementation',
      'Secure OAuth2 Authentication'
    ],
    techStack: ['Python', 'GraphQL', 'PostgreSQL', 'Apache Kafka', 'Azure'],
    benefits: [
      'Automate 90% of manual data transfer',
      'Reduce operational errors',
      'Real-time reporting dashboards'
    ],
    industries: ['Logistics', 'Manufacturing', 'FinTech']
  },
  {
    id: 'custom-software',
    title: 'Custom Software Solutions',
    shortDescription: 'Tailor-made software to solve complex business problems.',
    fullDescription: 'Off-the-shelf software rarely fits perfectly. Hunic Solutions engineers bespoke platforms designed specifically for your operational workflows, giving you a competitive advantage that cannot be bought in a box.',
    heroImage: 'https://picsum.photos/id/20/1200/600',
    painPoints: [
      'Existing tools lack critical features',
      'Paying for bloated software you don\'t use',
      'Inability to scale processes',
      'Vendor lock-in constraints'
    ],
    features: [
      'Full-Cycle SDLC Management',
      'Scalable Microservices Architecture',
      'Cross-Platform Compatibility',
      'Enterprise-Grade Security'
    ],
    techStack: ['Java', '.NET Core', 'React Native', 'MongoDB', 'Go'],
    benefits: [
      'Own your intellectual property',
      'Workflow efficiency gains of 50%+',
      'Scales with your business growth'
    ],
    industries: ['Healthcare', 'Education', 'Real Estate']
  },
  {
    id: 'web-apps',
    title: 'Web Application Development',
    shortDescription: 'Powerful, desktop-class applications running in the browser.',
    fullDescription: 'We build Progressive Web Apps (PWAs) and Single Page Applications (SPAs) that offer the interactivity and performance of native desktop software, accessible from anywhere in the world without installation.',
    heroImage: 'https://picsum.photos/id/48/1200/600',
    painPoints: [
      'Users refusing to install mobile apps',
      'Inconsistent experience across devices',
      'High maintenance costs of native apps',
      'Slow rollout of feature updates'
    ],
    features: [
      'Offline Functionality (PWA)',
      'Real-time Collaboration Tools',
      'Push Notifications',
      'Hardware Acceleration'
    ],
    techStack: ['Vue.js', 'React', 'Firebase', 'WebSockets', 'IndexedDB'],
    benefits: [
      'Reduce development costs by targeting one platform',
      'Instant updates for all users',
      'Higher user retention rates'
    ],
    industries: ['Social Media', 'Productivity Tools', 'Entertainment']
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
