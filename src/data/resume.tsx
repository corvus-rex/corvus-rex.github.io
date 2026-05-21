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
    "FastAPI",
    "Django",
    "Flask",
    "Node",
    "React",
    "Vue",
    "Flutter",
    "PostgreSQL",
    "MongoDB",
    
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
      Discord: {
        name: "Discord",
        url: "-",
        icon: Icons.discord,

        navbar: true,
      },
      Matrix: {
        name: "Matrix",
        url: "-",
        icon: Icons.matrix,
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
  ],
  projects: [
    {
      title: "Sim C",
      href: "https://aamitn.github.io/simc",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "This is a web based circuit cimulator , which was originally written in Java and runs in modern browser engines using Google web Toolkit(GWT)",
      technologies: [
        "Java",
        "Javascript",
        "GWT",
        "HTML5",
        "AWT GUI",
      ],
      links: [
        {
          type: "Website",
          href: "https://aamitn.github.io/simc/circuitjs.html",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aamitn/simc",
          icon: <Icons.github className="size-3" />,
        },

      ],
      image: "/simc.png",
      video: "",
    },
    {
      title: "Pulsebridge",
      href: "https://github.com/aamitn/pulsebridge-gateway/",
      dates: "June 2023 - Present",
      active: true,
      description:
        "PulseBridge Gateway Server is a powerful SMS Gateway software that allows you to send SMS messages seamlessly. Whether you're looking to integrate SMS functionality into your web applications or send messages from a centralized server, PulseBridge Gateway makes the process efficient and straightforward along with mobile client application",
      technologies: [
        "PHP",
        "Java",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/aamitn/pulsebridge-app/",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aamitn/pulsebridge-gateway/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cover.png",
      video: "",
    },
    {
      title: "TUSC-URL Shortener",
      href: "https://github.com/aamitn/URLShortener/",
      dates: "April 2023 - September 2023",
      active: true,
      description:" A powerful and scalable URL shortener with integrated bio pages built using Spring Boot. ",
      technologies: [
        "Java",
        "Thymeleaf",
        "Javascript",
        "Spring Boot",
        "MySQL",
        "React",
        "Tailwind",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/aamitn/URLShortener",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/tusc.png",
      video: "",
    },
    {
      title: "TrakRok",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:" Open Source GPS tracking hardware code for Arduino and middleware for Traccar tracking software",
      technologies: [
        "PHP",
        "MySQL",
        "Javascript",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },

    {
      title: "Tagger",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:" Tagger is a versatile Java application designed to simplify the process of replacing tags within text content. It provides a user-friendly GUI that allows users to interactively replace tag in a structured manner.",
      technologies: [
        "JAVA",
        "AWT",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/cover.png",
      video:
        "",
    },

    {
      title: "NDC-NewDocGen",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "A template-based report generation engine that supports vectors, repeatable content and high-availability, high-volume processing capability.",
      technologies: [
        "Java",
        "JPA",
        "Spring",
        "Apache POI",
        "Postgres",
        "React",
        "PDFBox",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/cover.png",
      video:
        "",
    },


  ],
  hackathons: [
    {
      title: "A Real-time Autonomous Face-tracking System Based On A 2-dof Articulated Manipulator Platform Using Extended Kalman Filter ",
      dates: "July ’21",
      location: "Acta Mechanica - Springer",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://doi.org/nbng",
        },
      ],
    },

    {
      title: "Design & Development of a Web-Based Robotics Simulator ",
      dates: "Oct ’20",
      location: "Elsevier",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "doi",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://doi.org/nbnh",
        },
      ],
    },
    {
      title: "Design & Implementation of an IoT Based 3-Axis CNC VMC",
      dates: "September 14th - 16th, 2018",
      location: "IJSER",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "doi",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://rb.gy/msw8g1",
        },
      ],
    },
  ],
} as const;
