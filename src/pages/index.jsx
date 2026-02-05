import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
