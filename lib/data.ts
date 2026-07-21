// ============================================================
// lib/data.ts
// Portfolio Data — Hafiz Muhammad Tayyab Zia
// Single source of truth — edit this file to update everything
// ============================================================

export const personalInfo = {
  name: "Hafiz Muhammad Tayyab Zia",
  firstName: "Hafiz M. Tayyab",
  lastName: "Zia",

  headline: "Software Engineering Student at NUST · AI & Computer Vision · Building Intelligent Systems",

  tagline:
    "Building intelligent, scalable software at the intersection of AI, Computer Vision, and systems engineering.",

  email: "hafizmtayyabzia@gmail.com", // ← replace with your real email
  phone: "+92 319 9963097",          // ← replace with your phone
  location: "Rawalpindi, Pakistan",
  locationFlag: "🇵🇰",
  timezone: "PKT (UTC+5)",

  availability: true,
  availabilityText: "Open to Internships & Opportunities",

  currentRole: "Software Engineering Student @ NUST '28",
  university: "National University of Sciences and Technology (NUST)",

  profileImage: "/images/profile.jpg", // ← add your photo here
  resume: "/resume.pdf", 
  cv:"/cv.pdf",             // ← add your resume PDF here

  social: {
    github: "https://github.com/Hafiz-tayyab-23",   // ← confirm your GitHub URL
    linkedin: "https://www.linkedin.com/in/hafiz-muhammad-tayyab-zia-972a82323", // ← confirm your LinkedIn URL
    twitter: "",   // ← add if you have one, or leave empty
    email: "mailto:hafizmtayyabzia@gmail.com",
    website: "",
  },

  // Rotating roles shown in hero typewriter
  roles: [
    "AI & Computer Vision Engineer",
    "Software Engineering Student @ NUST",
    "Full-Stack Developer",
    "Intelligent Systems Builder",
    "Open Source Contributor",
  ],

  // Hero short bio
  bio: "Software Engineering undergraduate at NUST — Pakistan's #1 engineering university. I build AI-powered systems, computer vision applications, and scalable software solutions. Currently interning at Zenvyro Labs and previously at NASTP, Pakistan's national aerospace technology park.",

  about: {
    paragraphs: [
      "I'm a Software Engineering student at the National University of Sciences and Technology (NUST), Pakistan's premier engineering institution. My work sits at the crossroads of Artificial Intelligence, Computer Vision, and systems software — areas where I believe the most impactful engineering happens.",
      "My most formative experience was a hands-on internship at the National Aerospace Science & Technology Park (NASTP), where I engineered an AI-powered facial recognition attendance and surveillance system using Python and OpenCV, and built real-time multimedia streaming pipelines on Linux using GStreamer and V4L2. Working in a defense-grade environment at this stage of my career gave me both technical depth and professional maturity.",
      "Beyond AI and systems work, I've shipped full-stack web applications used by real institutions, developed a phishing detection platform combining OCR with LLM-based risk analysis, and completed international remote internships across the UK and Egypt. I move fast, learn faster, and ship software that works.",
    ],
    vision:
      "To become a world-class AI engineer who builds technology that solves real problems — starting from Pakistan, reaching the world.",
    values: [
      "Ship working software, then make it great",
      "First principles over borrowed assumptions",
      "Depth over breadth — master what matters",
      "Collaborate openly, credit generously",
      "Build technology that serves people",
    ],
    interests: [
      "Computer Vision & OpenCV",
      "Artificial Intelligence & LLMs",
      "Intelligent Systems Design",
      "Cybersecurity & Anti-Phishing",
      "Linux & Systems Programming",
      "Scalable Web Architecture",
    ],
  },
};

// ============================================================
// EXPERIENCE
// ============================================================

