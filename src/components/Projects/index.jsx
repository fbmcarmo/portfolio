import Image from "next/image"

const projects = [
  {
    title: "Sebão Online",
    url: "https://sebao-online.vercel.app/",
    stack: "Next.js • Tailwind • Frontend • Backend",
    image: "/sebaoonline.png",
  },
  {
    title: "Painel de Controle do Vendedor",
    url: "https://painel-controle-vendedor.vercel.app/",
    stack: "Next.js • Dashboard • Frontend • Backend",
    image: "/painelvendedor.png",
  },
]

export default function Projects() {
  return (
    <section
      id="projetos"
      className="py-20"
    >
      <h2 className="text-3xl font-bold mb-10">Projetos</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#111111] rounded-xl overflow-hidden border border-white/5 hover:border-[#ff6aa2]/50 transition"
          >
            {/* IMAGEM DO PROJETO */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={`Imagem do projeto ${project.title}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* CONTEÚDO */}
            <div className="p-5">
              <h3 className="font-semibold group-hover:text-[#ff6aa2] transition">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                {project.stack}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
