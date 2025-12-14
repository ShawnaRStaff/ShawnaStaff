"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Terminal from "./components/terminal/terminal";
import ProjectCard from "./components/projects/project-card";
import SkillItem from "./components/skills/skill-item";
import MatrixRain from "./components/effects/matrix-rain";
import { projects } from "./components/projects/projects";
import { skills } from "./components/skills/skills";

const ASCII_NAME = `
███████╗██╗  ██╗ █████╗ ██╗    ██╗███╗   ██╗ █████╗
██╔════╝██║  ██║██╔══██╗██║    ██║████╗  ██║██╔══██╗
███████╗███████║███████║██║ █╗ ██║██╔██╗ ██║███████║
╚════██║██╔══██║██╔══██║██║███╗██║██║╚██╗██║██╔══██║
███████║██║  ██║██║  ██║╚███╔███╔╝██║ ╚████║██║  ██║
╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚══╝╚══╝ ╚═╝  ╚═══╝╚═╝  ╚═╝`;

export default function Home(): React.JSX.Element {
  return (
    <div className="min-h-screen grid-background">
      <MatrixRain /> 
      <main className="container mx-auto px-4 py-8 md:py-12">
        <section className="mb-16 md:mb-20 text-center">
          <div className="mb-4 md:mb-6">
            <pre className="ascii-art text-glow hidden md:block mx-auto">{ASCII_NAME}</pre>
            <h1 className="md:hidden text-3xl font-bold text-[var(--color-terminal)] text-glow">
              SHAWNA
            </h1>
          </div>

          <div className="status-online justify-center mb-4">
            <span>AVAILABLE FOR OPPORTUNITIES</span>
          </div>

          <p className="text-[var(--color-text-muted)] text-sm md:text-base mb-6 tracking-wider uppercase">
            Software Engineer // Full Stack Developer
          </p>

          <div className="flex justify-center gap-3 mb-8">
            <a href="https://github.com/ShawnaRStaff" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/shawnastaff/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:shawnastaff@gmail.com" className="social-icon">
              <FaEnvelope size={20} />
            </a>
          </div>

          <Terminal />
        </section>

        <section className="mb-16 md:mb-20" id="about">
          <h2 className="section-title">About Me</h2>
          <div className="retro-card p-5 md:p-6 max-w-3xl mx-auto">
            <p className="text-[var(--color-text)] mb-4 text-sm md:text-base leading-relaxed">
              Full-stack engineer building web and mobile applications from
              database to deployment. I work across the entire stack, from
              React and Python backends to infrastructure and CI/CD.
            </p>
            <p className="text-[var(--color-text)] text-sm md:text-base leading-relaxed">
              I&apos;ve built multi-tenant e-commerce platforms, published an
              open-source CLI tool on PyPI, and run a 30+ container Docker
              homelab. My background includes .NET microservices and enterprise
              IAM systems.
            </p>
          </div>
        </section>

        <section className="mb-16 md:mb-20" id="skills">
          <h2 className="section-title">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            <SkillsCard
              title="Frontend"
              skills={skills.filter(s => ["FaReact", "SiTypescript", "SiJavascript", "SiCss3", "SiHtmx"].includes(s.icon))}
            />
            <SkillsCard
              title="Backend"
              skills={skills.filter(s => ["FaPython", "SiFastapi", "SiSharp", "SiDotnet", "FaNodeJs"].includes(s.icon))}
            />
            <div className="retro-card p-5 md:p-6 md:col-span-2">
              <h3 className="text-base md:text-lg font-semibold mb-4 text-[var(--color-terminal)]">
                {">"} Database & DevOps
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <h4 className="text-sm font-medium mb-3 text-[var(--color-amber)]">Databases</h4>
                  {skills.filter(s => ["SiPostgresql", "SiMysql", "SiMongodb"].includes(s.icon)).map(skill => (
                    <SkillItem key={skill.name} name={skill.name} icon={skill.icon} level={skill.level} />
                  ))}
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-3 text-[var(--color-amber)]">DevOps</h4>
                  {skills.filter(s => ["SiDocker", "SiGithubactions"].includes(s.icon)).map(skill => (
                    <SkillItem key={skill.name} name={skill.name} icon={skill.icon} level={skill.level} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 md:mb-20" id="projects">
          <h2 className="section-title">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section className="mb-16 md:mb-20" id="contact">
          <h2 className="section-title">Get In Touch</h2>
          <div className="retro-card p-5 md:p-6 max-w-lg mx-auto text-center">
            <p className="text-[var(--color-text-muted)] mb-6 text-sm md:text-base">
              Interested in working together? Let&apos;s connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="mailto:shawnastaff@gmail.com" className="retro-button flex items-center justify-center gap-2">
                <FaEnvelope /> Email
              </a>
              <a href="https://github.com/ShawnaRStaff" target="_blank" rel="noopener noreferrer" className="retro-button flex items-center justify-center gap-2">
                <FaGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/shawnastaff/" target="_blank" rel="noopener noreferrer" className="retro-button retro-button-amber flex items-center justify-center gap-2">
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--color-border)] py-6">
        <div className="container mx-auto px-4 text-center text-[var(--color-text-muted)] text-xs md:text-sm">
          <p className="mb-1">© {new Date().getFullYear()} Shawna Staff</p>
          <p className="text-[var(--color-terminal-dim)]">Built with Next.js + Tailwind</p>
        </div>
      </footer>
    </div>
  );
}

function SkillsCard({ title, skills }: { title: string; skills: Array<{ name: string; icon: string; level: number }> }) {
  return (
    <div className="retro-card p-5 md:p-6">
      <h3 className="text-base md:text-lg font-semibold mb-4 text-[var(--color-terminal)]">
        {">"} {title}
      </h3>
      {skills.map(skill => (
        <SkillItem key={skill.name} name={skill.name} icon={skill.icon} level={skill.level} />
      ))}
    </div>
  );
}