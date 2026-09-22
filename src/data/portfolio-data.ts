import { deepFreeze } from "@/utils/security";

export interface MobileProject {
  id: string;
  title: string;
  category: 'Flutter' | 'Swift' | 'Kotlin / KMP' | 'Both';
  description: string;
  longDescription: string;
  platform: string;
  image: string;
  screenshots?: string[];
  features: string[];
  techStack: string[];
  githubUrl: string;
  demoUrl: string;
  stars: number;
}

export interface WPProject {
  id: string;
  title: string;
  category: 'SaaS' | 'E-commerce' | 'Corporate';
  description: string;
  longDescription: string;
  image?: string;
  liveUrl: string;
  githubUrl: string;
  techStack: string[];
  highlights: string[];
}

export interface OtherProject {
  id: string;
  title: string;
  category: 'AI / Machine Learning' | 'Software Engineering' | 'University Project';
  description: string;
  longDescription: string;
  image?: string;
  screenshots?: string[];
  githubUrl: string;
  techStack: string[];
  highlights: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  verifyUrl: string;
  image: string;
  skills: string[];
  badgeColor: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  honours: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  courses: string[];
  achievements: string[];
}

export const PORTFOLIO_OWNER = deepFreeze({
  name: "K. D. Ruvindu Dulaksha",
  title: "Junior Mobile Application Developer (Flutter, iOS) | WordPress Developer",
  degree: "BSc (Hons) Computing - First Class Honours",
  roles: [
    "Junior Flutter Developer",
    "iOS Mobile Developer",
    "WordPress Developer",
    "First Class Honours Graduate",
    "Gold Medalist & Batch Topper"
  ],
  bio: "First Class Honours Computing graduate, Gold Medalist and Batch Topper, with 2+ years of hands-on experience developing 10+ mobile, web, and AI-powered applications. Skilled in Flutter/Dart, iOS/Swift, and custom WordPress development, with practical experience in Firebase, Supabase, REST APIs, and Google Gemini API.",
  freelanceServices: [
    "WordPress Development",
    "Flutter Mobile Apps",
    "iOS Development"
  ],
  companyWork: [
    "Remote Roles",
    "Hybrid Roles",
    "Onsite Roles"
  ],
  targetRoles: "Junior Mobile Developer (Flutter, iOS) & WordPress Developer",
  location: "Ja-Ela, Sri Lanka • Available Remote, Hybrid & Onsite",
  availability: "Freelance & Company (Remote / Hybrid / Onsite)",
  status: "Available for Remote, Hybrid & Onsite Roles",
  stats: {
    yearsExperience: "2+",
    projectsCompleted: "10+",
    happyClients: "10+",
    codeQuality: "100%",
    likes: 120,
    stars: 89,
    commitsThisYear: 250,
  },
  contact: {
    email: "ruvindufdo@gmail.com",
    phone: "+94 76 393 0373",
    location: "Ja-Ela, Sri Lanka",
  },
  socials: [
    { name: "GitHub", url: "https://github.com/ruvindu-dulaksha" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/ruvindu-dulaksha-28527028b/" },
    { name: "Google Developer", url: "https://g.dev" },
  ]
});

export const EDUCATION_DATA: EducationItem = deepFreeze({
  degree: "Bachelor of Science (Hons) in Computing",
  field: "Computer Science & Software Engineering",
  honours: "First Class Honours",
  institution: "Coventry University (UK), delivered through NIBM, Colombo",
  period: "2024 - 2026",
  location: "Colombo, Sri Lanka",
  description: "First Class Honours graduate with Gold Medal and Batch Topper recognition. Focused on advanced software engineering, cross-platform mobile development, web content management systems, AI/ML integration, and human-computer interaction.",
  courses: [
    "Mobile Development (Flutter & iOS)",
    "Web Development & WordPress",
    "AI & Machine Learning",
    "Database Systems & Backend",
    "Software Engineering Principles",
    "UI/UX Design & Figma"
  ],
  achievements: [
    "Gold Medalist — Highest Academic Achievement",
    "Batch Topper — Top of Graduating Class",
    "First Class Honours Distinction"
  ]
});

export const ADDITIONAL_EDUCATION = deepFreeze([
  {
    degree: "Higher National Diploma in Software Engineering",
    institution: "NIBM, Colombo, Sri Lanka",
    period: "2023 – 2024"
  },
  {
    degree: "Diploma in Software Engineering",
    institution: "NIBM, Colombo, Sri Lanka",
    period: "2022 – 2023"
  },
  {
    degree: "Diploma in Software Engineering",
    institution: "ESOFT Metro Campus, Ja-Ela, Sri Lanka",
    period: "2017 – 2018"
  }
]);

export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  type: string;
  period: string;
  location: string;
  category?: 'industry' | 'freelance' | 'internship';
  highlights: string[];
  skills?: string[];
  recommendationLetter?: {
    image: string;
    signatory: string;
    signatoryRole: string;
    quote?: string;
    verifiedProjects?: string[];
  };
}

