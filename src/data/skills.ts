export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Backend",
    skills: ["Python", "Java", "SQL"],
  },
  {
    category: "Data & Analytics",
    skills: ["TensorFlow", "PyTorch", "Pandas", "NumPy", "SQL", "Power BI", "Data Visualization"],
  },
  {
    category: "Finance",
    skills: ["Tax Accounting", "Valuation Control Tech", "Risk Tech", "Pricing Calc", "Consensus Pricing & Processing"],
  },
  {
    category: "Tools",
    skills: ["Git", "VS Code", "Figma", "JIRA", "Athena (JPMC Platform)"],
  },
];