export const experience = [
  {
    id: "exp-nastp",
    company: "National Aerospace Science & Technology Park (NASTP)",
    companyUrl: "https://nastp.gov.pk",
    logo: "/images/companies/nastp.jpeg",
    role: "Software Engineer Intern",
    type: "Internship",
    location: "Islamabad, Pakistan · On-site",
    startDate: "Jun 2025",
    endDate: "Aug 2025",
    duration: "3 months",
    current: false,
    description:
      "NASTP is Pakistan's national aerospace science and technology park operating under the Pakistan Air Force. Worked on defense-grade AI and multimedia systems in a high-security, professional engineering environment.",
    responsibilities: [
      "Engineered an AI-based facial recognition attendance system in Python and OpenCV, running on Linux with real-time visual feedback — green bounding boxes for recognized personnel, red for unidentified individuals",
      "Implemented intelligent duplicate-entry prevention with timestamped attendance logging, ensuring data accuracy across extended monitoring sessions",
      "Architected and deployed a cross-device live streaming system using GStreamer pipelines and Video4Linux2 (V4L2) on an Ubuntu VM, transmitting real-time video feeds to Windows receivers over LAN",
      "Built real-time video processing pipelines with filters, overlays, audio-video synchronization, and face detection using GStreamer plugins",
      "Designed a UI/UX prototype in Figma for an Anti-Drone Weapon Controller interface, prioritizing operator safety, situational clarity, and rapid command execution",
      "Gained proficiency in Linux terminal, shell scripting, and VMware virtualization in a production engineering environment",
    ],
    achievements: [
      "Delivered a production-ready AI attendance system operational in a national aerospace facility",
      "Built a fully functional LAN-based IP camera surveillance simulation from scratch in 3 months",
      "Completed internship at one of Pakistan's most prestigious defense technology institutions as a 1st-year student",
    ],
    technologies: [
      "Python",
      "OpenCV",
      "face_recognition",
      "dlib",
      "GStreamer",
      "Video4Linux2 (V4L2)",
      "Linux Ubuntu",
      "VMware",
      "Shell Scripting",
      "Figma",
    ],
    color: "#3B82F6",
  },
  {
    id: "exp-zenvyro",
    company: "Zenvyro Labs (Pvt) Ltd.",
    companyUrl: "https://zenvyrolabs.com",
    logo: "/images/companies/zenvyro.jpeg",
    role: "AI/ML Intern",
    type: "Internship",
    location: "Rawalpindi, Pakistan · Remote",
    startDate: "Jul 2026",
    endDate: "Present",
    duration: "Current",
    current: true,
    description:
      "Zenvyro Labs is a software product and AI solutions company based in Pakistan. Currently contributing to AI/ML initiatives as part of the engineering team.",
    responsibilities: [
      "Contributing to AI/ML research and development initiatives",
      "Applying machine learning techniques to real-world product challenges",
      "Collaborating with the engineering team on intelligent system components",
    ],
    achievements: [
      "Currently gaining hands-on AI/ML industry experience alongside full-time studies",
    ],
    technologies: ["Python", "Machine Learning", "AI/ML"],
    color: "#8B5CF6",
  },
  {
    id: "exp-nexus",
    company: "Nexus AI Digital",
    companyUrl: "https://nexusaidigital.com",
    logo: "/images/companies/nexus.jpeg",
    role: "Frontend Development Intern",
    type: "Internship",
    location: "London, United Kingdom · Remote",
    startDate: "Sep 2025",
    endDate: "Oct 2025",
    duration: "2 months",
    current: false,
    description:
      "Nexus AI Digital is a UK-based digital agency. Delivered a complete e-commerce frontend as part of an international remote engineering team.",
    responsibilities: [
      "Architected and delivered a fully functional e-commerce web application with category-based product pages and a dynamic shopping cart",
      "Implemented complex DOM manipulation and event-driven programming for seamless, interactive user experiences",
      "Engineered responsive layouts optimized for all screen sizes and devices, following modern CSS best practices",
      "Applied structured JavaScript patterns for maintainable, scalable frontend code",
    ],
    achievements: [
      "Shipped a complete e-commerce frontend for an international client within a 2-month engagement",
      "Gained professional remote collaboration experience with a UK-based team",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "DOM APIs"],
    color: "#10B981",
  },
  {
    id: "exp-elevvo",
    company: "Elevvo Pathways",
    companyUrl: "https://ellevopathways.com",
    logo: "/images/companies/elevvo.jpeg",
    role: "Frontend Development Intern",
    type: "Internship",
    location: "Cairo, Egypt · Remote",
    startDate: "Aug 2025",
    endDate: "Sep 2025",
    duration: "2 months",
    current: false,
    description:
      "Elevvo Pathways is an Egypt-based ed-tech and digital solutions company. Built multiple production-quality frontend projects across diverse UI patterns.",
    responsibilities: [
      "Built a collapsible sidebar navigation system with smooth CSS transitions and modern interactive behavior",
      "Developed a contact form with real-time validation, inline error handling, and a glassmorphism UI design",
      "Created a full-featured Task Management Web App with add/remove functionality, task filtering, and localStorage persistence",
      "Designed and implemented a Personal Blog Website with article sections, category navigation, and responsive content layouts",
      "Delivered a Product Landing Page featuring pricing plans, testimonials section, and a dark/light mode toggle",
      "Ensured cross-device responsiveness across all delivered projects",
    ],
    achievements: [
      "Delivered 5 distinct production-quality frontend projects within a 2-month international internship",
      "Demonstrated versatility across UI patterns including dashboards, forms, content sites, and landing pages",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage API", "Responsive Design", "CSS Animations"],
    color: "#F59E0B",
  },
];

// ============================================================
// PROJECTS
// ============================================================

export const projects = [
  {
    id: "proj-surveillance",
    title: "Multi-Camera AI Surveillance & Attendance System",
    slug: "ai-surveillance-attendance",
    category: "AI/ML",
    featured: true,
    status: "Live",
    thumbnail: "", // ← paste a direct image link or leave empty
    screenshots: [],
    media: {
      videoDemo: "", // ← paste YouTube/Drive video link
      imageFolderUrl:"https://drive.google.com/drive/folders/1o_l4tegIgpfChZA4_Pwq1GpqXaKR4MR_?usp=sharing",
      imageGallery: [],
      linkedInPost: "https://www.linkedin.com/posts/hafiz-muhammad-tayyab-zia-972a82323_sharing-one-of-my-favorite-collaborative-activity-7366511175271878658-2aiN?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFHZwuYBL4kpQlSdPu5WFqaQxeuD6MbX0cc", // ← paste LinkedIn post URL
      presentation: "", // ← paste Google Slides link if any
    },
    shortDescription:
      "Real-time multi-camera facial recognition system with a Flutter cross-platform UI — built for and deployed at a national aerospace facility.",
    longDescription:
      "A production-grade AI surveillance and attendance system integrating a Python computer vision backend with a Flutter cross-platform frontend. Designed and deployed during my internship at NASTP, the system handles multiple simultaneous camera feeds, each maintaining independent timestamped attendance logs.",
    problem:
      "NASTP required an automated, reliable attendance and personnel monitoring system that could handle multiple entry points simultaneously, eliminate manual logging errors, and provide a cross-platform interface accessible on both desktop and mobile.",
    solution:
      "Built a Python backend using OpenCV and face_recognition to process multiple camera feeds concurrently via multiprocessing. Each recognized individual triggers a timestamped log entry with duplicate-prevention logic. A Flutter frontend provides a clean, cross-platform dashboard.",
    impact:
      "Delivered a production-ready system operational in a national aerospace facility, eliminating manual attendance processes and enabling real-time personnel monitoring across multiple entry points.",
    architecture:
      "Python multiprocessing backend handles N simultaneous camera feeds independently. face_recognition library (dlib HOG + CNN models) performs identification. Per-camera .txt/CSV logs with timestamp deduplication. Flutter app communicates with the backend via local API.",
    challenges: [
      "Achieving real-time performance across multiple simultaneous camera streams — solved with Python multiprocessing, frame resizing, and tolerance-tuned recognition thresholds",
      "Preventing duplicate attendance entries when a face remains in frame — solved with a time-windowed deduplication mechanism per person per camera session",
      "Building a cross-platform UI that works on Windows, Linux, and Android from a single codebase — solved with Flutter and Dart",
    ],
    metrics: [
      { label: "Camera Feeds", value: "Multi", icon: "zap" },
      { label: "Platform", value: "Cross", icon: "target" },
      { label: "Environment", value: "Defense", icon: "star" },
    ],
    technologies: [
      "Python", "OpenCV", "face_recognition", "dlib",
      "NumPy", "imutils", "Flutter", "Dart", "Multiprocessing", "Linux",
    ],
    githubUrl: "", // ← your repo link
    liveUrl: "",
    timeline: "2 months",
    teamSize: "2 people",
    role: "AI Engineer & Flutter Developer",
    color: "#3B82F6",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: "proj-phishsentry",
    title: "PhishSentry AI — Phishing Detection Platform",
    slug: "phishsentry-ai",
    category: "AI/ML",
    featured: true,
    status: "Live",
    thumbnail: "",
    screenshots: [],
    media: {
      videoDemo: "https://drive.google.com/file/d/15EdL3m8TZA1pZ1xtrVbKUK1V3LfPy8Hl/preview", // ← YouTube or Drive video link
      imageGallery: [],
      linkedInPost: "https://www.linkedin.com/posts/hafiz-muhammad-tayyab-zia-972a82323_generativeai-cybersecurity-phishingdetection-activity-7414166328682430464-kAb7?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFHZwuYBL4kpQlSdPu5WFqaQxeuD6MbX0cc",
      presentation: "",
    },
    shortDescription:
      "AI-powered cybersecurity tool that detects phishing attempts from both raw text and screenshots using OCR and LLM-based risk analysis.",
    longDescription:
      "PhishSentry AI is an intelligent phishing detection platform that accepts both text input and screenshots, extracts content via EasyOCR, and runs it through an LLM-based analysis engine to detect suspicious language patterns, malicious links, and social engineering tactics.",
    problem:
      "Phishing attacks are increasingly sophisticated and target non-technical users who can't recognize malicious patterns in emails, messages, or images.",
    solution:
      "Built a zero-installation web interface using Gradio that accepts text or screenshot inputs. EasyOCR extracts text from images. An LLM-based analysis engine evaluates the content against known phishing patterns.",
    impact:
      "Delivers rapid, accessible phishing detection in seconds — usable by non-technical users directly in a browser.",
    architecture:
      "Gradio web interface → EasyOCR for image text extraction → LLM API for phishing pattern analysis → Risk scoring and explanation generation.",
    challenges: [
      "Making AI-generated risk assessments explainable and useful to non-technical users",
      "Handling varied screenshot quality and formats for reliable OCR",
    ],
    metrics: [
      { label: "Input Types", value: "Text+Image", icon: "zap" },
      { label: "Detection", value: "Real-time", icon: "target" },
      { label: "Interface", value: "Zero-install", icon: "users" },
    ],
    technologies: ["Python", "EasyOCR", "Generative AI (LLM)", "Gradio", "Prompt Engineering", "API Integration"],
    githubUrl: "https://github.com/Hafiz-tayyab-23/PhishSentry-AI.git",
    liveUrl: "https://tayyab-23-phishsentry-snapshot.hf.space",
    timeline: "1 month",
    teamSize: "Solo",
    role: "AI Engineer",
    color: "#EF4444",
    gradient: "from-red-500/20 to-orange-500/20",
  },
  {
    id: "proj-exam-automation",
    title: "Exam Branch Automation System",
    slug: "exam-branch-automation",
    category: "Web App",
    featured: true,
    status: "Live",
    thumbnail: "",
    screenshots: [],
    media: {
      videoDemo: "",
      imageFolderUrl:"https://drive.google.com/drive/folders/1q9bXlGnyHpGfyE1vayhAUFhB6hVmz2eR?usp=sharing",
      imageGallery: [],
      linkedInPost: "https://www.linkedin.com/posts/hafiz-muhammad-tayyab-zia-972a82323_softwareengineering-fullstackdevelopment-ugcPost-7483399604219211777-XHgT/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFHZwuYBL4kpQlSdPu5WFqaQxeuD6MbX0cc",
      presentation: "",
    },
    shortDescription:
      "Full-stack web system that digitized the entire examination management workflow for Military College of Signals, NUST.",
    longDescription:
      "A comprehensive web-based examination management platform built for Military College of Signals (NUST) that replaced a paper-based examination workflow with a centralized, automated system.",
    problem:
      "The institution's examination branch relied on entirely manual processes creating significant administrative burden and scheduling conflicts.",
    solution:
      "Built a multi-module PHP/MySQL web application with role-based access control. Automated datesheet generation with conflict detection algorithms.",
    impact:
      "Digitized and automated the complete examination workflow for an active NUST institution.",
    architecture:
      "PHP backend with MySQL database. Bootstrap frontend. Conflict detection algorithms. FPDF for document generation. Role-based access control.",
    challenges: [
      "Designing conflict detection for datesheet generation accounting for shared classrooms and faculty availability",
      "Generating formatted PDF and Excel documents matching institutional templates exactly",
    ],
    metrics: [
      { label: "Modules", value: "8+", icon: "zap" },
      { label: "Export", value: "PDF + Excel", icon: "download" },
      { label: "Institution", value: "NUST MCS", icon: "star" },
    ],
    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "Bootstrap", "JavaScript", "XAMPP"],
    githubUrl: "",
    liveUrl: "",
    timeline: "3 months",
    teamSize: "Team project",
    role: "Full-Stack Developer",
    color: "#10B981",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: "proj-pec-registration",
    title: "PEC Student Registration System",
    slug: "pec-student-registration",
    category: "Web App",
    featured: false,
    status: "Live",
    thumbnail: "",
    screenshots: [],
    media: {
      videoDemo: "",
      imageFolderUrl: "https://drive.google.com/drive/folders/1xVlZzVGkAJDoZe3hRsVfDeIRaPe-4kt8?usp=sharing",
      imageGallery: [],
      linkedInPost: "https://www.linkedin.com/posts/hafiz-muhammad-tayyab-zia-972a82323_softwareengineering-fullstackdevelopment-ugcPost-7480958944761315328-lRw9/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFHZwuYBL4kpQlSdPu5WFqaQxeuD6MbX0cc",
      presentation: "",
    },
    shortDescription:
      "Web platform that digitized the PEC student registration process for Military College of Signals, NUST.",
    longDescription:
      "A full-stack web system built for Military College of Signals (NUST) to digitize Pakistan Engineering Council (PEC) student registration.",
    problem:
      "PEC student registration was handled through manual paperwork, creating delays and administrative inefficiency.",
    solution:
      "Built a PHP/MySQL registration platform with a multi-stage approval workflow.",
    impact:
      "Eliminated paper-based registration at a NUST institution.",
    architecture:
      "PHP backend, MySQL database, Bootstrap frontend. Multi-stage workflow state machine.",
    challenges: [
      "Implementing partial document re-upload without requiring students to restart registration",
    ],
    metrics: [
      { label: "Workflow", value: "Multi-step", icon: "zap" },
      { label: "Institution", value: "NUST MCS", icon: "star" },
    ],
    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "Bootstrap", "JavaScript", "XAMPP"],
    githubUrl: "",
    liveUrl: "",
    timeline: "3 months",
    teamSize: "Team project",
    role: "Full-Stack Developer",
    color: "#8B5CF6",
    gradient: "from-purple-500/20 to-violet-500/20",
  },
  {
    id: "proj-mini-os",
    title: "Mini OS Simulator",
    slug: "mini-os-simulator",
    category: "Systems",
    featured: false,
    status: "Live",
    thumbnail: "",
    screenshots: [],
    media: {
      videoDemo: "",
      imageFolderUrl: "https://drive.google.com/drive/folders/1A3qyQ-9zgKq5SDOgnI-0f1suHZq0do2-?usp=sharing",
      imageGallery: [],
      linkedInPost: "https://www.linkedin.com/posts/hafiz-muhammad-tayyab-zia-972a82323_java-operatingsystems-softwaredevelopment-share-7462759235710345216-zsur/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFHZwuYBL4kpQlSdPu5WFqaQxeuD6MbX0cc",
      presentation: "",
    },
    shortDescription:
      "Interactive Java-based OS simulator visualizing CPU scheduling, memory management, and synchronization through a real-time GUI.",
    longDescription:
      "An educational Java application that visualizes core operating system concepts through an interactive GUI.",
    problem:
      "Operating system concepts are difficult to grasp through theory alone.",
    solution:
      "Built a Java Swing application with dedicated GUI panels for each OS subsystem.",
    impact:
      "Created a practical educational tool for OS lab demonstrations at NUST.",
    architecture:
      "Java Swing GUI with MVC-inspired modular panel architecture.",
    challenges: [
      "Designing a unified simulation loop driving multiple OS subsystems simultaneously without race conditions",
    ],
    metrics: [
      { label: "Algorithms", value: "4+ CPU", icon: "zap" },
      { label: "Panels", value: "4 Subsystems", icon: "target" },
    ],
    technologies: ["Java", "Java Swing", "OOP", "GUI Development"],
    githubUrl: "https://github.com/Hafiz-tayyab-23/Mini_OS_Simulator",
    liveUrl: "",
    timeline: "1 month",
    teamSize: "Team project",
    role: "Developer",
    color: "#F59E0B",
    gradient: "from-amber-500/20 to-yellow-500/20",
  },
  {
    id: "proj-gstreamer",
    title: "Cross-Device Live Streaming — GStreamer & V4L2",
    slug: "gstreamer-live-streaming",
    category: "Systems",
    featured: false,
    status: "Live",
    thumbnail: "",
    screenshots: [],
    media: {
      videoDemo: "",
      imageGallery: [],
      linkedInPost: "",
      presentation: "",
    },
    shortDescription:
      "Real-time LAN-based video streaming system on Linux using GStreamer pipelines and Video4Linux2 — built at NASTP.",
    longDescription:
      "A Linux-based multimedia streaming system built during my NASTP internship.",
    problem:
      "NASTP required a cross-device video streaming solution enabling real-time video transmission from Linux to Windows receivers.",
    solution:
      "Built GStreamer pipelines for video capture via V4L2, applied real-time filters, and streamed over LAN using RTP/UDP.",
    impact:
      "Delivered a functional real-time streaming solution applicable to surveillance infrastructure.",
    architecture:
      "Ubuntu 22.04 VM → V4L2 capture → GStreamer pipeline → RTP/UDP LAN transmission → Windows receiver.",
    challenges: [
      "Achieving stable real-time streaming across VM-to-host boundary with acceptable latency",
      "Integrating face detection into a live GStreamer pipeline without dropping frames",
    ],
    metrics: [
      { label: "Protocol", value: "RTP/UDP", icon: "zap" },
      { label: "Environment", value: "Defense", icon: "star" },
    ],
    technologies: ["GStreamer", "Video4Linux2 (V4L2)", "Ubuntu Linux 22.04", "VMware", "Shell Scripting"],
    githubUrl: "",
    liveUrl: "",
    timeline: "1 month",
    teamSize: "Solo",
    role: "Systems Engineer",
    color: "#06B6D4",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: "proj-email-extractor",
    title: "Email Extractor — Python Automation Utility",
    slug: "email-extractor",
    category: "Tools",
    featured: false,
    status: "Live",
    thumbnail: "",
    screenshots: [],
    media: {
      videoDemo: "",
      imageGallery: [],
      linkedInPost: "https://www.linkedin.com/posts/hafiz-muhammad-tayyab-zia-972a82323_python-codealpha-internship-activity-7361271548483112960--AOH?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFHZwuYBL4kpQlSdPu5WFqaQxeuD6MbX0cc",
      presentation: "",
    },
    shortDescription:
      "Lightweight Python utility that extracts, deduplicates, and sorts email addresses from .txt files — reducing hours of work to seconds.",
    longDescription:
      "A portable Python CLI utility that reads .txt files of any size, applies regex-based email extraction, removes duplicates, and exports a clean output file.",
    problem:
      "Manual email extraction from large text files is error-prone and time-consuming.",
    solution:
      "Python utility using the re module for accurate email pattern matching with zero external dependencies.",
    impact:
      "Reduced email extraction from hours of manual work to seconds with guaranteed accuracy.",
    architecture:
      "Single Python script. Regex engine. Set-based deduplication. File I/O. Interactive CLI.",
    challenges: [
      "Writing a regex pattern robust enough to catch all valid email formats while rejecting malformed addresses",
    ],
    metrics: [
      { label: "Dependencies", value: "Zero", icon: "zap" },
      { label: "Time saved", value: "Hours→Sec", icon: "target" },
    ],
    technologies: ["Python 3", "Regex (re module)", "File I/O", "CLI"],
    githubUrl: "https://github.com/Hafiz-tayyab-23/Email-Automation-Project",
    liveUrl: "",
    timeline: "1 week",
    teamSize: "Solo",
    role: "Developer",
    color: "#EC4899",
    gradient: "from-pink-500/20 to-rose-500/20",
  },
];

