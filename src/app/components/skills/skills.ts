export interface SkillType {
    name: string;
    icon: string;
    level: number;
  }
  
  export const skills: SkillType[] = [
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