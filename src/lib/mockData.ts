export interface Experience {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  icon?: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  year: string;
  venue: string;
  type: "journal" | "conference" | "workshop";
  link?: string;
}

export interface StudentProject {
  id: string;
  title: string;
  description: string;
  skills: string[];
  deadline?: string;
  status: "open" | "in-progress" | "completed";
}

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Associate Dean Faculty Development and Welfare & Deputy HoD",
    organization: "Pimpri Chinchwad College of Engineering, Pune",
    date: "2012 - Present",
    description: "Working as Associate Dean Faculty Development and Welfare, Deputy HoD Computer Engineering Department. Serving as SoP for Eduskill – AICTE initiative, PCCOE ISTE Chapter & CSI Chapter Co-ordinator. Teaching CN, MC, OSA, CO, OSD, SE, SMD, SPM and PG courses.",
  },
  {
    id: "2",
    title: "Faculty Member",
    organization: "G.H. Raisoni College of Engineering & Management, Pune",
    date: "2008 - 2012",
    description: "Served as HOD Computer Engineering (UG & PG). Worked as Chairman ISTE Chapter. Teaching UG: PPL, OS, DS, CN and PG: Mobile Computing, OSD, Information & Network Security.",
  },
  {
    id: "3",
    title: "Faculty Member",
    organization: "MPSTME, Vile Parle (E), Mumbai",
    date: "2007 - 2008",
    description: "Teaching UG: Computer Architecture & Organization, Operating Systems and PG: Network Architecture, Mobile Communication.",
  },
  {
    id: "4",
    title: "Faculty Member",
    organization: "Thakur College of Engineering & Technology, Mumbai",
    date: "2006 - 2007",
    description: "Worked as HOD IT/Placement Incharge/Infosys Campus Connect Co-ordinator. Teaching System Software, Operating Systems, Computer Networks, Information Security, Software Engineering.",
  },
  {
    id: "5",
    title: "Faculty Member",
    organization: "Various Engineering Colleges (SCOE, RAIT)",
    date: "2000 - 2006",
    description: "Worked as HOD CS/IT at RAIT & SCOE, Navi Mumbai. Secretary Computer Society of India, Navi Mumbai Chapter. Teaching Information Theory & Coding, CO, OS, CN, Information Security, DCE, DS, Automata Theory etc.",
  },
  {
    id: "6",
    title: "Faculty Member",
    organization: "S.S.G.M. College of Engineering, Shegaon",
    date: "1997 - 2000",
    description: "Teaching Computer Graphics, Computer Architecture & Organization, Computer Networks, Operating Systems, Robotics, System Analysis & Design.",
  },
  {
    id: "7",
    title: "Research Scholar & Faculty",
    organization: "BITS, Pilani",
    date: "1995 - 1997",
    description: "Completed M.E. (CS) with 8.81 CGPA. Teaching Computer Organization, Object Oriented Programming, Computer Graphics, Switching & Control Logic.",
  },
  {
    id: "8",
    title: "Faculty Member",
    organization: "PREC, Loni",
    date: "1993 - 1995",
    description: "Teaching Numerical Methods, Unix, Computer Organization etc.",
  },
];

export const awards: Award[] = [
  {
    id: "1",
    title: "PhD in Computer Engineering",
    organization: "SGB Amaravati University",
    year: "2016",
    description: "Awarded PhD in Computer Engineering focusing on mobility management and seamless handoff in heterogeneous wireless networks.",
  },
  {
    id: "2",
    title: "HOD Computer/IT Department",
    organization: "Multiple Institutions",
    year: "2006-2018",
    description: "Served as Head of Department Computer/IT for almost 10+ years. Handled many important portfolios at department level as well as Institute level.",
  },
  {
    id: "3",
    title: "Member Board of Studies (Computer/IT)",
    organization: "University of Mumbai & SPPU",
    year: "2002-2016",
    description: "Worked as BoS Member Computer/IT at University of Mumbai and involved in many University level activities including syllabus revision committees.",
  },
  {
    id: "4",
    title: "M.E. (Computer Science) with Distinction",
    organization: "BITS Pilani",
    year: "1997",
    description: "Completed Master of Engineering in Computer Science with 8.81 CGPA.",
  },
  {
    id: "5",
    title: "Life Member Professional Societies",
    organization: "ISTE, CSI, ACM",
    year: "1990-Present",
    description: "Life Member of ISTE (LM 19514), Life Member CSI (00075668), Member ACM (No. 2675484).",
  },
  {
    id: "6",
    title: "Secretary & Chairman CSI Chapter",
    organization: "Computer Society of India, Navi Mumbai",
    year: "2003-2005",
    description: "Worked as Secretary Computer Society of India, Navi Mumbai Chapter and Chairman ISTE Chapter GHRCEM, Pune.",
  },
];

