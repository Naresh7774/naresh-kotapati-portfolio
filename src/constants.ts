import { Project, Skill, Certificate, Education, Training } from './types';

export const PERSONAL_INFO = {
  name: "Naresh Kotapati",
  role: "Aspiring Cloud/DevOps Engineer",
  email: "kotapatinaresh100@gmail.com",
  phone: "+91-9849944493",
  location: "Nellore, Andhra Pradesh, India",
  linkedin: "https://www.linkedin.com/in/naresh-kotapati",
  github: "https://github.com/Naresh7774",
  summary: "I am a B.Tech 3rd-year student passionate about Cloud Computing, AWS, and DevOps. I have hands-on experience with AWS services like EC2, S3, VPC, IAM, Load Balancers, CloudWatch, and RDS. I also work with DevOps tools such as Linux, Git, Docker, Jenkins, Kubernetes, and Terraform. I enjoy building cloud architectures, automating deployments, creating CI/CD pipelines, and working on real-time labs and projects."
};

export const SKILLS: Skill[] = [
  {
    category: "Languages",
    items: ["Python", "Basic Java", "C", "JavaScript"]
  },
  {
    category: "Frameworks",
    items: ["HTML", "CSS", "NodeJS"]
  },
  {
    category: "Tools & Platforms",
    items: ["Linux", "Shell script", "Ansible", "Terraform", "Docker", "Kubernetes", "Jenkins", "AWS (EC2, S3, VPC, IAM, RDS)"]
  },
  {
    category: "Soft Skills",
    items: ["Problem-Solving", "Team Player", "Adaptability"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Qi Enabler – Wireless Charging Web Application",
    date: "Feb 2025",
    link: "https://github.com/Naresh7774/QI-enabler",
    description: [
      "Developed a responsive Qi Enabler website using HTML, CSS, Bootstrap, and AngularJS.",
      "Implemented a dynamic contact form module using AngularJS two-way data binding.",
      "Built an interactive UI with features like carousel sliders and animations.",
      "Designed and integrated a backend-ready data display page."
    ]
  },
  {
    title: "India Tourism Web Application",
    date: "April 2024",
    link: "https://github.com/Naresh7774/indian-tourism",
    description: [
      "Developed a responsive tourism website showcasing major Indian destinations.",
      "Implemented interactive UI components such as image galleries and destination cards.",
      "Organized content using a clean folder structure and reusable components.",
      "Optimized the website for fast loading and mobile compatibility."
    ]
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    name: "Complete Oracle Cloud Infrastructure DevOps",
    date: "October 2025",
    link: "https://drive.google.com/file/d/1uSj7kr9QG1T1PaK97-R_ePe4p1CiEiPH/view?usp=sharing"
  },
  {
    name: "Docker Foundations Professional Certificate",
    date: "November 2025",
    link: "https://drive.google.com/file/d/1BjrfachhBf_A0Enfjgdb0L550y5u6crA/view?usp=sharing"
  },
  {
    name: "C Programming Certificate",
    date: "May 2024",
    link: "#"
  },
  {
    name: "Computer Communications Specialization",
    date: "November 2024",
    link: "#"
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    period: "August 2023 - August 2027",
    location: "Punjab, India",
    score: "CGPA: 6.1"
  },
  {
    institution: "Ravindra Bharathi Junior College",
    degree: "Intermediate",
    period: "June 2021 - March 2023",
    location: "Nellore, Andhra Pradesh",
    score: "92.7%"
  },
  {
    institution: "Nagarjuna School",
    degree: "Matriculation",
    period: "June 2020 - April 2021",
    location: "Nellore, Andhra Pradesh",
    score: "99%"
  }
];

export const TRAINING: Training[] = [
  {
    title: "Data structures and algorithms using Java",
    period: "June 2025 - July 2025",
    highlights: [
      "Java fundamentals: syntax, data types, control flow, and loops.",
      "Object-Oriented Programming concepts: classes, inheritance, polymorphism.",
      "Data Structures: arrays, linked lists, stacks, queues, and tree traversal.",
      "Additional concepts: recursion, static members, and Java Time API."
    ]
  }
];
