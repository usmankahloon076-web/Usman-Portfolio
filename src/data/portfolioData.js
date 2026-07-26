// ============================================================
// portfolioData.js — Centralized configuration for Usman Kousar's Portfolio
// All external links, personal info, and content in one place.
// ============================================================

export const personalInfo = {
  name: "Usman Kousar",
  firstName: "Usman",
  brandName: "Usman Kousar",
  title: "AI, Machine Learning & Data Science Specialist",
  location: "Lahore, Pakistan",
  phone: "+92-319-1688545",
  emails: {
    primary: "usmankahloon076@gmail.com",
    secondary: "usmankahloon076@gmail.com",
  },
  summary:
    "Final year computer science student specializing in AI, Machine Learning and Data Science, with hands-on experience building end-to-end machine learning pipelines — from dataset collection and feature engineering to model optimization and production-style reporting. Proficient in Python, Scikit-learn, TensorFlow, PyTorch, and Hugging Face Transformers, with practical experience across classification, regression, and NLP tasks.",
  resumeUrl: "/Usman_Kousar_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/usmankahloon076-web",
  linkedin: "https://linkedin.com/in/Usman-Kousar",
};

export const heroContent = {
  greeting: "Hi, I'm Usman Kousar",
  titleHighlight: "AI & Machine Learning Specialist",
  subtitle:
    "I build end-to-end Machine Learning pipelines, NLP models, and data-driven intelligence systems.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:usmankahloon076@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Usman,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Usman_Kousar_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Usman Kousar</span>, a final-year Computer Science student at UMT (Lahore, Pakistan) specializing in Artificial Intelligence, Machine Learning, and Data Science. I transform raw data into intelligent, scalable models and predictive analytics.`,
  techStack: ["Python", "TensorFlow & PyTorch", "AI & Data Science"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I build intelligent AI & ML solutions",
  description:
    "I follow a structured, data-driven methodology to collect, engineer, train, evaluate, and optimize machine learning models for real-world impact.",
  cards: [
    {
      number: "01",
      title: "Data & EDA",
      text: "Gathering, cleaning, and exploring datasets to uncover trends, handle missing values, and engineer strong signals.",
    },
    {
      number: "02",
      title: "Feature Engineering",
      text: "Structuring feature matrices, scaling variables, and selecting optimal inputs to maximize model signal and accuracy.",
    },
    {
      number: "03",
      title: "Model Training",
      text: "Building & benchmarking classification, regression, and NLP models using Scikit-learn, TensorFlow, and PyTorch.",
    },
    {
      number: "04",
      title: "Evaluation & Insights",
      text: "Fine-tuning decision boundaries, optimizing hyper-parameters, and visualizing ROC curves, F1-scores, and performance metrics.",
    },
  ],
  endText: "Ready for deployment!",
};

// Brand New Technical Skills Data for AI / ML / Data Science
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 90 },
        { name: "C++", level: 85 }
      ]
    },
    {
      title: "ML & AI Frameworks",
      skills: [
        { name: "Scikit-learn", level: 95 },
        { name: "TensorFlow", level: 88 },
        { name: "PyTorch", level: 85 },
        { name: "Hugging Face Transformers", level: 80 }
      ]
    },
    {
      title: "NLP & Text Processing",
      skills: [
        { name: "TF-IDF Vectorization", level: 92 },
        { name: "Tokenization", level: 90 },
        { name: "NLTK", level: 88 },
        { name: "Sentiment Analysis", level: 90 }
      ]
    },
    {
      title: "ML Techniques & Analytics",
      skills: [
        { name: "Classification & Regression", level: 95 },
        { name: "Supervised & Unsupervised Learning", level: 92 },
        { name: "Feature Engineering", level: 90 },
        { name: "Hyperparameter Tuning", level: 88 }
      ]
    },
    {
      title: "Data Visualization & EDA",
      skills: [
        { name: "Pandas & NumPy", level: 95 },
        { name: "Matplotlib & Seaborn", level: 92 },
        { name: "Statistical Analysis", level: 90 },
        { name: "Model Evaluation (AUC-ROC/F1)", level: 92 }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Jupyter Notebook", level: 95 },
        { name: "VS Code", level: 95 },
        { name: "Git & GitHub", level: 90 },
        { name: "Technical Documentation", level: 90 }
      ]
    }
  ]
};