export const publications: Publication[] = [
  {
    id: "1",
    title: "Autonomous Healthcare Systems: Deep Learning-Based IoT Solutions for Continuous Monitoring and Adaptive Treatment",
    authors: ["Dr. G. B. Sambare", "Harsha Bhute", "et al."],
    year: "2024",
    venue: "Journal of Electrical Systems, Vol. 20-1s",
    type: "journal",
    link: "https://doi.org/10.52783/jes.780",
  },
  {
    id: "2",
    title: "Comparative analysis of Human Pose Estimation Methods with Fall Detection and Smart Alarming System",
    authors: ["Dr. Rahul Patil", "Dr. Prashant Ahire", "Dr. G. B. Sambare", "et al."],
    year: "2024",
    venue: "Journal of Electrical Systems, Vol. 20-2",
    type: "journal",
    link: "https://doi.org/10.52783/jes.1996",
  },
  {
    id: "3",
    title: "Detecting Cyber-attacks in the Industrial Internet of Things using a Hybrid Deep Random Neural Network",
    authors: ["Dr. Mrunal K. Pathak", "Arti Bang", "Dr. G. B. Sambare", "et al."],
    year: "2024",
    venue: "Journal of Electrical Systems, Vol. 20-1s",
    type: "journal",
    link: "https://doi.org/10.52783/jes.762",
  },
  {
    id: "4",
    title: "Towards Enhanced Security: An improved approach to Phishing Email Detection",
    authors: ["Dr. G. B. Sambare", "Shailesh Galande", "Sharvari Kale", "et al."],
    year: "2024",
    venue: "Journal of Electrical Systems, Vol. 20-2",
    type: "journal",
    link: "https://doi.org/10.52783/jes.2054",
  },
  {
    id: "5",
    title: "AI-Driven Traffic Management Systems In Smart Cities: A Review",
    authors: ["Ravina D Chavan", "Dr. G. B. Sambare"],
    year: "2024",
    venue: "Educational Administration: Theory and Practice, Vol. 30(5)",
    type: "journal",
    link: "https://doi.org/10.53555/kuey.v30i5.2780",
  },
  {
    id: "6",
    title: "Translating Gestures: Utilizing CNN to Enhance ASL Communication and Understanding",
    authors: ["Dr. G. B. Sambare", "Shailesh Galande", "Purnesh Joshi", "et al."],
    year: "2024",
    venue: "Journal of Electrical Systems, Vol. 20 No. 6s",
    type: "journal",
    link: "https://doi.org/10.52783/jes.3281",
  },
  {
    id: "7",
    title: "Securing Cloud-Based IoT Architectures: A Multi-Protocol Approach",
    authors: ["Dr. H. B. Jadhav", "Dr. G. B. Sambare", "et al."],
    year: "2024",
    venue: "Computer Fraud and Security, Vol. 2024 Iss: 7",
    type: "journal",
    link: "https://doi.org/10.52710/cfs.33",
  },
  {
    id: "8",
    title: "Explainable Machine Learning Models for Real-Time Threat Detection in Cybersecurity",
    authors: ["Bhagyashree D Shendkar", "G B Sambare", "et al."],
    year: "2025",
    venue: "Panamerican Mathematical Journal, Vol 35 No. 1s",
    type: "journal",
    link: "https://doi.org/10.52783/pmj.v35.i1s.2313",
  },
  {
    id: "9",
    title: "Crowdfunding using Blockchain for Startup Ventures",
    authors: ["S. S. Sambare", "Kalyani Khandait", "Kshitij Kolage", "Tanvi Nimbalkar", "Keyur Kolambe"],
    year: "2023",
    venue: "International Journal of Computer Applications (0975 – 8887), Vol. 185 – No. 10",
    type: "journal",
  },
  {
    id: "10",
    title: "Land Registry Using Blockchain",
    authors: ["Disha Shinde", "Snehal Padekar", "S. S. Sambare"],
    year: "2020",
    venue: "Journal of Critical Reviews (Web of Science), Vol 7, Issue 19",
    type: "journal",
  },
  {
    id: "11",
    title: "Blockchain based Secure Data Storage and Access Control System using IPFS",
    authors: ["Shubham Desai", "Onkar Deshmukh", "Rahul Shelke", "S. S. Sambare"],
    year: "2020",
    venue: "Journal of Critical Reviews (Web of Science), Vol 7, Issue 19",
    type: "journal",
  },
  {
    id: "12",
    title: "Energy Efficient MIH based Independent and Heterogeneous Vertical Handover Algorithm",
    authors: ["S. S. Sambare", "Dr. M. U. Kharat", "Avinash U. Jadhav"],
    year: "2018",
    venue: "International Journal of Computer Applications (0975 – 8887), Vol. 182 – No. 21",
    type: "journal",
  },
  {
    id: "13",
    title: "Predicting Human Movement based on Telecom Network Data",
    authors: ["S. S. Sambare", "Dr. M. U. Kharat"],
    year: "2017",
    venue: "International Journal of Computer Applications (0975 – 8887), Vol. 167 – No. 4",
    type: "journal",
  },
  {
    id: "14",
    title: "Algorithm to analyze the probability of False Initiation in order to provide Seamless mobility in Next Generation Wireless System",
    authors: ["S. S. Sambare", "Dr. M. U. Kharat"],
    year: "2017",
    venue: "International Journal of Computer Applications (0975 – 8887), Vol. 167 – No. 4",
    type: "journal",
  },
  {
    id: "15",
    title: "An Integrated WLAN and WiMAX with QoS based Vertical Handoff Scheme",
    authors: ["S. S. Sambare", "Madhuri R. Pawar"],
    year: "2013",
    venue: "IJCNWMC, Vol. 2, Issue 3",
    type: "journal",
  },
  {
    id: "16",
    title: "Gmail Phishing Detector Extension: A Machine Learning-based Chrome Extension for Real-Time Phishing Detection",
    authors: ["Dr. G. B. Sambare", "Gauri Pawar", "et al."],
    year: "2025",
    venue: "10th ICT4SD 2025, Springer, Goa, India",
    type: "conference",
  },
  {
    id: "17",
    title: "Stock Recommendations Leveraging AI/ML for Informed Long-Term Investment Decisions",
    authors: ["Dr. Govind Sambare", "Lalit Deore", "Harsh Itkar", "Onkar Jadhav", "Sarthak Joshi"],
    year: "2025",
    venue: "10th ICT4SD 2025, Springer, Goa, India",
    type: "conference",
  },
  {
    id: "18",
    title: "Survey of Interactive Document Query Systems Using RAG and LangChain",
    authors: ["Dr. G. B. Sambare", "Vedant Sonawane", "et al."],
    year: "2025",
    venue: "IEEE ICOCT 2025",
    type: "conference",
  },
  {
    id: "19",
    title: "Implementation of an Interactive Query System Using Nomic Text Embed, DeepSeek R1 1.5B, and Cosine Similarity rankers",
    authors: ["Vedant Sonawane", "Dr. G. B. Sambare"],
    year: "2025",
    venue: "IEEE ICOCT 2025",
    type: "conference",
  },
  {
    id: "20",
    title: "Blockchain-Enhanced KYC: A Secure and Decentralized Framework for Identity Verification",
    authors: ["Dr. G. B. Sambare", "Sankarsha Shelke", "Sahil Wawdhane", "Harshad Wable", "Abhinav Thube"],
    year: "2025",
    venue: "10th ICT4SD 2025, Springer, Goa, India",
    type: "conference",
  },
  {
    id: "21",
    title: "Document Verification System and Validation Against QR Codes",
    authors: ["S.S. Sambare", "Utkarsh Pathak", "Venu Sonavane", "Mitali Gadiya", "Suyash Musale"],
    year: "2023",
    venue: "IEEE ICCUBEA",
    type: "conference",
  },
  {
    id: "22",
    title: "Crowdfunding Using Blockchain for Startup Ventures",
    authors: ["S.S. Sambare", "Kalyani Khandait", "Keyur Kolambe", "Kshitij Kolage", "Tanvi Nimbalkar"],
    year: "2023",
    venue: "IEEE ICCUBEA",
    type: "conference",
  },
  {
    id: "23",
    title: "The role of Blockchain for sustainable Agri food Supply Chain Management",
    authors: ["S. S. Sambare", "Madhukar R Borphalkar", "Atharva Utekar", "Vaishnavi Salunkhe"],
    year: "2022",
    venue: "IEEE ICCUBEA",
    type: "conference",
  },
  {
    id: "24",
    title: "Automated Platform for Onboarding Employee",
    authors: ["S. S. Sambare", "Akriti Singh", "Chirag Kriplani", "Shweta Kale", "Tanuj Balkhande"],
    year: "2022",
    venue: "IEEE ICCUBEA",
    type: "conference",
  },
  {
    id: "25",
    title: "Land Registry Using Blockchain - A Survey of existing systems and proposing a feasible solution",
    authors: ["Disha Shinde", "Snehal Padekar", "S. S. Sambare", "Abdul Wasay"],
    year: "2019",
    venue: "IEEE ICCUBEA",
    type: "conference",
  },
  {
    id: "26",
    title: "Blockchain based Secure Data Storage and Access Control System using Cloud",
    authors: ["Shubham Desai", "Onkar Deshmukh", "Rahul Shelke", "Harish Choudhary", "S. S. Sambare"],
    year: "2019",
    venue: "IEEE ICCUBEA",
    type: "conference",
  },
  {
    id: "27",
    title: "Modified Efficient Handover mechanism for WiFi-WiMAX Heterogeneous Network Environment",
    authors: ["S. S. Sambare", "Dr. M. U. Kharat", "Abhilasha Zatke"],
    year: "2018",
    venue: "IEEE Third International Conference on Computing, Communication, Control And Automation",
    type: "conference",
  },
  {
    id: "28",
    title: "Congestion Control in Heterogeneous Wireless Networks based on 802.21 Standard",
    authors: ["Kunal Lale", "Santosh Sambare"],
    year: "2017",
    venue: "IEEE Third International Conference on Computing, Communication, Control And Automation",
    type: "conference",
  },
  {
    id: "29",
    title: "Diet Recommendation based on Prakriti and Season using Fuzzy Ontology and Type-2 Fuzzy Logic",
    authors: ["Shital V. Chavan", "S. S. Sambare", "Dr. Anuruddha Joshi"],
    year: "2016",
    venue: "IEEE ICCUBEA",
    type: "conference",
  },
  {
    id: "30",
    title: "Enhancement on Privacy Permission Management on Android Apps",
    authors: ["Supriya Shinde", "S. S. Sambare"],
    year: "2015",
    venue: "Global Conference on Communication Technologies (GCCT 2015)",
    type: "conference",
  },
];

