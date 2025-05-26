import React, { createContext, useContext } from "react";

// Define the data structure using TypeScript interfaces
interface Education {
  degree: string;
  degree_level: string;
  specialization: string;
  institution: string;
  gpa: string;
  year: string;
  addition_info?: string;
  courses: string[];
  logo: string;
}
interface Project {
  title: string;
  description: string;
  liveDemo?: string;
  github?: string;
  details?: string;
  technologies: string[];
  image: string;
}

interface WorkExperience {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string[];
  skills: string[];
}

interface Data {
  name: string;
  full_name: string;
  pronunciation?: string;
  experience: string;
  designation: string;
  skills: string[];
  location: string;
  resume: string;
  email: string;
  github: string;
  linkedin: string;
  hero_about: string;
  about_me: string;
  education: Education[];
  workex: WorkExperience[];
  projects: Project[];
}

// Define the initial data
const initialData: Data = {
  name: `Sandeep Nandyala`,
  full_name: "Hari Sandeep Reddy Nandyala",
  experience: "3 years",
  designation: "Software Engineer",
  skills: [
    "React",
    "Redux",
    "JQuery",
    "Blazor",
    "MongoDB",
    "Python",
    "C#",
    ".Net",
    "Django",
  ],
  location: "Buffalo, NY",
  resume: "sandeep_resume_sde.pdf",
  email: "sandeepreddyn08@gmail.com",
  github: "https://github.com/sandeep0459",
  linkedin: "https://www.linkedin.com/in/hari-sandeep-reddy-nandyala-29bb73192",
  hero_about: `I'm a Computer Science Graduate from the University at Buffalo.\nI'm actively looking for full-time SDE opportunities. If you have a role that I could be a good fit for, let's connect!`,
  about_me: ` Hi! I'm Hari Sandeep Reddy Nandyala, a generalist software developer with a strong passion for building robust and innovative applications. I hold a <span style="color: #00b4d8">Master’s degree in Computer Science from SUNY Buffalo</span>.\n\n My technical expertise includes <span style="color: #00b4d8"> Java, Python, Go, C++, HTML/CSS, JavaScript, and TypeScript</span>. I have extensive experience with frameworks and technologies such as <span style="color: #00b4d8">SpringBoot, Node.js, React, Redux and Material UI</span>. My proficiency in web development is complemented by my adeptness in database management, working with <span style="color: #00b4d8">PostgreSQL, MS SQL Server, MongoDB, and Firebase</span>.`,
  education: [
    {
      degree_level: "Master's",
      degree: "Master of Science in Computer Science",
      specialization: "Computer Science and Engineering",
      institution: "University at Buffalo (State University of New York)",
      gpa: "3.7/4.0",
      year: "August 2023 - December 2024",
      addition_info:
        "",
      courses: [
        "Analysis of Algorithms",
        "Distributed Systems",
        "Data Models Query Language",
        "Machine Learning",
        "Deep Learning",
        "Data Intensive Computing",
      ],
      logo: "/images/UB.png",
    },
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      degree_level: "Bachelor's",
      specialization: "Computer Science and Engineering",
      institution: "Gandhi Institute of Technology and Management",
      gpa: "3.3/4.0",
      year: "August 2018 - May 2022",
      courses: [
        "Object Oriented Programming",
        "Operating Systems",
        "Computer Networks",
        "Data Structures and Algorithms",
      ],
      logo: "/images/GITAM.jpg",
    },
  ],
  workex: [
    {
      company: "PilProgram",
      title: "Founding Engineer",
      startDate: "January 2025",
      endDate: "Current",
      description: [
        "•	Architected a modular React portal with Tailwind CSS and Material UI, leveraging Redux Toolkit slices, RTK Query and FirebaseAuthentication to streamline realtor onboarding and data flow.",
        "•	Designed and implemented a Node.js and Express.js microservices architecture with MongoDB and Kubernetes orchestration forParliamade’s real estate platform, enabling horizontal scaling and reducing API response times by 30%.",
        "•	Engineered a real-time analytics pipeline to replace slow DB queries by streaming like/save events via Kafka into Node.jsmicroservices, aggregating counts in Redis for sub-second REST endpoints and chart renders.",
        "•	Used AWS S3 with presigned URLs and CloudFront caching to securely store and serve realtor media with low latency."
      ],
      skills: ["React", "Node.js", "Express.js", "RTK Query", "Tailwind CSS", "Material UI", "Redux", "RTK Query", "MongoDB", "Apache Kafka", "Redis", "AWS S3", "AWS CloudFront"],
    },
    {
      company: "Invesco",
      title: "Software Engineer",
      startDate: "January 2022",
      endDate: "July 2023",
      description: [
        "•	Built gRPC transaction handlers in Java with Spring Boot to ensure atomic consistency in distributed fund-reconciliation workflows, reducing end-of-day processing time by 25%.",
        "•	Developed a document processing service using LangChain, OpenAI APIs, and React.js to automate extraction and summarizationof contract data, saving over 100 hours for teams across multiple departments.",
        "•	Refactored PL/SQL stored procedures for portfolio and trade data pipelines, reducing daily investment report generation time by45% and boosting data availability for analysts.",
        "•	Implemented Kafka consumers in Java Spring Boot microservices and Hazelcast IMap caching for in-memory dashboard snapshots, enabling sub-second REST queries and reducing API latency by 15%.",
        "•	Migrated legacy portfolio dashboards from Angular to React with Material UI and RTK Query for efficient API calls and caching,reducing page load time by 40 % and improving developer productivity.",
        "•	Developed JUnit and Mockito tests covering edge-case scenarios to validate error handling and improve service reliability."
      ],
      skills: ["Java", "Spring Boot", "gRPC", "LangChain", "OpenAI APIs", "React", "PL/SQL", "Apache Kafka", "Hazelcast", "Angular", "Material UI", "RTK Query", "JUnit", "Mockito"],
    },
     {
      company: "Adroit",
      title: "Software Engineer - Backend",
      startDate: "November 2020",
      endDate: "December 2021",
      description: [
        "•	Developed standalone Spring Boot microservices to expose ODA reporting metrics via REST APIs, enhancing backendmaintainability and enabling real-time operational visibility for analytics workflows.",
        "•	Implemented a GraphQL gateway on top of those microservices to consolidate data fetching, reduce redundant API calls by 8%,and enhance overall application performance.",
        "•	Built a Kafka-backed metrics ingestion pipeline to validate and aggregate over 1 M daily ODA events, achieving data accuracy andslashing downstream processing times by 30%.",
        "•	Designed & deployed CI/CD pipelines using Azure DevOps (Pipelines, Artifacts, Repos), reducing release cycles by 60%.",
      ],
      skills: ["Spring Boot", "REST APIs", "GraphQL", "Apache Kafka", "Azure DevOps", "CI/CD Pipelines"],
    },
  ],
  projects: [
    {
      title: "Resume-to-AI Chatbot (RAG Pipeline)",
      description:
        "A context-aware chatbot that answers questions about any resume by combining semantic search with GPT-3.5 Turbo.",
      image: "/images/rag_chatbot.png",
      technologies: ["Python", "LangChain", "OpenAI API", "FAISS", "FastAPI", "React"],
      github: "https://github.com/sandeep0459/recruiterAI",
    },
    {
      title: "Implementation of Distributed Protocols",
      description:
        "The project implemented MapReduce with goroutines, developed Chandy-Lamport for global state, and implemented Raft for consensus, as part of Distributed Systems Course.",
      image: "/images/distributed_systems.jpg",
      technologies: ["Go", "gRPC", "Git"],
    },
  ],
};

// Create the context with a default value
const DataContext = createContext<Data | undefined>(undefined);

// Custom hook to use the data context
export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}

// DataProvider component
export const DataProvider = ({ children }) => {
  return (
    <DataContext.Provider value={initialData}>{children}</DataContext.Provider>
  );
};
