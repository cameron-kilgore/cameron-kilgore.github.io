export interface ExperienceItem {
  company: string;
  logo: string;
  logoBackground: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "JPMorganChase",
    logo: "/images/jpmc-logo-white.svg",
    logoBackground: "jpmc",
    role: "Software Engineer",
    period: "February 2025 - Present",
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
    logo: "/images/amazon-logo.png",
    logoBackground: "light",
    role: "Program Manager Intern",
    period: "June 2024 - November 2024",
    description:
      "EU ATS ROC Performance Improvement Team. Led projects optimizing EU transportation network efficiency through data analysis and process improvement.",
    highlights: [
      "Created SQL-based dashboards using ETL Manager and QuickSight to visualize transportation metrics and identify inefficiencies",
      "Developed Python scripts to audit transportation data and flag EU-wide disruptions in real-time",
      "Implemented JavaScript compliance tools preventing disruptions on Amazon's transportation platform; projects had entitlements over GBP 10MM",
    ],
  },
  {
    company: "University of Glasgow",
    logo: "/images/uofg.svg",
    logoBackground: "light",
    role: "Assistant Demonstrator",
    period: "September 2023 - June 2024",
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
    logoBackground: "light",
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
    company: "RSM UK",
    logo: "/images/RSM-Logo.png",
    logoBackground: "light",
    role: "Tax Assistant",
    period: "August 2018 - December 2019",
    description:
      "Prepared tax returns and computations for individuals, trusts, and companies. Conducted anti-money laundering compliance reviews.",
    highlights: [
      "Prepared tax returns and computations for individuals, trusts, and corporate clients",
      "Managed payment schedules and AML inspections to assess client risk profiles",
      "Completed ATT Foundation Diplomas in Personal and Business Taxation",
    ],
  },
];