export const WORK_EXPERIENCE_DATA: WorkExperience[] = deepFreeze([
  {
    id: "exp-mentura",
    title: "WordPress Developer",
    company: "Mentura Global",
    type: "Intern → Contract",
    period: "Jul 2026 – Aug 2026",
    location: "Remote",
    category: "industry",
    highlights: [
      "Built and customized client WordPress websites using Elementor, custom themes, plugins, and ACF.",
      "Developed custom functionality using PHP, HTML, CSS, and JavaScript.",
      "Implemented SEO, accessibility, and performance best practices."
    ],
    skills: ["WordPress", "Elementor", "ACF", "PHP", "JavaScript", "SEO & Performance"]
  },
  {
    id: "exp-freelance",
    title: "Freelance Web (WordPress) & Mobile Developer",
    company: "Self-Employed",
    type: "Freelance",
    period: "2024 – Present",
    location: "Remote",
    category: "freelance",
    highlights: [
      "Delivered 6–7 freelance projects for education, tourism, government and media clients.",
      "Built the Ceylon Tour Advisor tourism platform (WordPress) and iOS front-end of the Voyara app.",
      "Diagnosed and fixed bugs across multiple Flutter apps.",
      "Managed full project lifecycle solo: requirements, UI/UX, development, deployment, support."
    ],
    skills: ["Flutter", "iOS / Swift", "WordPress", "UI/UX Design", "REST APIs", "Client Management"]
  },
  {
    id: "exp-revo",
    title: "Mobile & Web Application Developer",
    company: "Revo Interactive (Pvt) Ltd",
    type: "Paid Internship",
    period: "02 May 2024 – 30 Apr 2025",
    location: "Makumbura, Sri Lanka • Remote",
    category: "internship",
    highlights: [
      "Completed 1-year paid internship delivering several production mobile, AI, and web projects with minimum supervision.",
      "Engineered cross-platform mobile apps: Chillox Mobile App (Flutter), Savoease Food Ordering App (Flutter), and AR prototypes.",
      "Built AI systems including Chat with PDF (Gemini API & GPT-Neo RAG Systems) and Kotlin Multiplatform AI ChatBot.",
      "Developed high-traffic custom WordPress platforms (miraijapaneseschool.com, ceylontouradviser.com, V7family.com, Nyscoiff.com).",
      "Created hie.li Chrome Web Extension and maintained version control workflows across Git, GitHub, and Bitbucket."
    ],
    skills: ["Flutter", "Kotlin", "Gemini API (RAG)", "Firebase", "Chrome Extension", "WordPress", "Python", "Figma", "Git/Bitbucket"],
    recommendationLetter: {
      image: "/images/revo_internship_letter.jpg",
      signatory: "Sampath Gamage",
      signatoryRole: "Managing Director, Revo Interactive (Pvt) Ltd",
      quote: "Mr. Ruvindu shows a lot of skill in his work and we found him to be extremely curious and hardworking. His association with us was beneficial and he worked with minimum supervision and deliver quality output in meeting deadlines. I believe that he will make a valuable addition to any organization that he may join.",
      verifiedProjects: [
        "Chillox Mobile App (Flutter)",
        "Savoease Food Ordering App (Flutter)",
        "Chat with PDF – Gemini API (RAG)",
        "Kotlin Multiplatform AI ChatBot",
        "hie.li Chrome Extension",
        "miraijapaneseschool.com (WordPress)",
        "ceylontouradviser.com (WordPress)",
        "AR Project Prototyping"
      ]
    }
  },
  {
    id: "exp-softgallery",
    title: "WordPress Developer & Web Support Trainee",
    company: "Soft Gallery (Pvt) Ltd",
    type: "Trainee",
    period: "Jan 2021 – Mar 2021",
    location: "Hybrid",
    category: "internship",
    highlights: [
      "Built and maintained 4 complete WordPress websites in 3 months.",
      "Handled theme customisation, plugins, performance optimisation, SEO and responsive design."
    ],
    skills: ["WordPress", "Theme Customization", "Speed Optimization", "Responsive Design", "Client Support"]
  }
]);

