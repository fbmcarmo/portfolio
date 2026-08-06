import Image from "next/image";

const projects = [
  {
    title: "Sebão Online",
    url: "https://sebao-online.vercel.app/",
    image: "/sebaoonline.png",
    frontend: {
      stack: "React • Next.js • Tailwind CSS",
      readme: "https://github.com/fbmcarmo/sebao-online",
    },
    backend: {
      stack: "Node.js • Express.js • PostgreSQL",
      readme: "https://github.com/fbmcarmo/api-sebao-online",
    },
  },
  {
    title: "Painel de Controle do Vendedor",
    url: "https://painel-controle-vendedor.vercel.app/",
    image: "/painelvendedor.png",
    frontend: {
      stack: "React • Next.js • Tailwind CSS",
      readme: "https://github.com/fbmcarmo/painel-controle-vendedor",
    },
    backend: {
      stack: "Node.js • Express.js • PostgreSQL",
      readme: "https://github.com/fbmcarmo/api-painel-controle-vendedor",
    },
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="py-20">
      <h2 className="text-3xl font-bold mb-10">Projetos</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#111111] rounded-xl overflow-hidden border border-white/5 hover:border-[#ff6aa2]/50 transition"
          >
            {/* IMAGEM */}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`Imagem do projeto ${project.title}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </a>

            {/* CONTEÚDO */}
            <div className="p-5">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="font-semibold hover:text-[#ff6aa2] transition">
                  {project.title}
                </h3>
              </a>

              {/* FRONTEND */}
              <div className="mt-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm text-gray-300 font-medium">
                    Frontend
                  </span>

                  <a
                    href={project.frontend.readme}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#ff6aa2] hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Saiba mais →
                  </a>
                </div>

                <p className="text-sm text-gray-400 mt-1">
                  {project.frontend.stack}
                </p>
              </div>

              {/* BACKEND */}
              <div className="mt-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm text-gray-300 font-medium">
                    Backend
                  </span>

                  <a
                    href={project.backend.readme}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#ff6aa2] hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Saiba mais →
                  </a>
                </div>

                <p className="text-sm text-gray-400 mt-1">
                  {project.backend.stack}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}