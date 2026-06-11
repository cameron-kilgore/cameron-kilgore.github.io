export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

export const projects: ProjectItem[] = [
  {
    title: "Dissertation: AI-Powered Financial Analysis",
    description:
      "Developed a machine learning system for anomaly detection in financial markets using deep learning.",
    image: "/images/Diss-ui-design.webp",
    tags: ["Python", "TensorFlow", "Financial Data"],
  },
  {
    title: "GUTS Hackathon Winner",
    description:
      "Hackathon project focused on sustainability, we built a world simulator game.",
    image: "/images/GUTS-win-2.webp",
    tags: ["Unity", "C#", "Game Development", "Hackathon"],
    github: "https://github.com/cameron-kilgore",
  },
  {
    title: "Musical Theatre Projects",
    description:
      "A creative portfolio of musical theatre performance and production work, linked from the projects section.",
    image: "/images/Footloose-fight-carousel-final.webp",
    tags: ["Musical Theatre", "Performance", "Creative Projects"],
    link: "/musical-theatre",
  },
];