// ============================================================
// SKILLS
// ============================================================

export const skills = {
  languages: [
    { name: "Python", level: 85, icon: "python" },
    { name: "C++", level: 78, icon: "cpp" },
    { name: "Java", level: 75, icon: "java" },
    { name: "JavaScript", level: 72, icon: "js" },
    { name: "C", level: 70, icon: "c" },
    { name: "PHP", level: 72, icon: "php" },
    { name: "Dart", level: 65, icon: "dart" },
    { name: "SQL", level: 75, icon: "sql" },
  ],
  ai: [
    { name: "OpenCV", level: 82, icon: "opencv" },
    { name: "face_recognition", level: 78, icon: "ai" },
    { name: "Generative AI (LLMs)", level: 75, icon: "openai" },
    { name: "Prompt Engineering", level: 80, icon: "ai" },
    { name: "EasyOCR", level: 72, icon: "ai" },
    { name: "Computer Vision", level: 78, icon: "ai" },
    { name: "Agentic AI", level: 65, icon: "ai" },
  ],
  mobile: [
    { name: "Flutter", level: 70, icon: "flutter" },
    { name: "Dart", level: 68, icon: "dart" },
    { name: "Cross-platform Dev", level: 70, icon: "mobile" },
  ],
  frontend: [
    { name: "HTML5", level: 88, icon: "html" },
    { name: "CSS3", level: 85, icon: "css" },
    { name: "JavaScript", level: 72, icon: "js" },
    { name: "Bootstrap", level: 82, icon: "bootstrap" },
    { name: "Responsive Design", level: 85, icon: "responsive" },
    { name: "Figma", level: 72, icon: "figma" },
  ],
  backend: [
    { name: "PHP", level: 72, icon: "php" },
    { name: "MySQL", level: 75, icon: "mysql" },
    { name: "REST APIs", level: 70, icon: "api" },
    { name: "Database Design", level: 72, icon: "db" },
  ],
  systems: [
    { name: "Linux Ubuntu", level: 80, icon: "linux" },
    { name: "Shell Scripting", level: 72, icon: "bash" },
    { name: "GStreamer", level: 70, icon: "linux" },
    { name: "Video4Linux2", level: 68, icon: "linux" },
    { name: "VMware", level: 72, icon: "vm" },
  ],
  tools: [
    { name: "Git", level: 82, icon: "git" },
    { name: "GitHub", level: 82, icon: "github" },
    { name: "Figma", level: 72, icon: "figma" },
    { name: "Gradio", level: 70, icon: "python" },
    { name: "XAMPP", level: 72, icon: "tools" },
    { name: "Java Swing", level: 72, icon: "java" },
    { name: "VS Code", level: 90, icon: "vscode" },
  ],
  softSkills: [
    { name: "Public Speaking", level: 85, icon: "users" },
    { name: "Technical Writing", level: 80, icon: "writing" },
    { name: "Problem Solving", level: 88, icon: "target" },
    { name: "Critical Thinking", level: 85, icon: "target" },
    { name: "Teamwork", level: 85, icon: "users" },
    { name: "Communication", level: 83, icon: "users" },
  ],
};

