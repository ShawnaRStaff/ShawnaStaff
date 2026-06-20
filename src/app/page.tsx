"use client";
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaRegCopy, FaCheck } from "react-icons/fa";
import Terminal from "./components/terminal/terminal";
import ProjectCard from "./components/projects/project-card";
import MatrixRain from "./components/effects/matrix-rain";
import { projects } from "./components/projects/projects";

const EMAIL = "shawnastaff@gmail.com";
const GMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;

const skillGroups: { title: string; items: string[] }[] = [
  { title: "Languages", items: ["Go", "Python", "TypeScript", "JavaScript", "C#", "SQL"] },
  { title: "Frontend", items: ["React", "React Native", "Next.js", "HTMX", "Tailwind"] },
  { title: "Backend", items: ["FastAPI", ".NET", "Node.js", "REST APIs"] },
  { title: "Data", items: ["PostgreSQL", "Neo4j", "MongoDB", "Redis"] },
  { title: "Cloud & DevOps", items: ["AWS", "Docker", "GitHub Actions", "CI/CD", "Prometheus"] },
  { title: "AI / ML", items: ["LLM Integration", "QLoRA Fine-tuning", "Knowledge Graphs"] },
];

function CopyEmail(): React.JSX.Element {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(EMAIL);
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        } catch {
          /* clipboard blocked — the mailto link still works */
        }
      }}
      className="inline-flex items-center gap-2 text-sm transition-colors"
      style={{ color: copied ? "var(--color-terminal)" : "var(--color-text-muted)" }}
      title="Copy email address"
    >
      {EMAIL}
      {copied ? <FaCheck size={12} /> : <FaRegCopy size={12} />}
      {copied && <span style={{ color: "var(--color-terminal)" }}>copied</span>}
    </button>
  );
}

export default function Home(): React.JSX.Element {
  return (
    <div
      className="min-h-screen grid-background"
      style={{
        background:
          "radial-gradient(900px 500px at 50% -10%, rgba(0,255,136,0.06), transparent 70%), #08090c",
      }}
    >
      <MatrixRain />
      <main className="container mx-auto px-5 py-16 md:py-24 max-w-4xl">
        {/* ---------- Hero ---------- */}
        <section className="mb-24">
          <div className="text-xs md:text-sm mb-7" style={{ color: "var(--color-terminal-dim)" }}>
            <span style={{ color: "var(--color-text-muted)" }}>shawna@portfolio</span>
            <span style={{ color: "var(--color-text-muted)" }}>:~$</span> whoami
            <span className="terminal-cursor" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-5 leading-[1.05]" style={{ color: "#f4f6f8" }}>
            Shawna Staff
          </h1>

          <p className="text-xl md:text-3xl font-medium mb-5" style={{ color: "var(--color-terminal)" }}>
            Full-stack engineer, end-to-end.
          </p>

          <p className="text-sm md:text-base leading-relaxed mb-8 max-w-2xl" style={{ color: "#a9b0b8" }}>
            Patent-pending graph IAM · production AI/LLM systems · cloud infrastructure.
            From database to deployment, I own the whole stack — and I ship.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <span className="status-online">
              <span>AVAILABLE FOR OPPORTUNITIES</span>
            </span>
            <span style={{ color: "var(--color-border)" }}>|</span>
            <div className="flex gap-3">
              <a href="https://github.com/ShawnaRStaff" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/shawnastaff/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin size={18} />
              </a>
              <a href={GMAIL_COMPOSE} target="_blank" rel="noopener noreferrer" className="social-icon" title="Email via Gmail">
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-4">
            <a
              href="#projects"
              className="retro-button flex items-center gap-2"
              style={{ background: "var(--color-terminal)", color: "var(--color-background)", borderColor: "var(--color-terminal)" }}
            >
              View work <FaArrowRight size={12} />
            </a>
            <a href="#contact" className="retro-button flex items-center gap-2">
              Get in touch
            </a>
          </div>
          <div className="mb-14">
            <CopyEmail />
          </div>

          <Terminal />
        </section>

        {/* ---------- About ---------- */}
        <section className="mb-24" id="about">
          <h2 className="section-title">About Me</h2>
          <div className="retro-card p-5 md:p-6 max-w-3xl mx-auto">
            <p className="text-[var(--color-text)] mb-4 text-sm md:text-base leading-relaxed">
              Full-stack engineer who owns the whole stack — from database schema to
              production deployment. My work spans patent-pending graph IAM, production
              AI/LLM systems, and cloud infrastructure.
            </p>
            <p className="text-[var(--color-text)] text-sm md:text-base leading-relaxed">
              I&apos;ve shipped a multi-tenant fintech compliance platform, have a patent-pending
              approach to graph-based identity management, run a 30+ service Docker homelab, and built
              a self-healing AWS compute fleet for original physics research. Backgrounds in Go,
              Python, React / React Native, and .NET.
            </p>
          </div>
        </section>

        {/* ---------- Skills (tags, no subjective bars) ---------- */}
        <section className="mb-24" id="skills">
          <h2 className="section-title">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {skillGroups.map((group) => (
              <div key={group.title} className="retro-card p-5 md:p-6">
                <h3 className="text-sm md:text-base font-semibold mb-4 text-[var(--color-terminal)]">
                  {">"} {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="retro-tag text-[11px] md:text-xs">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- Projects ---------- */}
        <section className="mb-24" id="projects">
          <h2 className="section-title">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* ---------- Contact ---------- */}
        <section className="mb-20" id="contact">
          <h2 className="section-title">Get In Touch</h2>
          <div className="retro-card p-5 md:p-6 max-w-lg mx-auto text-center">
            <p className="text-[var(--color-text-muted)] mb-6 text-sm md:text-base">
              Interested in working together? Let&apos;s connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
              <a href={GMAIL_COMPOSE} target="_blank" rel="noopener noreferrer" className="retro-button flex items-center justify-center gap-2">
                <FaEnvelope /> Email
              </a>
              <a href="https://github.com/ShawnaRStaff" target="_blank" rel="noopener noreferrer" className="retro-button flex items-center justify-center gap-2">
                <FaGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/shawnastaff/" target="_blank" rel="noopener noreferrer" className="retro-button retro-button-amber flex items-center justify-center gap-2">
                <FaLinkedin /> LinkedIn
              </a>
            </div>
            <p className="text-[var(--color-text-muted)] text-xs mb-2">Prefer your own client? Copy it:</p>
            <CopyEmail />
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
