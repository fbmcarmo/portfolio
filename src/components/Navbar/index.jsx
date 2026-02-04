export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-[#ff6aa2] font-semibold text-lg">
          Bruno Moreira
        </span>

        <ul className="flex gap-8 text-sm text-gray-300">
          <li>
            <a href="#inicio" className="hover:text-white transition">
              Início
            </a>
          </li>
          <li>
            <a href="#projetos" className="hover:text-white transition">
              Projetos
            </a>
          </li>
          <li>
            <a href="#contato" className="hover:text-white transition">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