export const CERTIFICATIONS_DATA: Certification[] = deepFreeze([
  {
    id: "cert-flutter-ibm",
    title: "Flutter and Dart: Developing iOS, Android, and Mobile Apps",
    issuer: "IBM (Coursera)",
    issueDate: "Issued: Aug 25, 2025",
    credentialId: "0EH0OSWWCXFZ",
    verifyUrl: "https://coursera.org/verify/0EH0OSWWCXFZ",
    image: "/images/cert_ibm_flutter.png",
    skills: ["Flutter", "Dart", "iOS Development", "Android Development", "Mobile Architecture"],
    badgeColor: "from-blue-600 to-indigo-500"
  },
  {
    id: "cert-hour-of-code",
    title: "The Hour of Code",
    issuer: "Code.org",
    issueDate: "Certificate of Completion",
    credentialId: "Code.org • Google Sponsored",
    verifyUrl: "https://drive.google.com/file/d/1rQ-1ZOad7jm6t-axquBv8hGV1JIwnWfp/view?usp=sharing",
    image: "/images/cert_hour_of_code.jpg",
    skills: ["CodeAI", "Computer Science", "Programming Concepts", "Problem Solving"],
    badgeColor: "from-cyan-400 to-teal-500"
  },
  {
    id: "cert-mobile-db-ibm",
    title: "Mobile App Notifications, Databases, & Publishing",
    issuer: "IBM / SkillUp (Coursera)",
    issueDate: "Issued: Aug 25, 2025",
    credentialId: "K1P3J4DT75E2",
    verifyUrl: "https://coursera.org/verify/K1P3J4DT75E2",
    image: "/images/cert_ibm_notifications.png",
    skills: ["Mobile Application Development", "Flutter", "SQLite", "Firebase", "App Publishing"],
    badgeColor: "from-emerald-500 to-cyan-400"
  },
  {
    id: "cert-flutter-dp",
    title: "Flutter Course",
    issuer: "DP Education IT Campus",
    issueDate: "Issued: Aug 22, 2025",
    credentialId: "DP-FLT-2025",
    verifyUrl: "https://www.linkedin.com/in/ruvindu-dulaksha-28527028b/overlay/Certifications/1371763339/treasury/?profileId=ACoAAEZXAIUBK8f7-kh70lA5Vo75shxOzBYVbbM",
    image: "/images/cert_dp_flutter.png",
    skills: ["Flutter", "Dart", "Mobile Application Development", "Cross-Platform UI"],
    badgeColor: "from-rose-500 to-red-600"
  },
  {
    id: "cert-gen-ai-google",
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    issueDate: "Issued: 2025",
    credentialId: "GC-GENAI-2025",
    verifyUrl: "https://www.cloudskillsboost.google",
    image: "/images/cert_google.png",
    skills: ["Generative AI", "LLMs", "Google Cloud", "AI Fundamentals"],
    badgeColor: "from-blue-500 to-cyan-400"
  },
  {
    id: "cert-gemini-data-sci",
    title: "Gemini for Data Scientists",
    issuer: "Google Cloud",
    issueDate: "Issued: 2025",
    credentialId: "GC-GEM-DS-2025",
    verifyUrl: "https://www.cloudskillsboost.google",
    image: "/images/cert_google.png",
    skills: ["Gemini API", "Data Science", "BigQuery", "Google Cloud"],
    badgeColor: "from-cyan-400 to-blue-600"
  },
  {
    id: "cert-bigquery-ml",
    title: "BigQuery ML for Inference",
    issuer: "Google Cloud",
    issueDate: "Issued: 2025",
    credentialId: "GC-BQML-2025",
    verifyUrl: "https://www.cloudskillsboost.google",
    image: "/images/cert_google.png",
    skills: ["BigQuery ML", "Machine Learning", "SQL", "Google Cloud"],
    badgeColor: "from-amber-500 to-orange-400"
  },
  {
    id: "cert-python-moratuwa-2024",
    title: "Python Programming",
    issuer: "University of Moratuwa",
    issueDate: "Issued: Feb 2024",
    credentialId: "I4R6r1HTgI",
    verifyUrl: "https://open.uom.lk/lms/mod/customcert/view.php?id=838&downloadown=1",
    image: "/images/other_ai.png",
    skills: ["Python (Programming Language)", "Data Structures", "Algorithms", "Object-Oriented Programming"],
    badgeColor: "from-amber-400 to-yellow-500"
  },
  {
    id: "cert-python-moratuwa-2023",
    title: "Python for Beginners",
    issuer: "University of Moratuwa",
    issueDate: "Issued: Mar 2023",
    credentialId: "539UCD83Ab",
    verifyUrl: "https://open.uom.lk/lms/mod/customcert/view.php?id=675&downloadown=1",
    image: "/images/other_ai.png",
    skills: ["Python (Programming Language)", "Programming Fundamentals", "Logic & Syntax"],
    badgeColor: "from-green-500 to-emerald-400"
  }
]);