// ============================================================
// EDUCATION
// ============================================================

export const education = [
  {
    id: "edu-nust",
    institution: "National University of Sciences and Technology (NUST)",
    degree: "Bachelor of Engineering",
    field: "Software Engineering",
    startDate: "2024",
    endDate: "2028",
    current: true,
    grade: null, // ← add your CGPA when available
    location: "Islamabad, Pakistan",
    logo: "/images/universities/nust.jpeg",
    achievements: [
      "Delivered two production-level software systems for NUST institutions (Exam Automation & PEC Registration)",
      "Built an AI surveillance system operational at NASTP during 1st-year internship",
      "Extended Committee Member — Software Society, IEEE, and MCS Community Service Society",
    ],
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Software Engineering",
      "Computer Networks",
      "Digital Logic Design",
      "Computer Architecture",
      "Discrete Mathematics",
      "Linear Algebra",
    ],
    activities: [
      "Extended Committee Member — Software Society, MCS NUST",
      "Extended Committee Member — IEEE Student Branch, MCS NUST",
      "Extended Committee Member — MCS Community Service Society",
    ],
    description:
      "Pursuing a rigorous Software Engineering degree at Pakistan's premier engineering university. Actively combining coursework with real-world project delivery and industry internships.",
    color: "#3B82F6",
  },
  {
    id: "edu-aps",
    institution: "Army Public School (APSACS)",
    degree: "HSSC",
    field: "Pre-Engineering",
    startDate: "2022",
    endDate: "2024",
    current: false,
    grade: "1003/1100 Marks · 91.2%",
    location: "Rawalpindi, Pakistan",
    logo: "/images/universities/aps.jpeg",
    achievements: [
      "Certificate of Appreciation from APSACS Secretariat — 1003/1100 in FBISE HSSC 2024",
      "Certificate of Merit — 92.12% in FBISE HSSC-I 2023",
      "Consistent top academic performance throughout intermediate studies",
    ],
    coursework: [
      "Mathematics",
      "Physics",
      "Computer Science",
      "Chemistry",
      "English",
    ],
    activities: [
      "Public Speaking & Debate Competitions",
      "Literary and Academic Competitions",
    ],
    description:
      "Completed Pre-Engineering at APSACS with distinction, earning a formal Certificate of Appreciation from the APSACS Secretariat for scoring 1003 out of 1100 marks in the Federal Board examination.",
    color: "#10B981",
  },
{
    id: "edu-school",
    institution: "501 Model Secondary School, Chaklala",
    degree: "Matriculation",
    field: "Science",
    startDate: "2020",
    endDate: "2022",
    current: false,
    grade: "1058/1100 Marks · 96.2% · 1st Position",
    location: "Rawalpindi, Pakistan",
    logo: "/images/universities/school.jpeg",
    achievements: [
      "1st Position in School — FBISE SSC Annual Examination 2022",
      "Scored 1058 out of 1100 marks (96.2%)",
      "Merit Certificate for highest academic standing",
      "Highest academic standing throughout Grades 1–10",
    ],
    coursework: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "Computer Science",
      "English",
    ],
    activities: [
      "English & Urdu Debate Competitions",
      "English & Urdu Writing Competitions",
      "Quran Recitation Contests",
      "Public Speaking & Literary Activities",
    ],
    description:
      "Secured 1st Position in school with 1058/1100 marks (96.2%) in the FBISE SSC Examination while consistently maintaining the highest academic standing from Grades 1 through 10.",
    color: "#8B5CF6",
  },
];

