"use client";
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import Terminal from "./components/terminal/terminal";
import ProjectCard from "./components/projects/project-card";
import SkillItem from "./components/skills/skill-item";
import { projects } from "./components/projects/projects";
import { skills } from "./components/skills/skills";

export default function Home(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
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
            <SocialLink href="https://github.com/ShawnaRStaff" icon={<FaGithub size={24} />} />
            <SocialLink href="https://www.linkedin.com/in/shawnastaff/" icon={<FaLinkedin size={24} />} />
            <SocialLink href="mailto:shawnastaff@gmail.com" icon={<FaEnvelope size={24} />} />
          </div>

          {/* Terminal */}
          <Terminal />
        </section>

        {/* About Section */}
        <Section title="About Me">
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
        </Section>

        {/* Skills Section */}
        <Section title="Skills">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Frontend Card */}
            <SkillsCard 
              title="Frontend" 
              skills={skills.filter(skill => 
                ["FaReact", "SiTypescript", "SiJavascript", "SiCss3", "SiHtmx"].includes(skill.icon)
              )} 
            />
            
            {/* Backend Card */}
            <SkillsCard 
              title="Backend" 
              skills={skills.filter(skill => 
                ["FaPython", "SiFastapi", "SiSharp", "SiDotnet", "FaNodeJs"].includes(skill.icon)
              )} 
            />
            
            {/* Database & DevOps */}
            <div className="bg-gray-900 p-6 rounded-lg border border-purple-800 shadow-lg md:col-span-2">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                Database & DevOps
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SkillsGroup 
                  title="Databases" 
                  skills={skills.filter(skill => 
                    ["SiPostgresql", "SiMysql", "SiMongodb", "FaDatabase"].includes(skill.icon)
                  )} 
                />
                <SkillsGroup 
                  title="DevOps" 
                  skills={skills.filter(skill => 
                    ["SiDocker", "SiGithubactions"].includes(skill.icon)
                  )} 
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Projects Section */}
        <Section title="Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Section>

        {/* Contact Section */}
        <Section title="Get In Touch" id="contact">
          <div className="bg-gray-900 p-6 rounded-lg border border-purple-800 shadow-lg max-w-lg mx-auto">
            <p className="text-gray-300 mb-6 text-center">
              Interested in working together? Feel free to reach out through any
              of the following channels.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ContactButton
                href="mailto:shawnastaff@gmail.com"
                icon={<FaEnvelope />}
                text="Email Me"
                className="bg-purple-900/50 hover:bg-purple-800"
              />
              <ContactButton
                href="https://github.com/ShawnaRStaff"
                icon={<FaGithub />}
                text="GitHub"
                className="bg-gray-800 hover:bg-gray-700"
              />
              <ContactButton
                href="https://www.linkedin.com/in/shawnastaff/"
                icon={<FaLinkedin />}
                text="LinkedIn"
                className="bg-blue-900/50 hover:bg-blue-800 md:col-span-2"
              />
            </div>
          </div>
        </Section>
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

// Helper Components
function Section({ 
  title, 
  children, 
  id 
}: { 
  title: string; 
  children: React.ReactNode; 
  id?: string;
}) {
  return (
    <section className="mb-20" id={id}>
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        <span className="border-b-2 border-purple-500 pb-1">{title}</span>
      </h2>
      {children}
    </section>
  );
}

function SocialLink({ 
  href, 
  icon 
}: { 
  href: string; 
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-purple-400 hover:bg-purple-900 hover:text-white transition-all"
    >
      {icon}
    </a>
  );
}

function SkillsCard({ 
  title, 
  skills 
}: { 
  title: string; 
  skills: Array<{ name: string; icon: string; level: number }>;
}) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg border border-purple-800 shadow-lg">
      <h3 className="text-xl font-semibold mb-4 text-purple-400">
        {title}
      </h3>
      {skills.map(skill => (
        <SkillItem 
          key={skill.name}
          name={skill.name}
          icon={skill.icon}
          level={skill.level}
        />
      ))}
    </div>
  );
}

function SkillsGroup({ 
  title, 
  skills 
}: { 
  title: string; 
  skills: Array<{ name: string; icon: string; level: number }>;
}) {
  return (
    <div>
      <h4 className="text-lg font-medium mb-3 text-purple-300">{title}</h4>
      {skills.map(skill => (
        <SkillItem 
          key={skill.name}
          name={skill.name}
          icon={skill.icon}
          level={skill.level}
        />
      ))}
    </div>
  );
}

function ContactButton({ 
  href, 
  icon, 
  text, 
  className 
}: { 
  href: string; 
  icon: React.ReactNode; 
  text: string; 
  className: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center gap-2 py-3 transition-colors rounded-lg text-white ${className}`}
    >
      {icon} {text}
    </a>
  );
}