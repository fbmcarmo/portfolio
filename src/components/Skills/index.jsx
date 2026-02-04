import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa"
import { SiPostgresql } from "react-icons/si"

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-500" />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400" />,
  },
  {
    name: "React",
    icon: <FaReact className="text-cyan-400" />,
  },
  {
    name: "Node",
    icon: <FaNodeJs className="text-green-500" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-400" />,
  },
]

export default function Skills() {
  return (
    <section className="py-20">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-[#111111] p-6 rounded-lg text-center border border-white/5 hover:border-[#ff6aa2]/40 transition"
          >
            <div className="text-4xl mb-4 flex justify-center">
              {skill.icon}
            </div>

            <p className="font-semibold">{skill.name}</p>

            <span className="text-xs text-gray-400">
              4 anos experiência
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
