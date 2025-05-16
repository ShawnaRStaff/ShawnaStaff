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
    id: "python-setup-app",
    title: "Python Setup App",
    description:
      "SQLAlchemy-FastAPI-PostgreSQL project template with JWT authentication and automated migrations.",
    technologies: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL"],
    githubUrl: "https://github.com/ShawnaRStaff/python_setup_app",
  },
  {
    id: "personal-budgeting-app",
    title: "Personal Budgeting App",
    description:
      "A React Native app for budget tracking, finance management, and savings planning.",
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