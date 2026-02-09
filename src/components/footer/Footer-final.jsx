import './Footer.css';
import { useState, useEffect } from "react";

import {
    Telephone, Envelope, Whatsapp, Facebook, Instagram
} from 'react-bootstrap-icons';

function FooterFinal() {

    const handleScroll = (id, offset = 80) => {
    const element = document.getElementById(id);
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

    const [menuOpen, setMenuOpen] = useState(false);
  
    useEffect(() => {
      const closeMenu = () => {
        setMenuOpen(false);
      };
  
      window.addEventListener("scroll", closeMenu);
  
      return () => {
        window.removeEventListener("scroll", closeMenu);
      };
    }, []);

    return (
        <>
            <footer className="footer">
                <div className="footer-container">


                    <div className="footer-brand">
                        <a onClick={() => handleScroll("inicio", 100)}>
                            <img src="/img/logo-diminuida.png" alt="ego.co" class="footer-logo" />
                        </a>
                        <p>
                            Assessoria nutricional e gestão da qualidade,<br /> promovendo segurança
                            alimentar,<br /> conformidade sanitária e resultados sustentáveis.
                        </p>
                    </div>

                    <div className="footer-divider"></div>

                    <div className="footer-nav">
                        <h4>Navegação</h4>
                        <ul>
                            <li><button onClick={() => handleScroll("inicio", 100)}>Inicio</button></li>
                            <li><button onClick={() => handleScroll("servicos", 60)}>Serviços</button></li>
                            <li><button onClick={() => handleScroll("sobre", 150)}>Sobre nós</button></li>
                            <li><button onClick={() => handleScroll("pacotes", 50)}>Pacotes</button></li>
                        </ul>
                    </div>

                    <div className="footer-divider"></div>

                    <div className="footer-contact">
                              <h4>Contato</h4>
                        <p className="footer-item">
                            <Telephone size={20} />
                            <a href="tel:+5511914100225">(11) 91410-0225</a>
                        </p>

                        <p className="footer-item">
                            <Envelope size={20} />
                            <a href="mailto:contato@gestaoego.com.br">contato@gestaoego.com.br</a>
                        </p>

                        <div className="footer-social">
                            <a href="#"><Whatsapp size={20} /></a>
                            <a href="#"><Facebook size={20} /></a>
                            <a href="#"><Instagram size={20} /></a>
                        </div>

                    </div>

                </div>

                <div className="footer-divider-bottom"></div>

                <div className="footer-bottom">
                    © 2026 EGO.CO Assessoria Nutricional e Gestão da Qualidade. Todos os direitos reservados.
                </div>
            </footer>

        </>
    );
}

export default FooterFinal;