export const MOBILE_PROJECTS_DATA: MobileProject[] = deepFreeze([
  {
    id: "mobile-freshshop",
    title: "FreshShop – Grocery App (Provider)",
    category: "Flutter",
    description: "Modern shopping catalog & cart app demonstrating clean architecture & Provider state management.",
    longDescription: "A clean, modern, and high-performance Flutter grocery catalog and cart application built to demonstrate clean architectural principles and state management using the Provider pattern. Features include decoupled CartModel state propagation, dynamic GroceryItemTile with product palette coloration, reactive real-time cart calculator, and Material 3 design tokens with Google Fonts.",
    platform: "Flutter • Provider • Material 3",
    image: "/images/freshshop_home.png",
    screenshots: [
      "/images/freshshop_intro.png",
      "/images/freshshop_home.png",
      "/images/freshshop_cart.png"
    ],
    features: [
      "State Management via Provider (ChangeNotifier & Consumer)",
      "Decoupled Architecture with CartModel Data Layer",
      "Reactive Real-Time Total Price & Cart Calculator",
      "Dynamic GroceryItemTile with Item Palette Coloration",
      "Modern Material 3 UX with Google Fonts (Noto Serif)"
    ],
    techStack: ["Flutter", "Provider", "Dart", "Material 3", "State Management"],
    githubUrl: "https://github.com/ruvindu-dulaksha/FreshShop-Flutter-Simple-Grocery-App-Provider-State-Management-",
    demoUrl: "https://github.com/ruvindu-dulaksha/FreshShop-Flutter-Simple-Grocery-App-Provider-State-Management-",
    stars: 38
  },
  {
    id: "mobile-lankaride",
    title: "Lanka Ride – Tuk-Tuk Tracking & Zone Safety Analysis",
    category: "Flutter",
    description: "Real-time GPS tracking & AI zone safety analysis for tuk-tuk drivers in Sri Lanka, solving union territory conflicts.",
    longDescription: "A production-ready Flutter mobile application and University Thesis project engineered to provide real-time traffic zone analysis and driver safety features for tuk-tuk (auto-rickshaw) drivers in Sri Lanka. Powered by Flutter & Riverpod v2 with Google Maps Platform, Firebase Firestore real-time driver streams, and a Python Flask backend executing an XGBoost ML predictive risk model integrated with OpenWeather API.",
    platform: "Flutter • Riverpod • XGBoost ML • Google Maps • Firebase",
    image: "/images/lankaride_showcase.png",
    screenshots: [
      "/images/lankaride_showcase.png",
      "/images/lankaride_map.png",
      "/images/lankaride_risk.png"
    ],
    features: [
      "Real-Time Driver Tracking on Google Maps (Firestore live updates within 5km radius)",
      "AI-Powered Zone Risk Assessment (XGBoost ML model via Python Flask backend)",
      "Dynamic Zone Classification: 🔴 Red Zone (Union Strongholds), 🟡 Yellow (Opportunity), 🟢 Green (Safe)",
      "Live Weather Integration via OpenWeather API (rain detection & demand intensity)",
      "User Authentication & Driver Profiles (custom vehicle color, license plate, photo upload)"
    ],
    techStack: ["Flutter", "Riverpod v2", "Google Maps", "Firebase Firestore", "Python (Flask)", "XGBoost ML", "OpenWeather API"],
    githubUrl: "https://github.com/ruvindu-dulaksha/LankaRide",
    demoUrl: "https://github.com/ruvindu-dulaksha/LankaRide",
    stars: 54
  },
  {
    id: "mobile-classifier",
    title: "Cat vs Dog AI Image Classifier",
    category: "Flutter",
    description: "On-device deep learning image classification app powered by a custom-trained TensorFlow Lite DNN model.",
    longDescription: "A fast and intuitive Flutter mobile application that performs real-time, on-device image classification of cats and dogs using an embedded TensorFlow Lite deep neural network (DNN). Features include camera capture, gallery selection, offline inference without cloud latency, real-time confidence scores, and a clean Material Design 3 interface with custom Lottie animations.",
    platform: "Flutter • TensorFlow Lite • Deep Learning • Android",
    image: "/images/classifier_result.png",
    screenshots: [
      "/images/classifier_splash.png",
      "/images/classifier_home.png",
      "/images/classifier_result.png"
    ],
    features: [
      "On-Device TFLite Inference (Zero latency, full offline capability)",
      "Real-time Probability & Confidence Scoring (e.g., Dog 81.83%)",
      "Dual Input Modes (Camera capture or local photo gallery selection)",
      "Custom Deep Neural Network (Trained on 32x32 dataset via Jupyter Notebook)",
      "Clean Material 3 UI with Lottie Splash & Error Handling"
    ],
    techStack: ["Flutter", "Dart", "TensorFlow Lite", "Deep Learning (DNN)", "Python", "Material 3"],
    githubUrl: "https://github.com/ruvindu-dulaksha/simple-image-classification-app",
    demoUrl: "https://github.com/ruvindu-dulaksha/simple-image-classification-app",
    stars: 31
  },
  {
    id: "mobile-vistabids",
    title: "VistaBids – Real Estate Auction iOS App",
    category: "Swift",
    description: "Modern iOS real estate auction application with live real-time bidding, MapKit geo-discovery, Stripe payments, and Firebase backend.",
    longDescription: "A comprehensive real estate auction platform built natively with Swift 5.9+ and SwiftUI for iOS 16.0+. Features real-time property bidding with dynamic countdown timers and auto-bidding, MapKit location services for discovering nearby properties, Stripe secure payments with multi-factor OTP verification, ARKit 360° property visualization, and full Firebase integration (Firestore live database, Auth with Google Sign-In, Storage, and Cloud Messaging).",
    platform: "iOS Native • Swift 5.9+ • SwiftUI • Firebase • MapKit",
    image: "/images/vistabids_details.png",
    screenshots: [
      "/images/vistabids_details.png",
      "/images/vistabids_sales.png",
      "/images/vistabids_map.png"
    ],
    features: [
      "Real-Time Property Bidding with dynamic countdown timers & auto-bidding limits",
      "Interactive MapKit Integration displaying property locations, pins & valuations",
      "Comprehensive Property Sales Catalog with advanced category filtering & multi-image carousels",
      "Secure Stripe Payment Integration with multi-factor OTP verification & payment cart",
      "Firebase Firestore real-time synchronization, Firebase Auth (Google Sign-In) & Cloud Messaging",
      "Clean MVVM Architecture with Swift Package Manager, Lottie animations & Dark/Light mode"
    ],
    techStack: ["Swift 5.9+", "SwiftUI", "Firebase Firestore", "Firebase Auth", "MapKit", "Stripe", "ARKit", "MVVM"],
    githubUrl: "https://github.com/ruvindu-dulaksha/VistaBids-Swift-App",
    demoUrl: "https://github.com/ruvindu-dulaksha/VistaBids-Swift-App",
    stars: 64
  },
  {
    id: "mobile-card-workout",
    title: "Card Workout – iOS Swift App",
    category: "Swift",
    description: "Interactive iOS card workout application built with Swift and UIKit/Storyboard, featuring randomized card switching, rules modal, and workout timers.",
    longDescription: "A fun and dynamic card workout iOS application built with Swift and UIKit/Storyboard, inspired by Sean Allen's iOS development tutorials. Randomly cycles through a standard 52-card deck at customizable intervals where each card suit corresponds to specific physical exercises (e.g. Hearts for Push-ups, Spades for Squats). Features smooth card transitions, a Stop button to freeze on an exercise card, a Restart button to reset the workout cycle, and a dedicated Rules modal view controller explaining exercise mappings.",
    platform: "iOS Native • Swift • UIKit • Storyboard • Xcode 15+",
    image: "/images/card_workout_app.png",
    screenshots: [
      "/images/card_workout_app.png"
    ],
    features: [
      "Random Card Switching Engine with dynamic timer intervals",
      "Interactive Controls (Stop to freeze on an exercise, Restart to cycle again)",
      "Rules Modal View Controller with exercise instructions & suit mappings",
      "Native UIKit & Storyboard architecture with Auto Layout constraints",
      "Clean UI optimized for modern iOS devices (iOS 16, 17, 18+)"
    ],
    techStack: ["Swift", "UIKit", "Storyboard", "Xcode 15+", "Auto Layout", "iOS 18"],
    githubUrl: "https://github.com/ruvindu-dulaksha/card-workout-ios-swift-app",
    demoUrl: "https://github.com/ruvindu-dulaksha/card-workout-ios-swift-app",
    stars: 19
  },
  {
    id: "mobile-kmp-chatbot",
    title: "MiMi AI – Gemini Kotlin Multiplatform Chatbot",
    category: "Kotlin / KMP",
    description: "Cross-platform AI assistant built with Kotlin Multiplatform (KMP) & Compose Multiplatform, powered by Google Gemini API & FAISS semantic search.",
    longDescription: "A modern, cross-platform conversational AI assistant application (MiMi AI) built with Kotlin Multiplatform (KMP) and JetBrains Compose Multiplatform for Android and iOS. Integrates Google's Gemini API for intelligent, contextual multi-turn conversations, semantic memory search via FAISS, Ktor Client for resilient asynchronous streaming requests, and Koin for scalable dependency injection following the Model-View-Intent (MVI) architecture pattern.",
    platform: "Android & iOS • Kotlin Multiplatform • Compose Multiplatform • Gemini API",
    image: "/images/mimi_ai_home.png",
    screenshots: [
      "/images/mimi_ai_home.png",
      "/images/mimi_ai_chat.png",
      "/images/mimi_ai_splash.png"
    ],
    features: [
      "AI-Powered Chat with Google Gemini API for fast, contextual, multi-turn reasoning",
      "Shared UI via Compose Multiplatform with consistent animations & dark neon theme",
      "Semantic Search & Context Memory powered by FAISS vector indexing",
      "Clean MVI Architecture with reactive, unidirectional state flow & Koin Dependency Injection",
      "Asynchronous Networking via Ktor Client with streaming API support & error handling",
      "Cross-Platform Code Sharing targeting both Android & iOS from a single unified codebase"
    ],
    techStack: ["Kotlin (KMP)", "Compose Multiplatform", "Google Gemini API", "Ktor Client", "Koin (DI)", "MVI Pattern", "FAISS"],
    githubUrl: "https://github.com/ruvindu-dulaksha/chatbot",
    demoUrl: "https://github.com/ruvindu-dulaksha/chatbot",
    stars: 42
  },
  {
    id: "mobile-vistaparadias",
    title: "VistaParadias – Movie & TV Discovery App",
    category: "Flutter",
    description: "Sleek streaming UI for discovering latest movies, popular TV shows, and cast details via TMDb API.",
    longDescription: "A Flutter-based movie and TV show exploration application designed to deliver a seamless, visually stunning streaming experience. Powered by The Movie Database (TMDb) REST API, it features Now Playing cinema releases, trending TV shows, instant multi-criteria title search, cast listings, synopsis, and viewer rating metrics in a rich dark cinema theme.",
    platform: "Flutter • Dart • TMDb API • REST",
    image: "/images/vistaparadias_home.png",
    screenshots: [
      "/images/vistaparadias_home.png"
    ],
    features: [
      "Now Playing In Theaters – Browse currently running cinema releases",
      "Popular TV Shows – Discover trending series and episode breakdowns",
      "Real-Time Search – Query movies and TV shows instantly by title",
      "Deep Movie Details – Cast credits, synopsis, ratings, and release metrics",
      "TMDb API Integration – Dynamic live entertainment data pipeline"
    ],
    techStack: ["Flutter", "Dart", "TMDb API", "REST API", "Material Design 3"],
    githubUrl: "https://github.com/ruvindu-dulaksha/VistaParadias-Flutter-Movie-App",
    demoUrl: "https://github.com/ruvindu-dulaksha/VistaParadias-Flutter-Movie-App",
    stars: 29
  },
  {
    id: "mobile-fitness",
    title: "Fitness & Diet Mobile App UI",
    category: "Flutter",
    description: "Modern Flutter UI for exploring healthy breakfast meals, diet recommendations, and custom food cards.",
    longDescription: "A clean, modern Flutter UI implementation designed for health and fitness enthusiasts. Features horizontal category browsing (Salad, Cake, Pie, Smoothie), personalized diet recommendations with preparation time and calorie metrics (Honey Pancake, Canai Bread), popular meal cards, SVG vector rendering via flutter_svg, and custom typography with decoupled model architecture.",
    platform: "Flutter • Dart • flutter_svg • Clean UI",
    image: "/images/fitness_ui_home.png",
    screenshots: [
      "/images/fitness_ui_home.png"
    ],
    features: [
      "Horizontal Scrolling Category Cards with Custom Palettes",
      "Calorie & Prep Time Metrics for Diet Recommendations",
      "Popular Diet List with Custom SVG Icons (flutter_svg)",
      "Instant Search Input Field & Custom App Bar",
      "Decoupled Architecture with Reusable Category & Diet Models"
    ],
    techStack: ["Flutter", "Dart", "flutter_svg", "Custom Assets", "Material 3"],
    githubUrl: "https://github.com/ruvindu-dulaksha/Flutter-Basic-UI",
    demoUrl: "https://github.com/ruvindu-dulaksha/Flutter-Basic-UI",
    stars: 25
  },
  {
    id: "mobile-savoease",
    title: "Savor Ease – Food Delivery Mobile App",
    category: "Flutter",
    description: "Modern food delivery application built with Flutter, featuring menu categorisation, interactive cart drawer, and user authentication.",
    longDescription: "A sleek, modern food ordering and delivery application built with Flutter and Dart. Designed with a cheerful warm orange aesthetic, Savor Ease features category filtering (Burgers, Drinks, Desserts, Rice & Pasta), dynamic item counter and cart addition (Cheese Burger, Chicken Burger, Beef Burger), a slide-up interactive checkout cart calculating dynamic totals, and streamlined user authentication with dedicated login and registration screens.",
    platform: "Flutter • Dart • Clean Architecture • Mobile UI",
    image: "/images/savoease_catalog.png",
    screenshots: [
      "/images/savoease_catalog.png",
      "/images/savoease_cart.png",
      "/images/savoease_login.png",
      "/images/savoease_splash.png"
    ],
    features: [
      "Dynamic Menu Catalog with Category Tabs (Burgers, Drinks, Desserts, Rice & Pasta)",
      "Interactive Quantity Selector (+ / -) with Instant Cart State Synchronization",
      "Bottom Sheet Modal Cart with Itemized Pricing & 'Pay Here' Checkout Flow",
      "Authentication Flow with Responsive Email/Password Login & Sign Up Screens",
      "Custom Bottom Navigation Bar (Home, Promotion, Profile, Search)"
    ],
    techStack: ["Flutter", "Dart", "State Management", "Material Design", "Clean UI"],
    githubUrl: "https://github.com/ruvindu-dulaksha/Delivery-App",
    demoUrl: "https://github.com/ruvindu-dulaksha/Delivery-App",
    stars: 27
  }
]);

