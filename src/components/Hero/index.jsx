import Image from "next/image"
import SocialLinks from "../SocialLinks"

export default function Hero() {
  return (
    <section
      id="inicio"
      className="pt-24 min-h-screen flex flex-col justify-center px-6"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
        {/* TEXTO */}
        <div className="max-w-xl text-center md:text-left">
          <span className="text-[#ff6aa2] text-sm tracking-wide">
            Bruno Moreira
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 leading-tight">
            Seja bem-vindo(a)<br />
            <span className="text-[#ff6aa2]">Eu sou Bruno Moreira</span>
          </h1>

          <p className="text-gray-400 mt-6 text-sm sm:text-base">
            Desenvolvedor fullstack focado em criar interfaces modernas
            e experiências digitais incríveis.
          </p>

          <a
            href="/bruno-moreira-cv.pdf"
            download
            className="inline-block mt-8 bg-[#ff6aa2] text-black px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
          >
            Download CV
          </a>
        </div>

        {/* FOTO */}
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-linear-to-b from-[#ff6aa2] to-pink-400 shrink-0">
          <Image
            src="/bruno.jpg"
            alt="Foto de Bruno Moreira"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <SocialLinks />
      </div>
    </section>
  )
}
