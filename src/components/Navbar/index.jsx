"use client"

import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-[#ff6aa2] font-semibold text-lg">
          Bruno Moreira
        </span>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex gap-8 text-sm text-gray-300">
          <NavItem href="#inicio">Início</NavItem>
          <NavItem href="#projetos">Projetos</NavItem>
          <NavItem href="#contato">Contato</NavItem>
        </ul>

        {/* BOTÃO MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300 text-2xl"
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </nav>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          <ul className="flex flex-col items-center gap-6 py-6 text-gray-300">
            <NavItem href="#inicio" onClick={() => setOpen(false)}>
              Início
            </NavItem>
            <NavItem href="#projetos" onClick={() => setOpen(false)}>
              Projetos
            </NavItem>
            <NavItem href="#contato" onClick={() => setOpen(false)}>
              Contato
            </NavItem>
          </ul>
        </div>
      )}
    </header>
  )
}

function NavItem({ href, children, onClick }) {
  return (
    <li>
      <a
        href={href}
        onClick={onClick}
        className="hover:text-[#ff6aa2] transition"
      >
        {children}
      </a>
    </li>
  )
}
