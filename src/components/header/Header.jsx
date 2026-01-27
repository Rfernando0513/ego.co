import { useState } from "react";
import "./Header.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        <div className="logo">
          <img src="/img/Logo.png" alt="ego.co" />
        </div>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#inicio" onClick={() => setMenuOpen(false)}>INÍCIO</a>
          <a href="#servicos" onClick={() => setMenuOpen(false)}>SERVIÇOS</a>
          <a href="#sobre" onClick={() => setMenuOpen(false)}>SOBRE NÓS</a>
          <a href="#pacotes" onClick={() => setMenuOpen(false)}>PACOTES</a>
        </nav>

        <button className="nav-button">FALE COM A EGO</button>

        {/* BOTÃO HAMBÚRGUER */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>
    </header>
  );
}

export default Navbar;