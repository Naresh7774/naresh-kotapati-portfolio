export interface Project {
  title: string;
  description: string[];
  link: string;
  date: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Certificate {
  name: string;
  date: string;
  link: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  score?: string;
}

export interface Training {
  title: string;
  period: string;
  highlights: string[];
}