// ============================================================
// CERTIFICATIONS (consolidated — most impactful ones featured)
// ============================================================

export const certifications = [
  // ═══════════════ FEATURED — Most Impressive ═══════════════
  {
    id: "cert-prompt-eng",
    name: "Prompt Engineering Specialization (3 Courses)",
    issuer: "Vanderbilt University",
    issuerLogo: "/images/certs/vanderbilt.jpeg",
    date: "Aug 2025",
    expiryDate: null,
    credentialId: "TOCPE1FDWIFS",
    verifyUrl: "https://www.coursera.org/account/accomplishments/specialization/TOCPE1FDWIFS",
    description: "Advanced prompt engineering covering structured prompting, citation filtering, AI-assisted ideation, and prompt patterns for LLMs.",
    color: "#8B2132",
    badge: "",
    featured: true,
    image: "/images/certs/prompt-engineering.jpeg",
  },
  {
    id: "cert-dsa-microsoft",
    name: "Data Structures and Algorithms",
    issuer: "Microsoft",
    issuerLogo: "/images/certs/microsoft.jpeg",
    date: "Aug 2025",
    expiryDate: null,
    credentialId: "B246RF3WDSL6",
    verifyUrl: "https://www.coursera.org/verify/B246RF3WDSL6",
    description: "Comprehensive DSA certification covering algorithms, data structures, problem solving, API design, and C# implementation.",
    color: "#00A4EF",
    badge: "",
    featured: true,
    image: "/images/certs/microsoft-dsa.jpeg",
  },
  {
    id: "cert-dsa-codio",
    name: "C++ Data Structures & Algorithms (3-Course Program)",
    issuer: "Codio",
    issuerLogo: "/images/certs/codio.jpeg",
    date: "Aug 2025",
    expiryDate: null,
    credentialId: "D70I3M74N9RM",
    verifyUrl: "https://www.coursera.org/account/accomplishments/specialization/D70I3M74N9RM",
    description: "Three-course program covering linear & non-linear data structures, graph theory, and algorithm implementation in C++.",
    color: "#4A90D9",
    badge: "",
    featured: true,
    image: "/images/certs/codio-dsa.jpeg",
  },
  {
    id: "cert-ai-agents-ieee",
    name: "5-Day Webinar on AI Agents",
    issuer: "IEEE",
    issuerLogo: "/images/certs/ieee.jpeg",
    date: "Mar 2026",
    expiryDate: null,
    credentialId: "",
    verifyUrl: "",
    description: "IEEE-certified training on agentic AI development, agentic workflows, and agentic automation systems.",
    color: "#006699",
    badge: "",
    featured: true,
    image: "/images/certs/ieee-ai-agents.g",
  },
  {
    id: "cert-ai-bootcamp",
    name: "National AI Training Bootcamp",
    issuer: "Ministry of IT & Telecommunication Pakistan",
    issuerLogo: "/images/certs/moitt.jpeg",
    date: "Feb 2026",
    expiryDate: null,
    credentialId: "",
    verifyUrl: "",
    description: "Government-run national AI bootcamp covering responsible AI, vibe coding, and generative AI application development.",
    color: "#00703C",
    badge: "",
    featured: true,
    image: "/images/certs/moitt-ai-bootcamp.jpeg",
  },
  {
    id: "cert-nylp-ai-week",
    name: "Indus AI Week — NYLP 2026",
    issuer: "National Youth Leadership Programme (NYLP)",
    issuerLogo: "/images/certs/nylp.jpeg",
    date: "Feb 2026",
    expiryDate: null,
    credentialId: "",
    verifyUrl: "",
    description: "National programme focused on AI leadership, innovation, and technology for Pakistan's youth — selected participant.",
    color: "#1E40AF",
    badge: "",
    featured: true,
    image: "/images/certs/nylp-ai-week.jpeg",
  },

  // ═══════════════ TECHNICAL — Programming & CS ═══════════════
  {
    id: "cert-python-umich-1",
    name: "Programming for Everybody (Getting Started with Python)",
    issuer: "University of Michigan",
    issuerLogo: "/images/certs/umich.jpeg",
    date: "Jul 2025",
    expiryDate: null,
    credentialId: "OUYNYMF29L98",
    verifyUrl: "https://coursera.org/verify/OUYNYMF29L98",
    description: "Foundational Python programming covering variables, conditionals, loops, and functions.",
    color: "#00274C",
    badge: "",
    featured: false,
    image: "/images/certs/umich-python-1.jpeg",
  },
  {
    id: "cert-python-umich-2",
    name: "Python Data Structures",
    issuer: "University of Michigan",
    issuerLogo: "/images/certs/umich.jpeg",
    date: "Jul 2025",
    expiryDate: null,
    credentialId: "2BSTZ1XYW0FV",
    verifyUrl: "https://coursera.org/verify/2BSTZ1XYW0FV",
    description: "Python data structures including lists, dictionaries, tuples, and file handling.",
    color: "#00274C",
    badge: "",
    featured: false,
    image: "/images/certs/umich-python-2.jpeg",
  },
  {
    id: "cert-linux",
    name: "Linux Fundamentals",
    issuer: "LearnQuest",
    issuerLogo: "/images/certs/learnquest.jpeg",
    date: "Jun 2025",
    expiryDate: null,
    credentialId: "YN0J5HNA94HH",
    verifyUrl: "https://coursera.org/verify/YN0J5HNA94HH",
    description: "Linux terminal, file management, bash scripting, and system administration fundamentals.",
    color: "#FCC624",
    badge: "",
    featured: false,
    image: "/images/certs/linux-fundamentals.jpeg",
  },
  {
    id: "cert-git-udemy",
    name: "Git & GitHub Bootcamp",
    issuer: "Udemy",
    issuerLogo: "/images/certs/udemy.jpeg",
    date: "Jul 2025",
    expiryDate: null,
    credentialId: "UC-76d0b931-a429-4d7f-a131-a66fd0ff08a9",
    verifyUrl: "https://udemy.com/certificate/UC-76d0b931-a429-4d7f-a131-a66fd0ff08a9",
    description: "Comprehensive Git and GitHub training — branching, merging, rebasing, and collaborative workflows.",
    color: "#A435F0",
    badge: "",
    featured: false,
    image: "/images/certs/udemy-git.jpeg",
  },
  {
    id: "cert-fcc-web",
    name: "Legacy Responsive Web Design",
    issuer: "freeCodeCamp",
    issuerLogo: "/images/certs/fcc.jpeg",
    date: "Jul 2024",
    expiryDate: null,
    credentialId: "hafiztayyab23-rwd",
    verifyUrl: "https://freecodecamp.org/certification/hafiztayyab23/responsive-web-design",
    description: "HTML5, CSS Flexbox, CSS Grid, responsive design principles through hands-on projects.",
    color: "#006400",
    badge: "",
    featured: false,
    image: "/images/certs/fcc-web-design.jpeg",
  },
  {
    id: "cert-gen-ai",
    name: "Generative AI Application Developer",
    issuer: "ULEFUSA — UETians Lahore Endowment Foundation USA",
    issuerLogo: "/images/certs/ulefusa.jpeg",
    date: "Dec 2025",
    expiryDate: null,
    credentialId: "",
    verifyUrl: "",
    description: "Responsible use of generative AI, prompt engineering, and LLM-based application development.",
    color: "#7C3AED",
    badge: "",
    featured: false,
    image: "/images/certs/gen-ai-developer.jpeg",
  },
  {
    id: "cert-c-udemy",
    name: "C Programming",
    issuer: "Udemy",
    issuerLogo: "/images/certs/udemy.jpeg",
    date: "Aug 2024",
    expiryDate: null,
    credentialId: "UC-14b59229-c603-497d-bb65-9e0138af9b63",
    verifyUrl: "https://udemy.com/certificate/UC-14b59229-c603-497d-bb65-9e0138af9b63",
    description: "C programming fundamentals — data types, pointers, memory management, and file I/O.",
    color: "#A435F0",
    badge: "",
    featured: false,
    image: "/images/certs/udemy-c.jpeg",
  },
  {
    id: "cert-cpp-udemy",
    name: "C++ Programming",
    issuer: "Udemy",
    issuerLogo: "/images/certs/udemy.jpeg",
    date: "Sep 2024",
    expiryDate: null,
    credentialId: "UC-965e17a8-8a45-470b-8065-ac0c5fb0854e",
    verifyUrl: "https://udemy.com/certificate/UC-965e17a8-8a45-470b-8065-ac0c5fb0854e",
    description: "C++ fundamentals covering OOP, STL, templates, and modern C++ features.",
    color: "#A435F0",
    badge: "",
    featured: false,
    image: "/images/certs/udemy-cpp.jpeg",
  },
  {
    id: "cert-ms-office",
    name: "Microsoft Office (Excel + Word + PowerPoint)",
    issuer: "Learning With Earning",
    issuerLogo: "/images/certs/lwe.jpeg",
    date: "Sep 2024",
    expiryDate: null,
    credentialId: "LWE-95075",
    verifyUrl: "",
    description: "Professional proficiency in Microsoft Excel, Word, and PowerPoint for enterprise productivity.",
    color: "#D83B01",
    badge: "",
    featured: false,
    image: "/images/certs/ms-office.jpeg",
  },
  {
    id: "cert-nust-summer",
    name: "NUST Online Summer Training Camp",
    issuer: "National University of Sciences and Technology (NUST)",
    issuerLogo: "/images/certs/nust.jpeg",
    date: "Sep 2024",
    expiryDate: null,
    credentialId: "",
    verifyUrl: "",
    description: "Summer training program at NUST covering foundational engineering and technology concepts.",
    color: "#1E3A8A",
    badge: "",
    featured: false,
    image: "/images/certs/nust-summer.jpeg",
  },

  // ═══════════════ WORKSHOPS & SEMINARS — PEC & IEEE ═══════════════
  {
    id: "cert-pec-asp",
    name: 'Seminar on "Answer Set Programming for Optimization"',
    issuer: "Pakistan Engineering Council",
    issuerLogo: "/images/certs/pec.jpeg",
    date: "Apr 2026",
    expiryDate: null,
    credentialId: "",
    verifyUrl: "",
    description: "PEC seminar on Answer Set Programming and its applications in real-world optimization problems.",
    color: "#1D4ED8",
    badge: "",
    featured: false,
    image: "/images/certs/pec-asp.jpeg",
  },
  {
    id: "cert-pec-deep-learning-workshop",
    name: 'Workshop on "Real World Applications of Deep Learning"',
    issuer: "Pakistan Engineering Council",
    issuerLogo: "/images/certs/pec.jpeg",
    date: "Dec 2025",
    expiryDate: null,
    credentialId: "",
    verifyUrl: "",
    description: "Hands-on PEC workshop covering deep learning architectures and their practical engineering applications.",
    color: "#1D4ED8",
    badge: "",
    featured: false,
    image: "/images/certs/pec-dl-workshop.jpeg",
  },
  {
    id: "cert-pec-deep-learning-seminar",
    name: 'Seminar on "Deep Learning for Real World Applications"',
    issuer: "Pakistan Engineering Council",
    issuerLogo: "/images/certs/pec.jpeg",
    date: "Dec 2024",
    expiryDate: null,
    credentialId: "",
    verifyUrl: "",
    description: "PEC seminar exploring practical deep learning deployment in industry and research.",
    color: "#1D4ED8",
    badge: "",
    featured: false,
    image: "/images/certs/pec-dl-seminar.jpeg",
  },
  {
    id: "cert-pec-image-processing",
    name: 'Seminar on "Image Processing using Python"',
    issuer: "Pakistan Engineering Council",
    issuerLogo: "/images/certs/pec.jpeg",
    date: "Feb 2025",
    expiryDate: null,
    credentialId: "",
    verifyUrl: "",
    description: "PEC seminar on image processing techniques using Python and OpenCV for engineering applications.",
    color: "#1D4ED8",
    badge: "",
    featured: false,
    image: "/images/certs/pec-image-processing.jpeg",
  },
  {
    id: "cert-pec-ai-impact",
    name: 'Workshop on "Exploring AI\'s Impact & Role in Professional Growth"',
    issuer: "Pakistan Engineering Council",
    issuerLogo: "/images/certs/pec.jpeg",
    date: "Nov 2024",
    expiryDate: null,
    credentialId: "",
    verifyUrl: "",
    description: "PEC workshop exploring AI's transformative impact on engineering careers and professional development.",
    color: "#1D4ED8",
    badge: "",
    featured: false,
    image: "/images/certs/pec-ai-impact.jpeg",
  },
  {
    id: "cert-ieee-cybersecurity",
    name: 'Webinar on "Internet Never Forgets" (OSINT & Cybersecurity)',
    issuer: "IEEE",
    issuerLogo: "/images/certs/ieee.jpeg",
    date: "Jan 2026",
    expiryDate: null,
    credentialId: "",
    verifyUrl: "",
    description: "IEEE cybersecurity webinar covering OSINT techniques, digital footprint awareness, and online privacy.",
    color: "#006699",
    badge: "",
    featured: false,
    image: "/images/certs/ieee-cybersecurity.jpeg",
  },
  {
    id: "cert-ieee-career",
    name: 'Webinar on "Education & Career Development"',
    issuer: "IEEE",
    issuerLogo: "/images/certs/ieee.jpeg",
    date: "Jan 2025",
    expiryDate: null,
    credentialId: "",
    verifyUrl: "",
    description: "IEEE webinar on career planning, skill development, and professional growth in engineering.",
    color: "#006699",
    badge: "",
    featured: false,
    image: "/images/certs/ieee-career.jpeg",
  },

  // ═══════════════ QUIZZES & COMPETITIONS ═══════════════
  {
    id: "cert-code-quest",
    name: "Code Quest Competition Participation",
    issuer: "Software Society, Military College of Signals, NUST",
    issuerLogo: "/images/certs/nust.jpeg",
    date: "Dec 2025",
    expiryDate: null,
    credentialId: "",
    verifyUrl: "",
    description: "Participated in competitive programming competition at NUST MCS organized by the Software Society.",
    color: "#1E3A8A",
    badge: "",
    featured: false,
    image: "/images/certs/code-quest.jpeg",
  },
  {
    id: "cert-git-workshop-nust",
    name: "Git & GitHub Workshop",
    issuer: "Software Society, Military College of Signals, NUST",
    issuerLogo: "/images/certs/nust.jpeg",
    date: "Nov 2025",
    expiryDate: null,
    credentialId: "",
    verifyUrl: "",
    description: "Hands-on workshop on Git version control, collaborative workflows, and GitHub best practices.",
    color: "#1E3A8A",
    badge: "",
    featured: false,
    image: "/images/certs/nust-git-workshop.jpeg",
  },
  {
    id: "cert-python-quiz",
    name: "Python Programming Quiz",
    issuer: "CodeAlpha",
    issuerLogo: "/images/certs/codealpha.jpeg",
    date: "Aug 2025",
    expiryDate: null,
    credentialId: "",
    verifyUrl: "",
    description: "Assessed Python programming proficiency covering data types, functions, OOP, and problem solving.",
    color: "#3776AB",
    badge: "",
    featured: false,
    image: "/images/certs/codealpha-python.jpeg",
  },
  {
    id: "cert-java-quiz",
    name: "Java Programming Quiz",
    issuer: "CodeAlpha",
    issuerLogo: "/images/certs/codealpha.jpeg",
    date: "Aug 2025",
    expiryDate: null,
    credentialId: "",
    verifyUrl: "",
    description: "Assessed Java programming skills covering OOP, collections, exception handling, and I/O.",
    color: "#ED8B00",
    badge: "",
    featured: false,
    image: "/images/certs/codealpha-java.jpeg",
  },
  {
    id: "cert-c-quiz",
    name: "C Programming Quiz",
    issuer: "CodeAlpha",
    issuerLogo: "/images/certs/codealpha.jpeg",
    date: "Aug 2025",
    expiryDate: null,
    credentialId: "",
    verifyUrl: "",
    description: "Assessed C programming fundamentals covering pointers, arrays, memory management, and logic.",
    color: "#A8B9CC",
    badge: "",
    featured: false,
    image: "/images/certs/codealpha-c.jpeg",
  },

  // ═══════════════ OTHER ═══════════════
  {
    id: "cert-ai-basics",
    name: 'Webinar on "Basics of AI"',
    issuer: "Market Brains Co.",
    issuerLogo: "/images/certs/marketbrains.jpeg",
    date: "Aug 2025",
    expiryDate: null,
    credentialId: "",
    verifyUrl: "",
    description: "Introductory AI webinar covering machine learning concepts, neural networks, and AI applications.",
    color: "#6366F1",
    badge: "",
    featured: false,
    image: "/images/certs/ai-basics.jpeg",
  },
  {
    id: "cert-web-dev-workshop",
    name: 'Workshop on "Web Development"',
    issuer: "TechSupportHub",
    issuerLogo: "/images/certs/tsh.jpeg",
    date: "Dec 2024",
    expiryDate: null,
    credentialId: "",
    verifyUrl: "",
    description: "Hands-on web development workshop covering HTML, CSS, JavaScript, and modern frontend practices.",
    color: "#0EA5E9",
    badge: "",
    featured: false,
    image: "/images/certs/tsh-web-dev.jpeg",
  },
  {
    id: "cert-pees-linkedin",
    name: 'Webinar on "How to Start Journey on LinkedIn"',
    issuer: "Pakistan Electrical and Electronics Society",
    issuerLogo: "/images/certs/pees.jpeg",
    date: "Nov 2024",
    expiryDate: null,
    credentialId: "",
    verifyUrl: "",
    description: "Professional development webinar on building a strong LinkedIn presence and personal branding.",
    color: "#0077B5",
    badge: "",
    featured: false,
    image: "/images/certs/pees-linkedin.jpeg",
  },
  {
    id: "cert-pees-freelance",
    name: 'Webinar on "Starting Freelance Career"',
    issuer: "Pakistan Electrical and Electronics Society",
    issuerLogo: "/images/certs/pees.jpeg",
    date: "Dec 2024",
    expiryDate: null,
    credentialId: "",
    verifyUrl: "",
    description: "Webinar covering freelancing fundamentals, client management, and building a remote career.",
    color: "#0077B5",
    badge: "",
    featured: false,
    image: "/images/certs/pees-freelance.jpeg",
  },
];

