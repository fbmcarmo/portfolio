import {
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiDocker,
  SiTypescript,
  SiPostgresql,
} from "react-icons/si";

const iconClass = "w-12 h-12";

const skills = [
  {
    name: "Docker",
    url: "https://www.docker.com/",
    icon: <SiDocker className={`${iconClass} text-[#2496ED]`} />,
  },
  {
    name: "TypeScript",
    url: "https://www.typescriptlang.org/",
    icon: <SiTypescript className={`${iconClass} text-[#3178C6]`} />,
  },
  {
    name: "JavaScript",
    url: "https://developer.mozilla.org/docs/Web/JavaScript",
    icon: <FaJs className={`${iconClass} text-[#F7DF1E]`} />,
  },
  {
    name: "React.js",
    url: "https://react.dev/",
    icon: <FaReact className={`${iconClass} text-[#61DAFB]`} />,
  },
  {
    name: "Node.js",
    url: "https://nodejs.org/",
    icon: <FaNodeJs className={`${iconClass} text-[#5FA04E]`} />,
  },
  {
    name: "PostgreSQL",
    url: "https://www.postgresql.org/",
    icon: <SiPostgresql className={`${iconClass} text-[#4169E1]`} />,
  },
];

export default function Skills() {
  return (
    <section className="py-20">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
        {skills.map((skill) => (
          <a
            key={skill.name}
            href={skill.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#111111] p-6 rounded-lg text-center border border-white/5 hover:border-[#ff6aa2]/40 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="mb-4 flex justify-center">
              {skill.icon}
            </div>

            <p className="font-semibold">{skill.name}</p>

            <span className="text-xs text-gray-400">
              5 anos experiência
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}