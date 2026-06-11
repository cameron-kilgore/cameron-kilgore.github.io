export interface ExperienceItem {
  company: string;
  logo: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "J.P. Morgan Chase",
    logo: "/images/jpmc-logo-white.svg",
    role: "Software Engineer",
    period: "February 2025 – Present",
    description:
      "Valuation Control Group Tech Team. Building data sourcing and analysis tools enabling control reviews of financial results across trading desks at scale.",
    highlights: [
      "Develop data load/manipulation and financial analysis calculation systems",
      "Model and implement BigData persistence layers for high-volume trading data",
      "Design and deploy reports and web UIs delivering real-time insights to business users",
    ],
  },
  {
    company: "Amazon",
    logo: "/images/Amazon-day1.webp",
    role: "Program Manager Intern",
    period: "June 2024 – November 2024",
    description:
      "EU ATS ROC Performance Improvement Team. Led projects optimizing EU transportation network efficiency through data analysis and process improvement.",
    highlights: [
      "Created SQL-based dashboards using ETL Manager and QuickSight to visualize transportation metrics and identify inefficiencies",
      "Developed Python scripts to audit transportation data and flag EU-wide disruptions in real-time",
      "Implemented JavaScript compliance tools preventing disruptions on Amazon's transportation platform; projects had entitlements over £10MM",
    ],
  },
  {
    company: "Glasgow University Technology & Innovation Club (GUTIC)",
    logo: "/images/uofg.svg",
    role: "Head of Quant Team",
    period: "February 2024 – June 2024",
    description:
      "Led quantitative research and trading strategy development within the GUTIC Fund. Mentored analysts in quantitative methods and financial modeling.",
    highlights: [
      "Provided training and mentorship in quantitative analysis techniques and Python for financial analysis",
      "Led development of quantitative trading strategies leveraging statistical models",
      "Analyzed financial data to identify trends and inform data-driven trading decisions",
    ],
  },
  {
    company: "University of Glasgow",
    logo: "/images/uofg.svg",
    role: "Assistant Demonstrator",
    period: "September 2023 – June 2024",
    description:
      "Provided hands-on lab support for computational thinking and programming courses. Taught students Python and software engineering principles.",
    highlights: [
      "Guided students through programming exercises and troubleshooting",
      "Simplified complex programming concepts, enhancing problem-solving and debugging skills",
      "Fostered supportive learning environment encouraging innovation in computational thinking",
    ],
  },
  {
    company: "SLC",
    logo: "/images/SLC_Logo.png",
    role: "Technology Operations Intern",
    period: "Summer 2023",
    description:
      "Service Management and Business Relationship Management internship. Created reports and dashboards on tech innovation and incident metrics.",
    highlights: [
      "Created Power BI and ServiceNow reports on company technology innovations and weekly incident metrics",
      "Designed ServiceNow dashboards for Service Management team, for use in live SLA tracking",
      "Presented technical insights to business and technical stakeholders, translating data into actionable recommendations",
    ],
  },
  {
    company: "CENSIS / Quorum Cyber",
    logo: "images/Retro-pedro-carousel-final.webp",
    role: "Scrum Master & Machine Learning Engineer",
    period: "September 2022 – March 2023",
    description:
      "Audio Sensor Machine Learning Project. Led Agile team delivering ML-powered sound classification system for social housing safety.",
    highlights: [
      "Led team as Scrum Master, sprints and conducting standups",
      "Developed C and Arduino code for ESP32 microcontroller, calculating FFTs from sensor data",
      "Explored ML approaches in Python",
    ],
  },
  {
    company: "RSM UK",
    logo: "/images/RSM-Logo.png",
    role: "Tax Assistant",
    period: "August 2018 – December 2019",
    description:
      "Prepared tax returns and computations for individuals, trusts, and companies. Conducted anti-money laundering compliance reviews.",
    highlights: [
      "Prepared tax returns and computations for individuals, trusts, and corporate clients",
      "Managed payment schedules and AML inspections to assess client risk profiles",
      "Completed ATT Foundation Diplomas in Personal and Business Taxation",
    ],
  },
];
