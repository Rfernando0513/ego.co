import "./TextDescription.css";
import {
  Whatsapp,
  Check
} from 'react-bootstrap-icons'

export default function TextDescription() {
  const handleWhatsAppClick = () => {
    const numero = "5511914100225";

    const mensagem = `
Olá! Vim pelo site da EGO.CO

Gostaria de entender melhor as soluções de segurança para o meu estabelecimento.
  `;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  };


  return (
    <aside className="contactInfoCard">
      <h3 className="contactInfoTitle">
        Vamos cuidar da segurança
        <br />
        do seu negócio?
      </h3>

      <p className="contactInfoText">
        Fale com a EGO.CO e descubra a solução ideal para o seu
        estabelecimento.
        <br />
        Atendimento humanizado, diagnóstico técnico e propostas
        sob medida.
      </p>

      <div className="contactInfoInnerCard">
        <button
          className="contactInfoWhatsBtn"
          type="button"
          onClick={handleWhatsAppClick}
        >
          <Whatsapp size={35}/>
          Falar agora pelo WhatsApp
        </button>

        <ul className="contactInfoList">
          <li>
            <Check size={40}/>
            Atendimento profissional
          </li>
          <li>
            <Check size={40}/>
            Resposta rápida
          </li>
          <li>  
            <Check size={40}/>  
            Sem compromisso
          </li>
        </ul>
      </div>
    </aside>
  );
}