// ============================================================
// ACHIEVEMENTS
// ============================================================

export const achievements = [
  {
    id: "ach-fbise-hssc",
    title: "Certificate of Appreciation — FBISE HSSC 2024",
    description:
      "Awarded by the APSACS Secretariat for securing 1003/1100 marks in the Federal Board HSSC Pre-Engineering Examination 2024 — recognizing outstanding academic achievement at the national board level.",
    date: "Sep 2024",
    category: "Academic",
    icon: "award",
    color: "#F59E0B",
    organization: "Army Public Schools & Colleges System (APSACS)",
    impact: "1003/1100 marks",
  },
  {
    id: "ach-fbise-hssc1",
    title: "Certificate of Merit — FBISE HSSC-I 2023",
    description:
      "Awarded by Army Public School for achieving 92.12% in the Federal Board HSSC-I Annual Examination 2023, recognizing top academic performance.",
    date: "Mar 2024",
    category: "Academic",
    icon: "award",
    color: "#F59E0B",
    organization: "Army Public School, Fort Road, Rawalpindi",
    impact: "92.12% — Merit Award",
  },
  {
    id: "ach-ssc-first",
    title: "1st Position in School — FBISE SSC 2022",
    description:
      "Awarded the Merit Certificate for securing 1st Position in 501 Model Secondary School, Rawalpindi, in the Federal Board SSC Annual Examination 2022 with an A+ grade.",
    date: "Aug 2022",
    category: "Academic",
    icon: "trophy",
    color: "#EF4444",
    organization: "501 Model Secondary School, Chaklala, Rawalpindi",
    impact: "1st in school",
  },
  {
    id: "ach-nastp-intern",
    title: "Software Engineer Intern — National Aerospace Science & Technology Park",
    description:
      "Completed a competitive Software Engineering internship at NASTP — Pakistan's national aerospace technology park under the Pakistan Air Force — as a 1st-year university student.",
    date: "Jun–Aug 2025",
    category: "Industry",
    icon: "star",
    color: "#3B82F6",
    organization: "NASTP (Pakistan Air Force)",
    impact: "Defense-grade engineering",
  },
  {
    id: "ach-alkhidmat",
    title: "Designed Freelancing Bootcamp for 25 Underprivileged Women",
    description:
      "During a volunteer internship at Alkhidmat Foundation Pakistan, designed and proposed a 4-week freelancing bootcamp (Bano Qabil) to train 25 underprivileged girls in digital and freelancing skills — combining technical education with social impact.",
    date: "Jun–Aug 2025",
    category: "Leadership",
    icon: "users",
    color: "#10B981",
    organization: "Alkhidmat Foundation Pakistan",
    impact: "25 women trained",
  },
  {
    id: "ach-software-society",
    title: "Extended Committee Member — Software Society, IEEE & Community Service",
    description:
      "Served simultaneously as Extended Committee Member in three NUST MCS societies — Software Society, IEEE Student Branch, and MCS Community Service Society — over a 9-month tenure.",
    date: "Sep 2025–May 2026",
    category: "Leadership",
    icon: "users",
    color: "#8B5CF6",
    organization: "NUST MCS",
    impact: "3 societies simultaneously",
  },
  {
    id: "ach-code-quest",
    title: "Code Quest Competition — NUST MCS",
    description:
      "Participated in the Code Quest competitive programming competition organized by the Software Society at Military College of Signals, NUST.",
    date: "Dec 2025",
    category: "Competition",
    icon: "code",
    color: "#EC4899",
    organization: "Software Society, MCS NUST",
    impact: "Competitive programming",
    image: "/images/certs/code-quest.jpeg",
  },
  {
    id: "ach-nylp",
    title: "Indus AI Week — National Youth Leadership Programme 2026",
    description:
      "Selected to participate in the NYLP Indus AI Week, a national programme focused on AI leadership and technology innovation for Pakistan's youth.",
    date: "Feb 2026",
    category: "Leadership",
    icon: "zap",
    color: "#06B6D4",
    organization: "National Youth Leadership Programme (NYLP)",
    impact: "National selection",
    image: "/images/certs/nylp.jpeg",
  },
];