// Applied Research & Technical Direction Data
export const contentCreation = {
  badge: "Technical Direction",
  heading: "Applied AI Research & Technical Communication",
  description: "Beyond model training, I translate complex data into actionable technical reports, visual dashboards, and conference presentations.",
  categories: [
    {
      title: "Conference Track Coordination",
      description: "Coordinated logistics and technical presentation tracks for ICFCS International Conference on Future Computing Systems.",
      stats: "ICFCS 2024-2025",
      icon: "🌐"
    },
    {
      title: "Model Performance Analytics",
      description: "Designed statistical dashboards (Matplotlib, Seaborn) translating AUC-ROC, F1-Score, and Precision-Recall for stakeholders.",
      stats: "Visual Dashboards",
      icon: "📊"
    },
    {
      title: "NLP Misinformation Detection",
      description: "Built production-style text classification pipelines with precision-recall trade-off analysis and linguistic EDA.",
      stats: "NLP Pipeline",
      icon: "🧠"
    },
    {
      title: "Predictive Solar Analytics",
      description: "Engineered thermal stress feature maps for 22 inverters across 68,700+ rows to optimize operational efficiency.",
      stats: "95.85% Efficiency",
      icon: "⚡"
    }
  ]
};

// Leadership Data
export const leadershipList = [
  {
    title: "ICFCS 2024–2025 – International Conference on Future Computing Systems",
    description: "Coordinated logistics and technical presentation tracks for an international AI and computing conference, facilitating communication between researchers and delegates.",
    role: "Organizing Committee Member",
    badge: "Conference Leadership"
  },
  {
    title: "Machine Learning Intern – Developers Hub Corporation",
    description: "Collaborated with cross-functional engineering teams to design and ship automated data cleaning pipelines across 3+ core data sources.",
    role: "ML Engineering Intern",
    badge: "Industry Experience"
  },
  {
    title: "Technical Reporting & Stakeholder Communication",
    description: "Produced statistical performance reports translating complex model evaluation metrics into clear, actionable insights for non-technical stakeholders.",
    role: "Technical Communicator",
    badge: "Collaboration"
  }
];

// Internships Data
export const internshipsList = [
  {
    organization: "Developers Hub Corporation",
    role: "Machine Learning Intern",
    duration: "March 2026 – May 2026",
    skills: [
      "End-to-End Machine Learning Pipelines",
      "Exploratory Data Analysis (EDA)",
      "Automated Data Cleaning & Preprocessing Pipelines",
      "Model Evaluation (AUC-ROC, F1-Score, Precision-Recall)",
      "Technical Stakeholder Dashboard Reporting"
    ],
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"]
  }
];

// Soft Skills Data
export const softSkillsList = [
  { name: "Problem Solving", icon: "🧩", desc: "Breaking complex machine learning challenges into modular, reproducible engineering steps." },
  { name: "Stakeholder Communication", icon: "💬", desc: "Translating model evaluation metrics and statistical findings into clear non-technical insights." },
  { name: "Cross-functional Collaboration", icon: "🤝", desc: "Working seamlessly with engineering and data teams to ship data cleaning pipelines." },
  { name: "Analytical Thinking", icon: "📊", desc: "Performing deep exploratory data analysis to uncover hidden trends, anomalies, and feature signals." },
  { name: "Precision & Quality", icon: "🎯", desc: "Tuning decision boundaries and evaluating precision-recall trade-offs for reliable inference." },
  { name: "Adaptability", icon: "🌟", desc: "Quickly learning emerging frameworks across PyTorch, TensorFlow, and Hugging Face Transformers." },
  { name: "Conference Coordination", icon: "👑", desc: "Organizing presentation tracks and technical logistics for international computing conferences." },
  { name: "Time Management", icon: "⏰", desc: "Balancing final year BS CS studies, internship deliverables, and ML project engineering." }
];

