export type PortfolioMode = "dev" | "writer";

export interface ProjectItem {
  title: string;
  description: string;
  type: string;
  techs: string[];
}

export interface ArticleItem {
  category: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface ExpertiseItem {
  icon: string;
  title: string;
  description: string;
  skills: string[];
}

export interface TestimonialItem {
  company: string;
  type: string;
  quote: string;
  author: string;
  initial: string;
  bgColor: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}