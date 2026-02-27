// config/projects.ts

export interface ProjectInterface {
  id: string;
  companyName: string;
  type: "Personal" | "Academic" | "Work" | string;
  category: string[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack?: string[];
  startDate?: Date;
  endDate?: Date;
  companyLogoImg: string;

  pagesInfoArr?: {
    title: string;
    description: string;
    imgArr: string[];
  }[];

  descriptionDetails?: {
    paragraphs?: string[];
    bullets?: string[];
  };
}

export const Projects: ProjectInterface[] = [
  {
    id: "time-machine-earth",
    companyName: "Earth Time Machine",
    type: "Personal",
    category: ["Data Engineering", "Frontend", "AI Systems"],
    shortDescription:
      "Built an interactive spatiotemporal analytics system with a 3D globe interface and a relational (ER) schema; optimized worst-case queries from 15m23s → 1.552s and 39s → 1.628s via indexing, caching, and query rewrites.",
    websiteLink: "",
    githubLink: "https://github.com/JasonDai1219/Earth-Time-Machine",
    techStack: ["React", "TypeScript", "PostgreSQL", "SQL", "Python", "Node.js"],
    startDate: new Date("2024-11-01"),
    endDate: new Date("2024-12-01"),
    companyLogoImg: "/projects/time-machine-earth/logo.png",
    pagesInfoArr: [
      {
        title: "Global 3D Globe Interface",
        description:
          "Interactive 3D globe for country-level exploration across time and development indicators.",
        imgArr: ["/projects/time-machine-earth/globe.png"],
      },
      {
        title: "Relational Schema (ER Diagram)",
        description:
          "ER design connecting countries, indicators, years, and media assets to support join-heavy spatiotemporal analytics.",
        imgArr: ["/projects/time-machine-earth/er_diagram.png"],
      },
      {
        title: "Query Performance Benchmarks",
        description:
          "Pre/post optimization timing results across four complex analytical queries.",
        imgArr: [
          "/projects/time-machine-earth/perf_q2.png",
          "/projects/time-machine-earth/perf_q4.png",
          "/projects/time-machine-earth/perf_q1.png",
          "/projects/time-machine-earth/perf_q3.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Earth Time Machine is a spatiotemporal data visualization system for exploring country-level change over time.",
        "Designed a relational schema (ER-based) to support join-heavy analytics.",
        "Optimized complex SQL queries using indexing, caching, and query rewrites.",
      ],
      bullets: [
        "Full-stack spatiotemporal analytics platform",
        "ER-based relational schema design",
        "Worst-case query time reduced from 15m23s → 1.552s",
      ],
    },
  },

  {
    id: "foodseg-unet-vgg16",
    companyName: "Beyond UNet: Food Image Semantic Segmentation (FoodSeg103)",
    type: "Academic",
    category: ["Machine Learning", "Computer Vision", "Research"],
    shortDescription:
      "Improved fine-grained food segmentation on FoodSeg103: CNN → UNet → VGG16 encoder + decoder (best mIoU 0.1559).",
    websiteLink: "",
    githubLink: "https://github.com/JasonDai1219/Beyond_UNet",
    techStack: ["PyTorch", "Deep Learning", "Computer Vision", "Python"],
    startDate: new Date("2025-10-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/projects/foodseg/logo.png",
  },

  {
    id: "causal-stock-return",
    companyName: "Causal Discovery in Stock Return",
    type: "Academic",
    category: ["Machine Learning", "Causal Inference", "Time Series"],
    shortDescription:
      "Hybrid stock-return forecasting combining causal discovery, DeepAR probabilistic modeling, and FinBERT sentiment.",
    websiteLink: "",
    githubLink: "https://github.com/VivianZhao12/CAPSTONE-stockreturn",
    techStack: ["Python", "PyTorch", "DeepAR", "FinBERT"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-03-01"),
    companyLogoImg: "/projects/causal-stock/open_bg.jpg",
  },

  {
    id: "dsc102-ai-tutor",
    companyName: "AI-assisted Personalized Quiz Generator",
    type: "Academic",
    category: ["AI Systems", "Web Dev"],
    shortDescription:
      "LLM-assisted quiz generator with concept-level error tracking and targeted resource recommendation.",
    websiteLink: "",
    githubLink: "https://github.com/jeffyuan2022/DSC102_AI_Tutor",
    techStack: ["Python", "Streamlit", "AWS"],
    startDate: new Date("2024-10-01"),
    endDate: new Date("2024-12-01"),
    companyLogoImg: "/projects/dsc102-ai-tutor/logo.png",
  },

  {
    id: "glaucoma-uncertainty-aware-diagnosis",
    companyName: "Uncertainty-Aware Glaucoma Diagnosis",
    type: "Personal",
    category: ["Machine Learning", "Healthcare AI"],
    shortDescription:
      "Medical AI system with conformal prediction and expert-in-the-loop decision pipeline.",
    websiteLink: "",
    githubLink: "https://github.com/JasonDai1219/uncertainty-aware-medAI",
    techStack: ["Python", "Scikit-learn", "Conformal Prediction"],
    startDate: new Date("2024-11-01"),
    endDate: new Date("2024-12-01"),
    companyLogoImg: "/projects/glaucoma-cp/hero.png",
  },
];

export const featuredProjects = Projects.slice(0, 3);