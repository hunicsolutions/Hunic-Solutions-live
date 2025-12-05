export interface ServiceData {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  painPoints: string[];
  features: string[];
  techStack: string[];
  benefits: string[];
  industries: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  industry: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}
