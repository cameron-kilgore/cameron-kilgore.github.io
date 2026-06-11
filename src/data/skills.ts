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
    skills: ["Pandas", "SQL", "Power BI", "Data Visualization"],
  },
  {
    category: "Finance",
    skills: ["Valuation Control Tech", "Risk Tech", "Pricing Models Basic", "Consensus Pricing & Processing"],
  },
  {
    category: "Tools",
    skills: ["Git", "VS Code", "JIRA", "Athena (JPMC Platform)", "Agentic Development"],
  },
];
