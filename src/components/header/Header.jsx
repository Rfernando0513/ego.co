import { useState, useEffect } from "react"
import "./Header.css"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleScroll = (id, offset = 80) => {
    const element = document.getElementById(id)
    if (!element) return

    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })

    setMenuOpen(false)
  }

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false)
    window.addEventListener("scroll", closeMenu)
    return () => window.removeEventListener("scroll", closeMenu)
  }, [])

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <a href="/">
            <img src="/img/Logo.png" alt="ego.co" />
          </a>
        </div>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button onClick={() => handleScroll("inicio", 100)}>INÍCIO</button>
          <button onClick={() => handleScroll("servicos", 60)}>SERVIÇOS</button>
          <button onClick={() => handleScroll("sobre", 150)}>SOBRE NÓS</button>
          <button onClick={() => handleScroll("pacotes", 50)}>PACOTES</button>
        </nav>

        <a
          href="https://wa.me/5511914100225?text=Olá!%20Gostaria%20de%20falar%20com%20a%20Ego%20e%20entender%20qual%20tipo%20de%20gestão%20é%20mais%20indicada%20para%20o%20meu%20negócio."
          target="_blank"
          rel="noopener noreferrer"
          className="nav-button"
        >
          FALE COM A EGO
        </a>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          ☰
        </button>

      </div>
    </header>
  )
}

export default Navbar
