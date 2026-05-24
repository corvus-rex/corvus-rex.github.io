import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Adrian Naufal Riadi",
  initials: "ANR",
  url: "https://corvus-rex.github.io",
  location: "South Tangerang, Indonesia",
  locationLink: "",
  description:
    "Fullstack software engineer",
  summary: "Software engineer experienced in fullstack development and data-intensive applications, with hands-on work in backend server and cloud-based data processing using various databases and ingestion tools as well as academic research related to Artificial Intelligence and Computer Vision. Passionate about bridging software engineering and cloud operations to build efficient, production-ready systems.",
  avatarUrl: "/me.jpg",
  skills: [
    "Python",
    "Go",
    "Javascript",
    "Typescript",
    "Dart",
    "C++",
    "FastAPI",
    "Django",
    "Flask",
    "Node",
    "React",
    "Vue",
    "Flutter",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "PyTorch"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "adrianovriadi@gmail.com",
    tel: "+62 8151865500",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/corvus-rex",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/adrian-n-riadi-7769201b1/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Riset.ai",
      href: "https://www.riset.ai/",
      badges: [],
      location: "Bandung, Indonesia",
      title: "Software Engineer",
      logoUrl: "/rkb.jpg",
      start: "September 2021",
      end: "March 2026",
      description:
        "Develop various AI-powered applications and services such as face-verification digital signage, AI avatar video platform, and textile defect detection",
    },
    {
      company: "PT Dgas Alam Semesta",
      href: "https://dgas.co.id/index.html",
      badges: [],
      location: "Remote",
      title: "Freelance Software Engineer",
      logoUrl: "/dgas.jpg",
      start: "March 2021",
      end: "July 2021",
      description: "Developed Graphical User Interface that enables inventory-tracking of corporate assets and human resource",
    },
    {
      company: "PT Dirgantara Indonesia",
      href: "https://www.indonesian-aerospace.com/en/",
      badges: [],
      location: "Remote",
      title: "Intern Software Engineer",
      logoUrl: "/ptdi.png",
      start: "February 2020",
      end: "June 2020",
      description: "Developed a web-based architecture to streamline flight test data insertion, Extract-Transform-Load (ETL) and query for flight test analysis purposes",
    },
  ],
  education: [
    {
      school: "Gadjah Mada University",
      href: "https://ugm.ac.id/",
      degree: "Master's of Computer Science(M.Cs) in Computer Science",
      logoUrl: "/ugm.png",
      start: "2024",
      end: "2026",
    },
    {
      school: "International University Liaison Indonesia",
      href: "https://ugm.ac.id/",
      degree: "Bachelor's of Computer Science(S.Kom) in Computer Science",
      logoUrl: "/iuli.jpg",
      start: "2017",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Felix Natalis",
      href: "",
      dates: "April 2026",
      active: true,
      description:
        "A birthday reminder backend microservice written in Node.js and TypeScript. It registers users with their birthday and timezone, schedules notification jobs using a Redis-backed queue, and delivers birthday messages via configurable notification channels",
      technologies: [
        "Typescript",
        "Express",
        "Node.js",
        "MongoDB",
      ],
      links: [
        {
          type: "Repository",
          href: "https://github.com/corvus-rex/Felix-Natalis",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cover.png",
      video: ""
    },
    {
      title: "BitTrack",
      href: "https://www.youtube.com/watch?v=UN6PQKMyjAk",
      dates: "April 2024 - August 2024",
      active: true,
      description:
        "An effort to combat money-laundering, fraud, scam, and illegal transactions within cryptocurrency network. BitTack, flags suspicious cryptocurrency transactions using both traditional machine learning and deep learning approaches.",
      technologies: [
        "Python",
        "FastAPI",
        "MongoDB",
        "PyTorch",
        "Google Cloud Platforms"
      ],
      links: [
        {
          type: "Repository",
          href: "https://github.com/Br4vo-Six/inference-engine",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Pitch",
          href: "https://www.youtube.com/watch?v=UN6PQKMyjAk",
          icon:  <Icons.youtube className="size-3"/>
        }
      ],
      image: "/cover.png",
      video: "",
    },
    {
      title: "Project Odysseus",
      href: "",
      dates: "February 2021 - June 2021",
      active: true,
      description:
        "A web-based news platform site utilizing Ethereum blockchain’s distributed ledger as a mean to disincentivize the spread of fake news and avoid media censorship.",
      technologies: [
        "Javascript",
        "Vue.js",
        "Node.js",
        "MongoDB",
        "Solidity"
      ],
      links: [
        {
          type: "Repository",
          href: "https://github.com/corvus-rex/project-odysseus",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cover.png",
      video: ""
    },
    {
      title: "Project Adversarial",
      href: "",
      dates: "June 2025 - January 2026",
      active: true,
      description: 
        "Defense against adversarial patch attack in deep learning-based pedestrian detection utilizing compression-based segmentation, traditional feature-based classifier augmented with Generative Adversarial Network to perform image inpainting in areas occluded by adversarial patch.",
      technologies: [
        "Python",
        "PyTorch",
        "Scikit-learn",
        "YOLOv5"
      ],
      links: [
        {
          type: "Repository",
          href: "https://github.com/corvus-rex/project-adversarial",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cover.png",
      video: ""
    },
  ],
  awards: [
    {
      title: "Top 10 Finalists - Bank Indonesia Hackathon 2024",
      dates: "August '24",
      location: "JCC Senayan, Jakarta, Indonesia",
      description:
        "Top 10 Finalist in Bank Indonesia Hackathon 2024 out of 2,200 participants and 450+ proposal. Led a team of four to develop BitTrack, an app that flags suspicious cryptocurrency transactions using machine learing and deep learning, enabling users to track Bitcoin address trust scores and improve ecosystem accountability.",
      image:
        "https://media.licdn.com/dms/image/v2/D5622AQEyy8Nmeg8bZA/feedshare-shrink_1280/feedshare-shrink_1280/0/1723192953806?e=1781136000&v=beta&t=0223tpEwANlN2oypgu6Bxqd3piUw3hB4_TWod2y7iH0",
      links: [
        {
          title: "Certificate",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/in/adrian-n-riadi-7769201b1/overlay/Honor/834445853/treasury/?profileId=ACoAADFvokoBwBlHaJnDvc3q59hX0BVGhBfQTY8",
        },
      ],
    },
  ],
} as const;
