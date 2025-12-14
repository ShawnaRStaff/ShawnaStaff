import { FaReact, FaPython, FaNodeJs, FaDatabase, FaHtml5, FaGithub } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiPostgresql, SiSharp, SiDotnet, SiFastapi, SiDocker, SiCss3, SiMongodb, SiMysql, SiGithubactions } from "react-icons/si";

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  FaReact, FaPython, FaNodeJs, FaDatabase, FaHtml5, FaGithub,
  SiTypescript, SiJavascript, SiPostgresql, SiSharp, SiDotnet, SiFastapi, SiDocker, SiCss3, SiMongodb, SiMysql, SiGithubactions,
};

export default function SkillItem({ icon, name, level }: { icon: string; name: string; level: number }): React.JSX.Element {
  const IconComponent = icon === "SiHtmx" ? FaHtml5 : iconMap[icon];

  return (
    <div className="flex items-center gap-3 mb-3">
      <div className="text-[var(--color-terminal)] flex items-center justify-center w-8 h-8 md:w-9 md:h-9 border border-[var(--color-border)] rounded bg-[var(--color-surface)]">
        {IconComponent && <IconComponent className="text-base md:text-lg" />}
      </div>
      <div className="flex-grow">
        <div className="flex justify-between mb-1">
          <span className="text-[var(--color-text)] text-xs md:text-sm">{name}</span>
          <span className="text-[var(--color-terminal-dim)] text-xs font-mono">{level}/10</span>
        </div>
        <div className="skill-bar-container">
          <div className="skill-bar-fill" style={{ width: `${level * 10}%` }} />
        </div>
      </div>
    </div>
  );
}