export const projects = [
  {
    id: "ddos-detection",
    number: "01",
    badge: "🚀 Flagship ML Project",
    title: "DDoS Attack Detection System",
    description:
      "A machine learning-based DDoS attack detection system engineered for binary network traffic classification. Preprocessed high-dimensional network data and trained & compared 6 classifiers (Logistic Regression, Decision Tree, Random Forest, Naive Bayes, KNN, and SVM) using Scikit-learn. Evaluated model performance using Accuracy, Precision, Recall, F1-Score, ROC Curves, and Confusion Matrices to identify the best-performing attack detection classifier.",
    techTags: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Random Forest",
      "SVM",
      "Classification",
    ],
    links: {
      github: "https://github.com/Usman-Kousar",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "fake-news-detection",
    number: "02",
    badge: "🧠 NLP & Misinformation",
    title: "Fake News Detection System",
    description:
      "A production-style NLP classification pipeline featuring tokenization, TF-IDF vectorization, and multi-model benchmarking (Naive Bayes, SVM, Logistic Regression) to detect misinformation in news text. Tuned decision boundaries on precision-recall trade-offs informed by linguistic EDA to achieve high detection accuracy.",
    techTags: ["Python", "TF-IDF", "NLP", "NLTK", "Scikit-learn", "Text Classification"],
    links: {
      github: "https://github.com/Usman-Kousar",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "solar-forecasting",
    number: "03",
    badge: "⚡ Predictive Analytics",
    title: "Solar Power Plant Forecasting & Efficiency",
    description:
      "Predictive analytics model covering 22 multi-unit inverters across 68,700+ dataset rows. Applied regression and feature engineering to model AC/DC efficiency ratios and flag hardware anomalies via Z-score analysis. Engineered features mapping thermal stress and generation trends, reaching ~95.85% average active output efficiency.",
    techTags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Regression", "EDA", "Anomaly Detection"],
    links: {
      github: "https://github.com/Usman-Kousar",
      demo: null,
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Machine Learning Intern Certificate",
      issuer: "Developers Hub Corporation",
      icon: "🏆",
      fileUrl: "/certificates/Developer Hub.png",
    },
    {
      name: "AI Course Certificate",
      issuer: "Professional AI Certification",
      icon: "🤖",
      fileUrl: "/certificates/AI Course Certificate.pdf",
    },
    {
      name: "AI Fluency Certification",
      issuer: "AI Fluency Program",
      icon: "💡",
      fileUrl: "/certificates/AI fluency.pdf",
    },
    {
      name: "ML Intern Completion",
      issuer: "Developers Hub Corporation",
      icon: "📊",
      fileUrl: "/certificates/ML Intern.png",
    },
  ],
  viewAllUrl: "/certificates/AI Course Certificate.pdf",
};

export const education = {
  degree: "Bachelor of Science in Computer Science",
  specialization: "Specialization: Artificial Intelligence & Data Science",
  institution: "University of Management & Technology (UMT)",
  cgpa: "3.50 / 4.00",
  graduation: "Expected July 2027",
  coursework: "Machine Learning, Artificial Intelligence, Data Science, Probability & Statistics, Database Management Systems",
};

export const footerContent = {
  taglines: [
    "Artificial Intelligence & Data Science",
    "Machine Learning · NLP · Python",
    "End-to-End ML Pipelines",
  ],
  credential: "BS Computer Science (AI & Data Science) · CGPA 3.50",
  copyright: `© ${new Date().getFullYear()} Usman Kousar | Built with React`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
