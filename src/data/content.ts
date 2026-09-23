import Headshot from "../assets/img/headshot.jpg";
import Lucerna from "../assets/img/lucerna.png";
import FSLogo from "../assets/img/fs_logo.svg";
import Kalpa from "../assets/img/kalpa.png";
import Cynerge from "../assets/img/cynerge.png";
import ClassBucksFull from "../assets/img/ClassbucksLogoFull.jpg";
import Theorem from "../assets/img/theorem.png";
import LAGalaxy from "../assets/img/LAGalaxy.png";
import LAGalaxyComponent from "../assets/img/LAGalaxyComponent.png";
import BlazersComponent from "../assets/img/blazersComponent.png";
import Trailblazers from "../assets/img/Trailblazers.png";
import Aflac from "../assets/img/Aflac.png";
import Epicodus from "../assets/img/Epicodus.png";
import DePaul from "../assets/img/depaul.png";
import WSU from "../assets/img/wsu.png";

export const profile = {
  name: "Joshua Forman",
  role: "Full-Stack Developer",
  location: "Portland, OR",
  email: "cyborgforman@gmail.com",
  github: "https://github.com/JPForman",
  linkedin: "https://www.linkedin.com/in/joshua-forman/",
  photo: Headshot,
  tagline:
    "I build full-stack web and mobile applications for education, government, and startup teams — and use AI-assisted workflows to ship them faster without cutting corners.",
  summary:
    "Full-stack developer with 6+ years building production web and mobile applications across education, government, and startup environments. Currently an Application Developer at Lucerna Digital, where I build customized client applications using React, Google Firebase, and PostgreSQL with a focus on clean architecture and rapid iteration. I design and maintain automated CI/CD pipelines, apply AI-assisted development tools including Claude Code and Cursor to accelerate feature delivery, and contribute to product strategy and customer outreach alongside the technical work.",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export type Experience = {
  company: string;
  role: string;
  location: string;
  dates: string;
  logo: string;
  url: string;
  invertLogoInLight?: boolean;
  bullets: string[];
  stack?: string;
};

export const experience: Experience[] = [
  {
    company: "Lucerna Digital",
    role: "Application Developer",
    location: "Detroit, MI",
    dates: "Nov 2025 – Present",
    logo: Lucerna,
    url: "https://www.lucernadigital.com/",
    invertLogoInLight: true,
    bullets: [
      "Build customized client applications using React, Google Firebase, and PostgreSQL with a focus on clean architecture and rapid iteration.",
      "Design and maintain automated CI/CD pipelines that reduce time to production and improve deployment reliability across client projects.",
      "Apply AI-assisted development tools including Claude Code and Cursor to accelerate feature delivery, improve code quality, and reduce review cycles.",
      "Contribute to product strategy, market research, and customer outreach, bridging technical execution with business goals.",
    ],
  },
  {
    company: "Cynerge Consulting",
    role: "Application Developer",
    location: "Pontiac, MI",
    dates: "Nov 2022 – Aug 2025",
    logo: Cynerge,
    url: "https://cynerge.com/",
    bullets: [
      "Smokejumper — Developed the Angular front-end for a federal mission-tracking system as part of the U.S. Forest Service and BLM Smokejumper modernization effort, working within a secure VPN environment with federal security clearance.",
      "Kalpa v4 — Led Angular front-end development of a professional development reporting system from inception, defining component architecture, building data visualization with ChartJS, and implementing AWS Cognito authentication with federated social sign-in.",
      "Keepsake — Built a cross-platform React Native proof-of-concept for iOS and Android, integrating native camera, video, and photo library APIs with cloud auth, file storage, and NoSQL persistence via AWS Amplify.",
    ],
    stack: "Angular, Angular Material, ChartJS, AWS Amplify, Node.js, Express, Sequelize, PostgreSQL, AWS Aurora",
  },
  {
    company: "Class Bucks LLC",
    role: "Lead Application Developer",
    location: "Albuquerque, NM",
    dates: "Aug 2020 – Nov 2022",
    logo: ClassBucksFull,
    url: "https://classbucks.com/",
    bullets: [
      "Built a gamified classroom management platform from the ground up as sole lead developer, taking it from concept to production.",
      "Collaborated directly with stakeholders to translate product goals into actionable development tasks and sprint plans.",
    ],
    stack: "React, Bootstrap, Google Firebase",
  },
  {
    company: "Theorem Agency",
    role: "React Developer — Internship",
    location: "Portland, OR",
    dates: "Mar 2020 – May 2020",
    logo: Theorem,
    url: "https://theoreminc.net/",
    bullets: [
      "Delivered front-end React components for enterprise clients including Aflac Insurance, the Portland Trail Blazers, and the LA Galaxy.",
      "Collaborated within an agile development team to meet tight client deadlines with polished, responsive UI.",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  url: string;
  tags: string[];
  imageFit?: "contain" | "cover";
};

export const projects: Project[] = [
  {
    title: "Lucerna Digital — Client Applications",
    description:
      "Customized client applications built with React, Google Firebase, and PostgreSQL, backed by automated CI/CD pipelines and AI-assisted development workflows.",
    image: Lucerna,
    imageAlt: "Lucerna Digital logo",
    url: "https://www.lucernadigital.com/",
    tags: ["React", "Firebase", "PostgreSQL", "CI/CD"],
    imageFit: "contain",
  },
  {
    title: "Smokejumper — U.S. Forest Service",
    description:
      "Federal mission-tracking and reporting system for the U.S. Forest Service and BLM Smokejumper modernization effort. Runs within a secure VPN environment, supporting real-time mission tracking, logistics, and incident reporting for field operations.",
    image: FSLogo,
    imageAlt: "U.S. Forest Service logo",
    url: "https://www.fs.usda.gov/",
    tags: ["Angular", "Federal", "Secure Systems"],
    imageFit: "contain",
  },
  {
    title: "Kalpa v4 — Professional Development Reporting",
    description:
      "Led the Angular component architecture from inception, built data visualization features with ChartJS, and implemented AWS Cognito authentication with federated social sign-in.",
    image: Kalpa,
    imageAlt: "Kalpa Solutions logo",
    url: "https://kalpasolutions.com/",
    tags: ["Angular", "ChartJS", "AWS Cognito", "AWS Amplify"],
    imageFit: "contain",
  },
  {
    title: "Keepsake — Family Heirloom Tracker",
    description:
      "Cross-platform React Native proof-of-concept for iOS and Android for tracking and sharing family heirlooms, integrating native camera, video, and photo library APIs with cloud auth and NoSQL persistence.",
    image: Cynerge,
    imageAlt: "Cynerge Consulting logo",
    url: "https://cynerge.com/",
    tags: ["React Native", "AWS Amplify", "DynamoDB"],
    imageFit: "contain",
  },
  {
    title: "ClassBucks",
    description:
      "Gamified classroom management platform built from the ground up as sole lead developer — taken from concept to production, collaborating with stakeholders on product direction and sprint planning.",
    image: ClassBucksFull,
    imageAlt: "ClassBucks logo",
    url: "https://classbucks.com/",
    tags: ["React", "Bootstrap", "Firebase"],
    imageFit: "cover",
  },
  {
    title: "Trail Blazers Player Stats",
    description:
      "React component built at Theorem Agency for the pregame, game, and postgame application for the Portland Trail Blazers. Player images and stats render dynamically from the NBA CDN.",
    image: BlazersComponent,
    imageAlt: "Portland Trail Blazers player stats component",
    url: "https://theoreminc.net/",
    tags: ["React", "Sports", "Live Data"],
    imageFit: "cover",
  },
  {
    title: "LA Galaxy Ticketing",
    description:
      "Single ticket-page React component built at Theorem Agency as part of a larger ticket-purchasing experience for the LA Galaxy.",
    image: LAGalaxyComponent,
    imageAlt: "LA Galaxy ticket component",
    url: "https://theoreminc.net/",
    tags: ["React", "E-commerce"],
    imageFit: "cover",
  },
];

export const theoremClients = [
  { name: "LA Galaxy", logo: LAGalaxy },
  { name: "Portland Trail Blazers", logo: Trailblazers },
  { name: "Aflac", logo: Aflac },
];

export const skills = {
  Frontend: ["JavaScript", "TypeScript", "React", "React Native", "Angular", "Angular Material", "Tailwind", "Bootstrap", "SCSS", "HTML", "Cypress"],
  "Backend & Data": ["Node.js", "Express", "PostgreSQL", "MongoDB", "DynamoDB", "Ruby", "Python", "REST APIs"],
  "Cloud & DevOps": ["AWS Amplify", "AWS Cognito", "AWS S3", "AWS Aurora", "Azure", "Google Firebase", "CircleCI", "GitHub Actions", "Jenkins", "SonarQube"],
  "AI & Tooling": ["Claude Code", "Cursor", "GitHub Copilot", "Agentic Workflows", "Git", "GitHub", "Agile / Scrum"],
};

export type EducationEntry = {
  school: string;
  detail: string;
  location: string;
  logo: string;
  url: string;
};

export const education: EducationEntry[] = [
  {
    school: "Epicodus",
    detail: "Certificate in Web and App Development",
    location: "Portland, OR",
    logo: Epicodus,
    url: "https://www.epicodus.com/",
  },
  {
    school: "DePaul University",
    detail: "Master of Arts in Mathematics Education",
    location: "Chicago, IL",
    logo: DePaul,
    url: "https://www.depaul.edu/Pages/default.aspx",
  },
  {
    school: "Wayne State University",
    detail: "Bachelor of Arts in Philosophy",
    location: "Detroit, MI",
    logo: WSU,
    url: "https://wayne.edu/",
  },
];