// ============================================================
// TECH STACK — Visual grid section
// ============================================================

export const techStack = [
  { name: "Python", category: "Language", color: "#3776AB", favorite: true },
  { name: "C++", category: "Language", color: "#00599C", favorite: true },
  { name: "Java", category: "Language", color: "#ED8B00", favorite: false },
  { name: "JavaScript", category: "Language", color: "#F7DF1E", favorite: false },
  { name: "PHP", category: "Backend", color: "#777BB4", favorite: false },
  { name: "OpenCV", category: "AI/CV", color: "#5C3EE8", favorite: true },
  { name: "Flutter", category: "Mobile", color: "#54C5F8", favorite: true },
  { name: "Gradio", category: "AI/ML", color: "#FF7C00", favorite: false },
  { name: "LLMs (GenAI)", category: "AI/ML", color: "#10B981", favorite: true },
  { name: "Linux", category: "Systems", color: "#FCC624", favorite: true },
  { name: "GStreamer", category: "Systems", color: "#4A86C8", favorite: false },
  { name: "MySQL", category: "Database", color: "#4479A1", favorite: false },
  { name: "Bootstrap", category: "Frontend", color: "#7952B3", favorite: false },
  { name: "HTML5 & CSS3", category: "Frontend", color: "#E34F26", favorite: false },
  { name: "Git & GitHub", category: "DevOps", color: "#F05032", favorite: true },
  { name: "Figma", category: "Design", color: "#F24E1E", favorite: false },
  { name: "VMware", category: "Systems", color: "#607078", favorite: false },
  { name: "Shell Scripting", category: "Systems", color: "#89E051", favorite: false },
  { name: "Java Swing", category: "Tools", color: "#ED8B00", favorite: false },
  { name: "XAMPP", category: "Backend", color: "#FB7A24", favorite: false },
];

