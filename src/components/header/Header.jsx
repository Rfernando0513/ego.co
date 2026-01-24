import "./Header.css";


function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <div className="logo">
          <img src="/img/Logo.png" alt="ego.co" />
        </div>


        <nav className="nav-links">
          <a href="#inicio">INÍCIO</a>
          <a href="#servicos">SERVIÇOS</a>
          <a href="#sobre">SOBRE NÓS</a>
          <a href="#pacotes">PACOTES</a>
        </nav>

        <button className="nav-button">FALE COM A EGO</button>
      </div>
        
    </header>
  );
}

export default Navbar;