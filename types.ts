
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  target: string;
  painPoints: string[];
  features: string[];
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export enum Section {
  Home = 'home',
  About = 'about',
  Services = 'services',
  Experience = 'experience',
  FAQ = 'faq',
  Contact = 'contact',
  AIStore = 'aistore'
}