// ============================================================
// STATS / ANIMATED COUNTERS
// ============================================================

export const stats = [
  { label: "Projects Shipped", value: 7, suffix: "+" },
  { label: "Internships", value: 4, suffix: "" },
  { label: "Certifications", value: 30, suffix: "+" },
  { label: "LinkedIn Connections", value: 1000, suffix: "+" },
];

// ============================================================
// VOLUNTEER WORK
// ============================================================

export const volunteerWork = [
  {
    id: "vol-alkhidmat",
    organization: "Alkhidmat Foundation Pakistan",
    role: "Summer Intern (Volunteer)",
    startDate: "Jun 2025",
    endDate: "Aug 2025",
    duration: "3 months",
    description:
      "Contributed to Pakistan's largest welfare organization across social research, community program documentation, and digital skills training initiatives.",
    highlights: [
      "Designed a 4-week freelancing bootcamp (Bano Qabil) to train 25 underprivileged girls in digital and freelancing skills",
      "Researched and documented leading social welfare organizations in Pakistan",
      "Documented Alkhidmat's key programs across health, education, disaster relief, and youth empowerment",
      "Contributed to flood relief fundraising and plantation drive campaigns",
      "Referred new volunteers to support ongoing Alkhidmat initiatives",
    ],
    category: "Social Services",
    color: "#10B981",
  },
];

// ============================================================
// TESTIMONIALS (placeholder — ready for real entries)
// ============================================================

export const testimonials: {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  text: string;
  rating: number;
  linkedIn: string;
  featured: boolean;
}[] = [
  // Add real testimonials here when available from LinkedIn recommendations
];

// ============================================================
// SEO CONFIG
// ============================================================

export const seoConfig = {
  name: "Hafiz Muhammad Tayyab Zia",
  title: "Hafiz Muhammad Tayyab Zia — Software Engineer · AI · NUST",
  description:
    "Portfolio of Hafiz Muhammad Tayyab Zia, a Software Engineering student at NUST Pakistan. Specializing in AI, Computer Vision, Flutter, and full-stack development. Ex-intern at NASTP.",
  keywords: [
    "Hafiz Muhammad Tayyab Zia",
    "Tayyab Zia",
    "Hafiz Tayyab",
    "Tayyab Zia portfolio",
    "Tayyab Zia software engineer",
    "Tayyab Zia NUST",
    "NUST software engineering student",
    "AI engineer Pakistan",
    "Computer Vision Python Pakistan",
    "Flutter developer Pakistan",
    "Software engineering internship Pakistan",
    "NASTP intern",
    "hafiztayyabzia",
  ],
  ogImage: "/og-image.jpeg",
  url: "https://tayyabzia.dev", // ← replace with your actual domain
  twitterHandle: "@hafiztayyabzia",
};

// ============================================================
// NAVIGATION
// ============================================================

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

// ============================================================
// COMMAND PALETTE ACTIONS
// ============================================================

export const commandActions = [
  { label: "Go to Hero", section: "hero", icon: "home" },
  { label: "View Projects", section: "projects", icon: "code" },
  { label: "Read About Me", section: "about", icon: "user" },
  { label: "See Experience", section: "experience", icon: "briefcase" },
  { label: "View Skills", section: "skills", icon: "tools" },
  { label: "View Education", section: "education", icon: "education" },
  { label: "View Achievements", section: "achievements", icon: "award" },
  { label: "Download Resume", action: "resume", icon: "download" },
  { label: "Download CV", action: "cv", icon: "download" },
  { label: "Send Email", action: "email", icon: "mail" },
  { label: "GitHub Profile", action: "github", icon: "github" },
  { label: "LinkedIn Profile", action: "linkedin", icon: "linkedin" },
  { label: "Toggle Theme", action: "theme", icon: "moon" },
];