export const studentProjects: StudentProject[] = [
  {
    id: "1",
    title: "Blockchain-Enhanced KYC System",
    description: "Develop a secure and decentralized framework for identity verification using blockchain technology. Focus on implementing privacy-preserving mechanisms and efficient verification protocols.",
    skills: ["Blockchain", "Smart Contracts", "Cryptography", "Web3", "Python"],
    status: "open",
  },
  {
    id: "2",
    title: "AI-Driven Phishing Email Detection",
    description: "Create a machine learning-based system for real-time phishing email detection. Develop Chrome extension for Gmail integration with explainable AI features.",
    skills: ["Machine Learning", "NLP", "Chrome Extension", "JavaScript", "Python"],
    status: "open",
  },
  {
    id: "3",
    title: "5G Network Handover Optimization",
    description: "Design and implement seamless handover mechanisms for 5G networks including WLAN to LTE transitions. Focus on reducing handover latency and false handoff initiation.",
    skills: ["5G Networks", "Network Protocols", "Python", "Network Simulation"],
    status: "open",
  },
  {
    id: "4",
    title: "IoT-Based Healthcare Monitoring System",
    description: "Build an autonomous healthcare system using deep learning and IoT for continuous monitoring and adaptive treatment. Implement real-time data processing and alerting mechanisms.",
    skills: ["IoT", "Deep Learning", "Healthcare", "Python", "Sensor Networks"],
    status: "open",
  },
  {
    id: "5",
    title: "Cybersecurity Threat Detection using ML",
    description: "Develop explainable machine learning models for real-time cyber-attack detection in Industrial IoT environments. Focus on hybrid deep neural network approaches.",
    skills: ["Machine Learning", "Cybersecurity", "IoT Security", "Python", "TensorFlow"],
    status: "open",
  },
  {
    id: "6",
    title: "Smart Traffic Management System",
    description: "Create an AI-driven traffic management system for smart cities. Implement computer vision and deep learning techniques for traffic flow optimization and congestion prediction.",
    skills: ["Computer Vision", "AI/ML", "Smart Cities", "Python", "Real-time Systems"],
    status: "open",
  },
  {
    id: "7",
    title: "ASL Translation using CNN",
    description: "Develop a CNN-based system to enhance American Sign Language (ASL) communication and understanding. Focus on gesture recognition and real-time translation capabilities.",
    skills: ["Computer Vision", "CNN", "Deep Learning", "Python", "OpenCV"],
    status: "open",
  },
  {
    id: "8",
    title: "Document Query System using RAG",
    description: "Build an interactive document query system using Retrieval Augmented Generation (RAG) and LangChain. Implement advanced NLP techniques for intelligent document understanding.",
    skills: ["NLP", "RAG", "LangChain", "Python", "Vector Databases"],
    status: "open",
  },
];
