export const Projects: ProjectInterface[] = [
  {
    id: "time-machine-earth",
    companyName: "Earth Time Machine（地球时空数据分析系统）",
    type: "Personal",
    category: ["数据工程", "前端", "AI 系统"],
    shortDescription:
      "构建交互式时空分析系统（3D 地球可视化 + ER 关系型架构）；通过索引、缓存与 SQL 重写将最坏查询耗时从 15m23s → 1.552s、39s → 1.628s。",
    websiteLink: "",
    githubLink: "https://github.com/JasonDai1219/Earth-Time-Machine",
    techStack: ["React", "TypeScript", "PostgreSQL", "SQL", "Python", "Node.js"],
    startDate: new Date("2024-11-01"),
    endDate: new Date("2024-12-01"),
    companyLogoImg: "/projects/time-machine-earth/logo.png",
    pagesInfoArr: [
      {
        title: "3D 地球交互界面",
        description: "通过交互式 3D 地球进行国家级别的时间序列探索与指标对比。",
        imgArr: ["/projects/time-machine-earth/globe.png"],
      },
      {
        title: "关系型 Schema（ER 图）",
        description: "连接国家、指标、年份与媒体资产的 ER 设计，用于支撑复杂 Join 的时空分析查询。",
        imgArr: ["/projects/time-machine-earth/er_diagram.png"],
      },
      {
        title: "查询性能基准（优化前后对比）",
        description: "四类复杂分析查询的优化前后耗时对比结果。",
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
        "Earth Time Machine 是一个面向国家级别指标的时空可视化与分析系统，用于探索随时间变化的趋势与对比关系。",
        "我设计了面向 Join 密集型分析的关系型数据库 Schema（ER 结构），支持灵活的筛选、聚合与跨表查询。",
        "为保证交互体验，我对多条复杂 SQL 查询进行了系统性优化（索引、缓存与重写），显著降低最坏耗时。",
      ],
      bullets: [
        "全栈时空分析平台（3D 地球交互）",
        "ER 关系型 Schema 设计，支撑 Join 密集型查询",
        "最坏查询耗时从 15m23s → 1.552s（另一路径 39s → 1.628s）",
      ],
    },
  },

  {
    id: "foodseg-unet-vgg16",
    companyName: "Beyond UNet：FoodSeg103 语义分割",
    type: "Academic",
    category: ["机器学习", "计算机视觉", "研究"],
    shortDescription:
      "在 FoodSeg103 上进行细粒度语义分割：CNN → UNet → VGG16 编码器+解码器（最佳 mIoU=0.1559）。",
    websiteLink: "",
    githubLink: "https://github.com/JasonDai1219/Beyond_UNet",
    techStack: ["PyTorch", "深度学习", "计算机视觉", "Python"],
    startDate: new Date("2025-10-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/projects/foodseg/logo.png",
  },

  {
    id: "causal-stock-return",
    companyName: "股票收益的因果发现与预测",
    type: "Academic",
    category: ["机器学习", "因果推断", "时间序列"],
    shortDescription:
      "混合式收益预测：结合因果发现、DeepAR 概率预测与 FinBERT 情感信号。",
    websiteLink: "",
    githubLink: "https://github.com/VivianZhao12/CAPSTONE-stockreturn",
    techStack: ["Python", "PyTorch", "DeepAR", "FinBERT"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-03-01"),
    companyLogoImg: "/projects/causal-stock/open_bg.jpg",
  },

  {
    id: "dsc102-ai-tutor",
    companyName: "AI 辅助个性化测验生成器",
    type: "Academic",
    category: ["AI 系统", "Web 开发"],
    shortDescription:
      "基于 LLM 的测验生成 + 概念级错题追踪 + 定向资源推荐。",
    websiteLink: "",
    githubLink: "https://github.com/jeffyuan2022/DSC102_AI_Tutor",
    techStack: ["Python", "Streamlit", "AWS"],
    startDate: new Date("2024-10-01"),
    endDate: new Date("2024-12-01"),
    companyLogoImg: "/projects/dsc102-ai-tutor/logo.png",
  },

  {
    id: "glaucoma-uncertainty-aware-diagnosis",
    companyName: "不确定性感知的青光眼诊断系统",
    type: "Personal",
    category: ["机器学习", "医疗 AI"],
    shortDescription:
      "引入 conformal prediction 与专家介入（expert-in-the-loop）的医疗决策流水线，提高高风险场景的可靠性。",
    websiteLink: "",
    githubLink: "https://github.com/JasonDai1219/uncertainty-aware-medAI",
    techStack: ["Python", "Scikit-learn", "Conformal Prediction"],
    startDate: new Date("2024-11-01"),
    endDate: new Date("2024-12-01"),
    companyLogoImg: "/projects/glaucoma-cp/hero.png",
  },
];

export const featuredProjects = Projects.slice(0, 3);