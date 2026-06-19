"use client";
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaRegCopy, FaCheck } from "react-icons/fa";
import Terminal from "../components/terminal/terminal";

const EMAIL = "shawnastaff@gmail.com";

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
          /* clipboard blocked — the mailto button still works */
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

/**
 * DESIGN PREVIEW — matured hero direction.
 * Lives at /preview so it does not touch the live homepage.
 * Keeps the terminal identity (mono, green accent, prompt, the real Terminal)
 * but dials back the glow/ASCII/CRT so it reads "senior engineer", not "Matrix cosplay".
 */
export default function Preview(): React.JSX.Element {
  return (
    <div
      className="min-h-screen grid-background"
      style={{
        background:
          "radial-gradient(900px 500px at 50% -10%, rgba(0,255,136,0.06), transparent 70%), #08090c",
      }}
    >
      <main className="container mx-auto px-5 py-20 md:py-28 max-w-4xl">
        {/* Prompt eyebrow — keeps the terminal nod, tastefully */}
        <div className="text-xs md:text-sm mb-7" style={{ color: "var(--color-terminal-dim)" }}>
          <span style={{ color: "var(--color-text-muted)" }}>shawna@portfolio</span>
          <span style={{ color: "var(--color-text-muted)" }}>:~$</span> whoami
          <span className="terminal-cursor" />
        </div>

        {/* Name — clean, confident, white. No ASCII, minimal glow. */}
        <h1
          className="text-5xl md:text-7xl font-bold tracking-tight mb-5 leading-[1.05]"
          style={{ color: "#f4f6f8" }}
        >
          Shawna Staff
        </h1>

        {/* Tagline — the senior value prop */}
        <p
          className="text-xl md:text-3xl font-medium mb-5"
          style={{ color: "var(--color-terminal)" }}
        >
          Full-stack engineer, end-to-end.
        </p>

        <p
          className="text-sm md:text-base leading-relaxed mb-8 max-w-2xl"
          style={{ color: "#a9b0b8" }}
        >
          Patent-pending graph IAM · production AI/LLM systems · cloud infrastructure.
          From database to deployment, I own the whole stack — and I ship.
        </p>

        {/* Status + social row */}
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
            <a href="mailto:shawnastaff@gmail.com" className="social-icon">
              <FaEnvelope size={18} />
            </a>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <a
            href="#projects"
            className="retro-button flex items-center gap-2"
            style={{ background: "var(--color-terminal)", color: "var(--color-background)", borderColor: "var(--color-terminal)" }}
          >
            View work <FaArrowRight size={12} />
          </a>
          <a href={`mailto:${EMAIL}`} className="retro-button flex items-center gap-2">
            Get in touch
          </a>
        </div>
        {/* Reliable fallback: visible, copyable address (works even with no mail app) */}
        <div className="mb-16">
          <CopyEmail />
        </div>

        {/* The terminal stays the centerpiece */}
        <Terminal />
      </main>
    </div>
  );
}
