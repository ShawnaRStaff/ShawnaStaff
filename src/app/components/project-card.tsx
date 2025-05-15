import { FaGithub } from "react-icons/fa";

export interface ProjectType {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}
interface ProjectCardProps {
  project: ProjectType;
}
export default function ProjectCard({
  project,
}: ProjectCardProps): React.JSX.Element {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-purple-800 hover:shadow-purple-500/30 transition-all duration-300 h-full flex flex-col">
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="px-6 pb-4 flex justify-between">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 text-sm"
        >
          <FaGithub /> View Code
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1 text-sm"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