export const WORDPRESS_PROJECTS_DATA: WPProject[] = deepFreeze([
  {
    id: "wp-mirai-japanese",
    title: "Mirai Japanese School Website",
    category: "Corporate",
    description: "Full-featured school website with custom WordPress development, learning resources, and student management.",
    longDescription: "A comprehensive school website built with custom WordPress development for Mirai Japanese School. Features custom themes, learning resource management, student enrollment functionality, and responsive design optimized for all devices.",
    liveUrl: "#",
    githubUrl: "https://github.com",
    techStack: ["WordPress", "PHP", "HTML", "CSS", "JavaScript"],
    highlights: [
      "Custom WordPress Theme Development",
      "Learning Resources Management",
      "Student Enrollment System",
      "SEO & Performance Optimized"
    ]
  },
  {
    id: "wp-ceylon-tour",
    title: "Ceylon Tour Advisor – Tourism Platform",
    category: "Corporate",
    description: "Tourism platform for Sri Lanka built with WordPress, featuring tour packages and booking functionality.",
    longDescription: "A full-featured tourism platform for Ceylon Tour Advisor, built with WordPress. Includes custom tour package listings, booking forms, gallery integration, and SEO-optimized content for the Sri Lankan tourism industry.",
    liveUrl: "#",
    githubUrl: "https://github.com",
    techStack: ["WordPress", "Elementor", "PHP", "SEO"],
    highlights: [
      "Custom Tour Package Listings",
      "Booking & Inquiry Forms",
      "Gallery & Media Integration",
      "Mobile-First Responsive Design"
    ]
  },
  {
    id: "wp-nyscoiff",
    title: "NYSCOIFF – Government Project",
    category: "Corporate",
    description: "Government project website with custom WordPress development and accessibility compliance.",
    longDescription: "A government project website (nyscoiff.com) built with WordPress, featuring custom functionality, accessibility compliance, and performance optimization. Delivered as part of freelance portfolio.",
    liveUrl: "https://nyscoiff.com",
    githubUrl: "#",
    techStack: ["WordPress", "PHP", "HTML", "CSS", "JavaScript"],
    highlights: [
      "Government-Grade Accessibility",
      "Custom PHP Functionality",
      "Performance Optimized",
      "Responsive & Cross-Browser"
    ]
  }
]);

