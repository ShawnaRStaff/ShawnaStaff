export interface ProjectType {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const projects: ProjectType[] = [
  {
    id: "buckler-idd",
    title: "Buckler IDD",
    description:
      "Enterprise fintech platform for Canadian compliance and investment due diligence. Development lead.",
    technologies: ["Python", "FastAPI", "HTMX", "PostgreSQL", "Redis"],
    githubUrl: "https://www.buckler.ai/aie/ai-engine",
    liveUrl: "https://www.buckler.ai/aie/ai-engine",
  },
  {
    id: "create-sqlalchemy-app",
    title: "create-sqlalchemy-app",
    description:
      "Open-source CLI tool on PyPI for scaffolding FastAPI + SQLAlchemy + PostgreSQL projects with JWT auth and migrations.",
    technologies: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL"],
    githubUrl: "https://github.com/ShawnaRStaff/create-sqlalchemy-app",
    liveUrl: "https://pypi.org/project/create-sqlalchemy-app/",
  },
  {
    id: "personal-budgeting-app",
    title: "Personal Budgeting App",
    description:
      "React Native mobile app for budget tracking, finance management, and savings goals. Coming soon to the Google Play Store.",
    technologies: ["React Native", "TypeScript", "Firebase"],
    githubUrl: "https://github.com/ShawnaRStaff/personal-budgeting-app",
  },
  {
    id: "csv-cleaner",
    title: "CSV Cleaner",
    description:
      "Python tool for cleaning and formatting CSV files by removing unwanted characters and normalizing data.",
    technologies: ["Python", "Pandas"],
    githubUrl: "https://github.com/ShawnaRStaff/csv-cleaner",
  },
];