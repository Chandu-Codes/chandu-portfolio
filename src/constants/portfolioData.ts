export interface Project {
  title: string;
  duration: string;
  category: 'Full Stack' | 'AI & Python' | 'Systems' | 'Other';
  techStack: string[];
  features: string[];
  highlight?: string;
  githubUrl: string;
  demoUrl?: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  branch?: string;
  duration: string;
  gpa: string;
  description?: string;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  duration: string;
  highlights: string[];
}

export interface Certification {
  title: string;
  organization: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  event: string;
  description: string;
}

export interface BlogPost {
  title: string;
  date: string;
  category: string;
  snippet: string;
  readTime: string;
}

export const PORTFOLIO_DATA = {
  personalInfo: {
    name: "BOINI CHANDU",
    tagline: "Building Intelligent Software Solutions with Full Stack Development and Artificial Intelligence",
    roles: [
      "Full Stack Developer",
      "AI Enthusiast",
      "Prompt Engineer",
      "MERN Stack Developer",
      "Software Developer"
    ],
    contact: {
      phone: "+91 9676586744",
      email: "mr.chandu0123@gmail.com",
      linkedin: "https://linkedin.com/in/chandu-boini",
      github: "https://github.com/ChanduCodes",
      githubUsername: "ChanduCodes"
    },
    summary: "Dedicated Computer Science Engineering student with strong expertise in Full Stack Development, Artificial Intelligence, Prompt Engineering, Machine Learning, and Cloud Technologies. Experienced in developing scalable web applications, AI-powered solutions, and innovative software products through academic projects and industry internships. Passionate about problem solving, continuous learning, software architecture, and building technology that creates real-world impact."
  },
  education: [
    {
      institution: "Malla Reddy Engineering College",
      degree: "Bachelor of Technology",
      branch: "Computer Science and Engineering",
      duration: "2024 – Present",
      gpa: "8.95/10"
    },
    {
      institution: "Sree Dattha Engineering and Science College",
      degree: "Diploma in Computer Science Engineering",
      duration: "2021 – 2024",
      gpa: "9.75/10"
    },
    {
      institution: "St. Venus High School",
      degree: "Secondary School Certificate (SSC)",
      duration: "2021",
      gpa: "10/10"
    }
  ] as Education[],
  skills: {
    languages: ["Java", "Python", "C", "JavaScript"],
    frontend: ["HTML5", "CSS3", "React.js", "Tailwind CSS"],
    backend: ["Node.js", "Express.js"],
    databases: ["MongoDB", "MySQL", "Oracle SQL"],
    cloudTools: ["AWS", "Git", "GitHub", "VS Code"],
    ai: ["Machine Learning", "Prompt Engineering", "Computer Vision", "TensorFlow"],
    coreConcepts: ["Data Structures", "Database Management Systems", "Full Stack Development", "Software Development"],
    softSkills: ["Problem Solving", "Analytical Thinking", "Team Collaboration", "Communication", "Continuous Learning"]
  },
  experience: [
    {
      company: "National Small Industries Corporation (NSIC)",
      role: "Student Intern",
      location: "Hyderabad, India",
      duration: "May 2023 – Dec 2023",
      highlights: [
        "Worked on Python projects involving data processing and analysis.",
        "Gained practical exposure to AWS cloud technologies.",
        "Learned Big Data concepts and cloud computing fundamentals.",
        "Handled datasets and built efficient data-driven solutions.",
        "Enhanced software development and analytical skills."
      ]
    },
    {
      company: "Skilltimate Technologies",
      role: "Junior Developer Intern",
      location: "Hyderabad, India",
      duration: "Dec 2023 – Feb 2024",
      highlights: [
        "Assisted in backend development tasks using Node.js and Express.",
        "Participated in frontend component building with React.js.",
        "Gained hands-on experience in full-stack architecture and team collaboration.",
        "Contributed to database design and query optimization for client web applications."
      ]
    }
  ] as Experience[],
  projects: [
    {
      title: "Alumni Connect – Engineering College Alumni Platform",
      duration: "Jan 2026 – Feb 2026",
      category: "Full Stack",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Authentication"],
      features: [
        "Alumni Networking Platform",
        "Mentorship System",
        "Job Portal",
        "Event Management",
        "Authentication & Authorization",
        "Search Functionality"
      ],
      highlight: "Built using AI-assisted development and Prompt Engineering techniques.",
      githubUrl: "https://github.com/ChanduCodes/Alumni-Connect",
      demoUrl: "https://alumni-connect-demo.netlify.app",
      description: "A full-stack alumni networking and mentorship platform designed to connect graduates and current students. Built with role-based access control, interactive discussion forums, and job posting capabilities."
    },
    {
      title: "AI Dopamine Budget App",
      duration: "Feb 2026 – Mar 2026",
      category: "AI & Python",
      techStack: ["Python", "AI Systems", "Analytics"],
      features: [
        "Productivity Monitoring",
        "Behavioral Analytics",
        "Activity Tracking",
        "Automated Reward System",
        "Real-Time Monitoring"
      ],
      highlight: "Demonstrates Prompt Engineering, Context Engineering, and AI-Assisted Development.",
      githubUrl: "https://github.com/ChanduCodes/AI-Dopamine-Budget",
      demoUrl: undefined,
      description: "An AI-powered productivity platform designed to track behavioral patterns and manage distractions using an automated reward feedback loop. Focuses on context engineering and prompt chaining for decision analysis."
    },
    {
      title: "Mid-Queue – Healthcare Queue Management System",
      duration: "Nov 2023 – Dec 2023",
      category: "Full Stack",
      techStack: ["HTML", "CSS", "JavaScript", "Firebase"],
      features: [
        "Real-time patient check-in",
        "Doctor queue management",
        "Emergency prioritization",
        "Live queue tracking",
        "Appointment history"
      ],
      githubUrl: "https://github.com/ChanduCodes/Mid-Queue",
      demoUrl: "https://mid-queue-demo.web.app",
      description: "A real-time hospital queue management web application that allows patients to digitally register and check-in, reducing waiting times and streamlining clinical workflows for healthcare providers."
    },
    {
      title: "Airlines Reservation System",
      duration: "Aug 2023 – Sep 2023",
      category: "Systems",
      techStack: ["Python", "Django", "SQLite"],
      features: [
        "Flight search by date & route",
        "Interactive ticket booking",
        "Reservation management",
        "Database integration for passengers & flights",
        "Clean, responsive admin dashboard"
      ],
      githubUrl: "https://github.com/ChanduCodes/Airlines-Reservation",
      demoUrl: undefined,
      description: "A Django-based reservation platform enabling users to search and book flights while offering managers tools to monitor seating capacity and update flight schedules."
    },
    {
      title: "Gesture Controlled Virtual Mouse",
      duration: "Oct 2023 – Nov 2023",
      category: "AI & Python",
      techStack: ["Python", "MediaPipe", "OpenCV"],
      features: [
        "Cursor control via hand gestures",
        "Left/right click and scrolling action recognition",
        "Low-latency real-time video processing",
        "Hardware-free human-computer interaction"
      ],
      githubUrl: "https://github.com/ChanduCodes/Gesture-Mouse",
      demoUrl: undefined,
      description: "A computer vision application using MediaPipe and OpenCV to map hand keypoints to screen coordinates, enabling contactless control of desktop interfaces."
    },
    {
      title: "Car Detection System",
      duration: "Jun 2023 – Jul 2023",
      category: "AI & Python",
      techStack: ["Python", "OpenCV", "Haar Cascades"],
      features: [
        "Vehicle tracking in live video feeds",
        "Bounding box overlays on detected cars",
        "Traffic count analytics",
        "Highly optimized for standard video streams"
      ],
      githubUrl: "https://github.com/ChanduCodes/Car-Detection",
      demoUrl: undefined,
      description: "An OpenCV-based traffic monitoring project that processes video frames using Haar Cascade classifiers to identify and highlight vehicles in motion."
    }
  ] as Project[],
  certifications: [
    {
      title: "Artificial Intelligence Internship Certification",
      organization: "KSHITIJ IIT Kharagpur + 1Stop.ai",
      skills: ["Artificial Intelligence", "Machine Learning", "Computer Vision", "TensorFlow"]
    },
    {
      title: "NSIC Internship Certification",
      organization: "National Small Industries Corporation (NSIC)",
      skills: ["AWS", "Big Data", "Python", "Data Science Foundations"]
    },
    {
      title: "Google Cloud Career Launchpad",
      organization: "Google Cloud Academy",
      skills: ["Cloud Computing", "Computing Foundations"]
    },
    {
      title: "Data Structures & Algorithms Training",
      organization: "TechAugusta Pvt. Ltd.",
      skills: ["Data Structures", "Algorithms", "Problem Solving"]
    }
  ] as Certification[],
  achievements: [
    {
      title: "2nd Prize Winner",
      event: "Vishesh 2K25 (Project Expo)",
      description: "Secured Second Prize in Inter-College Project Expo Competition for the innovative project HACK-RAT."
    }
  ] as Achievement[],
  blogPosts: [
    {
      title: "Demystifying Prompt Engineering in MERN Stack Development",
      date: "Jun 2026",
      category: "AI",
      snippet: "How context engineering, prompt chaining, and AI-assisted generation can drastically speed up full-stack development workflows.",
      readTime: "5 min read"
    },
    {
      title: "Building Real-Time Web Apps with React & Serverless Databases",
      date: "May 2026",
      category: "Full Stack",
      snippet: "Exploring hospital queue management scaling using Firebase and modern reactive web sockets.",
      readTime: "8 min read"
    },
    {
      title: "Contactless UI: Integrating MediaPipe and OpenCV in Python",
      date: "Apr 2026",
      category: "AI & ML",
      snippet: "A deep dive into mapping coordinate frames and hand gestures to mouse events on desktop operating systems.",
      readTime: "6 min read"
    }
  ] as BlogPost[]
};
