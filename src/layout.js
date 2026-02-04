import Navbar from "./components/Navbar"
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased pt-16">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