export const OTHER_PROJECTS_DATA: OtherProject[] = deepFreeze([
  {
    id: "other-smart-parking",
    title: "Smart Car Parking App & IoT Station",
    category: "University Project",
    description: "IoT-enabled Flutter mobile application connecting to smart parking stations for real-time slot tracking, navigation, and slot reservations.",
    longDescription: "A comprehensive smart car parking solution engineered as an IoT university capstone project with NIBM (National Institute of Business Management). The Flutter mobile application connects drivers with smart parking stations to discover available parking bays, pinpoint live GPS station locations on Google Maps, view floor-by-floor slot matrices (e.g. 1st Floor Entry/Exit bays), reserve specific slots (e.g. A-2), and process hourly bookings with vehicle number tracking and instant payment processing.",
    image: "/images/smart_parking_slots.png",
    screenshots: [
      "/images/smart_parking_slots.png",
      "/images/smart_parking_map.png",
      "/images/smart_parking_book.png",
      "/images/smart_parking_splash.png"
    ],
    githubUrl: "https://github.com/ruvindu-dulaksha/Smart-Car-Parking-App",
    techStack: ["Flutter", "Dart", "Firebase", "Google Maps", "IoT", "NIBM Project"],
    highlights: [
      "Floor-by-Floor Parking Matrix – Real-time availability indicator for bays (A-1 to A-8) with car occupancy status",
      "Google Maps Geolocation – Live pin navigation to Smart Car Parking station at NIBM / Vidya Mawatha",
      "Interactive Slot Booking – Configurable hourly duration slider (2–7 hrs) with vehicle plate registration",
      "Instant Payment Gateway – Real-time pricing calculator (Rs. 100) and 'Pay Now' transaction flow",
      "IoT Hardware Integration – Architecture designed to sync with ESP8266/Arduino proximity sensors"
    ]
  },
  {
    id: "other-gesture-ppt",
    title: "Gesture-Based PowerPoint Control",
    category: "AI / Machine Learning",
    description: "Computer vision application using hand gestures to control PowerPoint presentations.",
    longDescription: "A computer vision application built with Python, OpenCV, and MediaPipe that uses hand gesture recognition to control PowerPoint presentations. Supports slide navigation, laser pointer simulation, and custom gesture mapping.",
    githubUrl: "https://github.com",
    techStack: ["Python", "OpenCV", "MediaPipe"],
    highlights: [
      "Hand Gesture Recognition",
      "Real-time Computer Vision",
      "Custom Gesture Mapping"
    ]
  },
  {
    id: "other-chatbot-pdf",
    title: "Chatbot with PDFs – AI Assistant",
    category: "AI / Machine Learning",
    description: "AI-powered assistant for answering questions from uploaded PDF documents.",
    longDescription: "An AI-powered chatbot built with Python, Streamlit, GPT-Neo, and FAISS that enables users to upload PDF documents and ask questions. Uses vector embeddings for semantic search and retrieval-augmented generation.",
    githubUrl: "https://github.com",
    techStack: ["Python", "Streamlit", "GPT-Neo", "FAISS"],
    highlights: [
      "PDF Document Parsing & Indexing",
      "Semantic Search with FAISS",
      "RAG-Powered Responses"
    ]
  },
  {
    id: "other-ai-chatbot",
    title: "AI Chat Bot",
    category: "AI / Machine Learning",
    description: "Cross-platform AI chatbot integrating the Gemini API for conversational interactions.",
    longDescription: "A cross-platform AI chatbot built with Kotlin Multiplatform and the Google Gemini API. Supports natural language conversations with context awareness and multi-turn dialogue capabilities.",
    githubUrl: "https://github.com/ruvindu-dulaksha/chatbot",
    techStack: ["Kotlin Multiplatform", "Google Gemini API"],
    highlights: [
      "Google Gemini API Integration",
      "Cross-Platform (KMP)",
      "Multi-turn Conversations"
    ]
  },
  {
    id: "other-image-classify",
    title: "Image Classification App",
    category: "AI / Machine Learning",
    description: "Flutter application performing on-device image classification for cat and dog images.",
    longDescription: "A Flutter application using TensorFlow Lite for on-device image classification. Performs real-time cat and dog image recognition with high accuracy using a pre-trained model.",
    githubUrl: "https://github.com/ruvindu-dulaksha/simple-image-classification-app",
    techStack: ["Python", "TensorFlow Lite", "Flutter"],
    highlights: [
      "On-Device ML Inference",
      "TensorFlow Lite Model",
      "Real-time Classification"
    ]
  }
]);

export const MUSIC_TRACKS = deepFreeze([
  {
    title: "Lo-Fi Chill Beats",
    artist: "Aetherial Synth",
    duration: "03:45",
    url: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3"
  }
]);
