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
    title: "Dissertation: Public Speaking Coach",
    description:
      "Developed a machine learning system for giving actionable feedback based on audio analysis and participant research analysing the effectiveness of this system.",
    image: "/images/Diss-ui-design.webp",
    tags: ["Python", "TensorFlow", "Financial Data"],
  },
  {
    title: "Head of Quant Team: Glasgow University Technology & Innovation Club (GUTIC)",
    image: "/images/GUTIC.avif",
    description:
      "Led quantitative research and trading strategy development within the GUTIC Fund. Mentored analysts in quantitative methods and financial modeling.",
    tags: ["Quantitative Research", "Financial Analysis", "Python", "Mentorship"],
  },
  {
    title: "Scrum Master & Machine Learning Engineer: CENSIS / Quorum Cyber",
    image: "/images/censis_logo.svg",
    description:
      "Audio Sensor Machine Learning Project. Led Agile team delivering ML-powered sound classification system for social housing safety.",
    tags: ["Scrum Master", "Machine Learning", "C Programming", "Python"],
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
