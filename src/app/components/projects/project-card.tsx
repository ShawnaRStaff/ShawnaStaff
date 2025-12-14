import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { ProjectType } from "@/app/components/projects/projects";

export default function ProjectCard({ project }: { project: ProjectType }): React.JSX.Element {
  return (
    <div className="retro-card h-full flex flex-col">
      <div className="p-4 md:p-5 flex-grow">
        <h3 className="text-base md:text-lg font-semibold text-[var(--color-terminal)] mb-2 text-glow-subtle">
          {">"} {project.title}
        </h3>
        <p className="text-[var(--color-text-muted)] text-xs md:text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="retro-tag text-[10px] md:text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="px-4 md:px-5 pb-4 flex gap-4 border-t border-[var(--color-border)] pt-3">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-cyan)] hover:text-glow-cyan transition-all flex items-center gap-1.5 text-xs md:text-sm"
        >
          <FaGithub /> Code
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-amber)] hover:text-glow-amber transition-all flex items-center gap-1.5 text-xs md:text-sm"
          >
            <FaExternalLinkAlt size={10} /> Demo
          </a>
        )}
      </div>
    </div>
  );
}
