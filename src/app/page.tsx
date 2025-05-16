"use client";
import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import Terminal from "./components/terminal";
import ProjectCard from "./components/project-card";
import SkillItem from "./components/skill-item";
import { ProjectType } from "./components/project-card";

interface SkillType {
  name: string;
  icon: string;
  level: number;
}

export default function Home(): React.JSX.Element {
  // Project data
  const projects: ProjectType[] = [
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

  //Skills data
  const skills: SkillType[] = [
    { name: "React / React Native", icon: "FaReact", level: 9 },
    { name: "TypeScript", icon: "SiTypescript", level: 7 },
    { name: "JavaScript", icon: "SiJavascript", level: 9 },
    { name: "CSS", icon: "SiCss3", level: 8 },
    { name: "HTMX", icon: "SiHtmx", level: 7 },
    { name: "Python", icon: "FaPython", level: 8 },
    { name: "FastAPI", icon: "SiFastapi", level: 8 },
    { name: "PostgreSQL", icon: "SiPostgresql", level: 8 },
    { name: "SQL", icon: "SiMysql", level: 9 },
    { name: "MongoDB", icon: "SiMongodb", level: 7 },
    { name: "C#", icon: "SiSharp", level: 8 },
    { name: ".NET", icon: "SiDotnet", level: 8 },
    { name: "Node.js", icon: "FaNodeJs", level: 9 },
    { name: "Docker", icon: "SiDocker", level: 7 },
    { name: "GitHub Actions", icon: "SiGithubactions", level: 8 },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Head>
        <title>Shawna Staff | Software Engineer</title>
        <meta
          name="description"
          content="Shawna Staff's software engineer portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="mb-20 text-center">
          <div className="mb-6 inline-block relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 p-1">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-3xl md:text-4xl font-bold text-white">
                SS
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              Shawna Staff
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-400 mb-6">
            Software Engineer
          </h2>
          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="https://github.com/ShawnaRStaff"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-purple-400 hover:bg-purple-900 hover:text-white transition-all"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/shawnastaff/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-purple-400 hover:bg-purple-900 hover:text-white transition-all"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-purple-400 hover:bg-purple-900 hover:text-white transition-all"
            >
              <FaEnvelope size={24} />
            </a>
          </div>

          {/* Terminal */}
          <Terminal />
        </section>

        {/* About Section */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            <span className="border-b-2 border-purple-500 pb-1">About Me</span>
          </h2>
          <div className="bg-gray-900 p-6 rounded-lg border border-purple-800 shadow-lg max-w-3xl mx-auto">
            <p className="text-gray-300 mb-4">
              I&apos;m a software engineer passionate about building clean,
              efficient, and user-friendly applications. With expertise in both
              frontend and backend development, I specialize in creating
              seamless experiences across web and mobile platforms.
            </p>
            <p className="text-gray-300">
              My technical journey includes working with React/React Native,
              Python backends, and .NET microservices. I enjoy solving complex
              problems and continuously expanding my knowledge in the
              ever-evolving tech landscape.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            <span className="border-b-2 border-purple-500 pb-1">Skills</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Frontend Card */}
            <div className="bg-gray-900 p-6 rounded-lg border border-purple-800 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                Frontend
              </h3>
              {skills
                .filter((skill) =>
                  [
                    "FaReact",
                    "SiTypescript",
                    "SiJavascript",
                    "SiCss3",
                    "SiHtmx",
                  ].includes(skill.icon)
                )
                .map((skill) => (
                  <SkillItem
                    key={skill.name}
                    icon={skill.icon}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
            </div>

            {/* Backend Card */}
            <div className="bg-gray-900 p-6 rounded-lg border border-purple-800 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                Backend
              </h3>
              {skills
                .filter((skill) =>
                  [
                    "FaPython",
                    "SiFastapi",
                    "SiSharp",
                    "SiDotnet",
                    "FaNodeJs",
                  ].includes(skill.icon)
                )
                .map((skill) => (
                  <SkillItem
                    key={skill.name}
                    icon={skill.icon}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
            </div>

            {/* Database & DevOps */}
            <div className="bg-gray-900 p-6 rounded-lg border border-purple-800 shadow-lg md:col-span-2">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                Database & DevOps
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-medium mb-3 text-purple-300">
                    Databases
                  </h4>
                  {skills
                    .filter((skill) =>
                      [
                        "SiPostgresql",
                        "SiMysql",
                        "SiMongodb",
                        "FaDatabase",
                      ].includes(skill.icon)
                    )
                    .map((skill) => (
                      <SkillItem
                        key={skill.name}
                        icon={skill.icon}
                        name={skill.name}
                        level={skill.level}
                      />
                    ))}
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-3 text-purple-300">
                    DevOps
                  </h4>
                  {skills
                    .filter((skill) =>
                      ["SiDocker", "SiGithubactions"].includes(skill.icon)
                    )
                    .map((skill) => (
                      <SkillItem
                        key={skill.name}
                        icon={skill.icon}
                        name={skill.name}
                        level={skill.level}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            <span className="border-b-2 border-purple-500 pb-1">Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            <span className="border-b-2 border-purple-500 pb-1">
              Get In Touch
            </span>
          </h2>
          <div className="bg-gray-900 p-6 rounded-lg border border-purple-800 shadow-lg max-w-lg mx-auto">
            <p className="text-gray-300 mb-6 text-center">
              Interested in working together? Feel free to reach out through any
              of the following channels.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="mailto:shawnastaff@gmail.com"
                className="flex items-center justify-center gap-2 py-3 bg-purple-900/50 hover:bg-purple-800 transition-colors rounded-lg text-white"
              >
                <FaEnvelope /> Email Me
              </a>
              <a
                href="https://github.com/ShawnaRStaff"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 bg-gray-800 hover:bg-gray-700 transition-colors rounded-lg text-white"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/shawnastaff/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 bg-blue-900/50 hover:bg-blue-800 transition-colors rounded-lg text-white md:col-span-2"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-6 border-t border-purple-900/50">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Shawna Staff. All rights reserved.</p>
          <p className="mt-2">Built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
