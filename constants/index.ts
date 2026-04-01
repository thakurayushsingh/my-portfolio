
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "AWS",
    image: "aws.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "GitHub",
    image: "github.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Kubernetes",
    image: "kubernetes.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Azure",
    image: "azure.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Python",
    image: "python.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Linux",
    image: "linux.svg",
    width: 80,
    height: 80,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/thakurayushsingh/",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://x.com/thakurayushsi",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/ayush-singh-b5a7b2257/",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "C++",
    image: "cpp.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "C",
    image: "c.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "GitHub Actions",
    image: "githubactions.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Jenkins",
    image: "jenkins.svg",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL: { skill_name: string; image: string; width: number; height: number }[] = [] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "Terraform",
    image: "terraform.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Vercel",
    image: "vercel.svg",
    width: 70,
    height: 70,
  },
] as const;

export const OTHER_SKILL: { skill_name: string; image: string; width: number; height: number }[] = [] as const;

export const PROJECTS = [
  {
    title: "AI Powered Performance Analyzer for OS Processes",
    date: "Jan 2025",
    image: "/projects/project-1.png",
    bullets: [
      "Systematized an AI-powered performance analyzer to monitor and optimize OS processes in real time.",
      "Implemented machine learning models to detect anomalies and predict resource usage trends.",
      "Built a web-based dashboard for visualization using Python and HTML/CSS/JS.",
      "Integrated system-level data collection using psutil and automated process insights generation.",
    ],
    tech: "Python, Machine Learning, psutil, HTML/CSS/JS, Data Visualization",
    link: "https://github.com/thakurayushsingh",
  },
  {
    title: "CrowdSense – Real-Time Crowd Monitoring Platform",
    date: "Oct 2025 – Dec 2025",
    image: "/projects/project-2.png",
    bullets: [
      "Designed and developed a real-time crowd monitoring platform enabling users to visualize crowd density through interactive maps, resulting in a 30% improvement in situational awareness.",
      "Engineered real-time, event-driven data pipelines with geospatial querying to deliver live location-based insights, increasing user engagement by 25%.",
      "Enhanced system performance by optimizing data queries, API response handling, and rendering pipelines — achieving a 45% improvement in real-time data visualization speed.",
    ],
    tech: "React (Vite), Tailwind CSS, Java, Spring Boot, MongoDB, Spring Security, Docker, Render, Vercel",
    link: "https://github.com/thakurayushsingh",
  },
  {
    title: "VeriScan – Password Strength Checker API",
    date: "Jun 2025 – Oct 2025",
    image: "/projects/project-3.png",
    bullets: [
      "Developed a serverless API to evaluate password strength using character analysis, length validation, and common password detection.",
      "Implemented personal data checks and score-based feedback to enhance password security.",
      "Deployed using AWS Lambda and API Gateway for scalable and secure access.",
    ],
    tech: "Python, AWS Lambda, API Gateway",
    link: "https://github.com/thakurayushsingh/VeriScan",
  },
] as const;

export const FOOTER_DATA: Array<{
  title: string;
  data: Array<{
    name: string;
    icon: any;
    link: string;
  }>;
}> = [];

export const NAV_LINKS = [
  {
    title: "About",
    link: "#about-me",
  },
  {
    title: "Education",
    link: "#education",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Certifications",
    link: "#certifications",
  },
  {
    title: "Training",
    link: "#training",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/thakurayushsingh",
};
