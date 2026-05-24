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
