import './Footer.css';
import {
    Telephone, Envelope, Whatsapp, Facebook, Instagram
} from 'react-bootstrap-icons';

function FooterFinal() {
    return (
        <>
            <footer className="footer">
                <div className="footer-container">


                    <div className="footer-brand">
                        <img src="/img/logo-diminuida.png" alt="ego.co" class="footer-logo" />
                        <p>
                            Assessoria nutricional e gestão da qualidade,<br /> promovendo segurança
                            alimentar,<br /> conformidade sanitária e resultados sustentáveis.
                        </p>
                    </div>


                    <div className="footer-divider"></div>


                    <div className="footer-nav">
                        <h4>Navegação</h4>
                        <ul>
                            <li><a href="#">Serviços</a></li>
                            <li><a href="#">Sobre nós</a></li>
                            <li><a href="#">Pacotes</a></li>
                        </ul>
                    </div>

                    <div className="footer-divider"></div>

                    <div className="footer-contact">
                              <h4>Contato</h4>
                        <p className="footer-item">
                            <Telephone size={20} />
                            (11) 91410-0225
                        </p>

                        <p className="footer-item">
                            <Envelope size={20} />
                            contato@gestaoego.com.br
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
