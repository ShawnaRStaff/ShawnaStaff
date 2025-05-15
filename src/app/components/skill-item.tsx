import {
    FaReact,
    FaPython,
    FaNodeJs,
    FaDatabase,
  } from "react-icons/fa";
  import {
    SiTypescript,
    SiJavascript,
    SiPostgresql,
    SiSharp,
    SiDotnet,
    SiFastapi,
    SiDocker,
  } from "react-icons/si";

interface SkillItemProps {
  icon: string;
  name: string;
  level: number;
}
export default function SkillItem({
  icon,
  name,
  level,
}: SkillItemProps): React.JSX.Element {
  // Convert the icon name to the actual component
  const getIcon = (iconName: string): React.JSX.Element | null => {
    const iconMap: Record<string, React.ComponentType<any>> = {
      FaReact,
      FaPython,
      FaNodeJs,
      FaDatabase,
      SiTypescript,
      SiJavascript,
      SiPostgresql,
      SiSharp,
      SiDotnet,
      SiFastapi,
      SiDocker,
    };

    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className="text-2xl" /> : null;
  };

  return (
    <div className="flex items-center gap-2 mb-2">
      <div className="text-purple-400 flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full">
        {getIcon(icon)}
      </div>
      <div className="flex-grow">
        <div className="flex justify-between mb-1">
          <span className="text-white">{name}</span>
          <span className="text-purple-300 text-sm">{level}/10</span>
        </div>
        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-cyan-500"
            style={{ width: `${level * 10}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};