import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "首页",
    description: "Ruizhe（Jason）Dai 的个人作品集：数据科学、机器学习与 AI 系统。",
    metadata: {
      title: "Ruizhe（Jason）Dai",
      description:
        "Ruizhe（Jason）Dai，数据科学与机器学习工程方向，关注数据驱动系统与 AI 辅助工具。",
    },
  },

  skills: {
    title: "技能",
    description: "数据科学、机器学习与工程化系统相关的核心技能。",
    metadata: {
      title: "技能 | Ruizhe（Jason）Dai",
      description: "Ruizhe（Jason）Dai 的技术技能：数据科学、机器学习、ML 工程与 AI 系统。",
    },
  },

  projects: {
    title: "项目",
    description: "机器学习系统、数据管道与应用研究方向的代表性项目。",
    metadata: {
      title: "项目 | Ruizhe（Jason）Dai",
      description: "Ruizhe（Jason）Dai 的项目集合：机器学习、数据科学、AI 系统与应用研究。",
    },
  },

  experience: {
    title: "经历",
    description: "研究与行业经历：数据科学、机器学习与 AI 系统。",
    metadata: {
      title: "经历 | Ruizhe（Jason）Dai",
      description: "Ruizhe（Jason）Dai 的研究与工作经历：数据科学、机器学习与 AI 系统。",
    },
  },

  contributions: {
    title: "贡献",
    description: "研究、系统与开源方向的相关贡献。",
    metadata: {
      title: "贡献 | Ruizhe（Jason）Dai",
      description: "Ruizhe（Jason）Dai 在 AI、机器学习与数据系统方向的研究与系统贡献。",
    },
  },

  contact: {
    title: "联系",
    description: "欢迎交流：研究合作、实习与其他合作机会。",
    metadata: {
      title: "联系 | Ruizhe（Jason）Dai",
      description: "联系 Ruizhe（Jason）Dai：研究合作与职业机会。",
    },
  },

  resume: {
    title: "简历",
    description: "Ruizhe（Jason）Dai 的简历。",
    metadata: {
      title: "简历 | Ruizhe（Jason）Dai",
      description: "Ruizhe（Jason）Dai 的简历（数据科学 / 机器学习 / AI 系统）。",
    },
  },
};