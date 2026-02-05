import "./TextDescription.css";
import whatsappIcon from "../../imgs/whatsapp.svg";
import checkIcon from "../../imgs/check.png";

export default function TextDescription() {
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
        <button className="contactInfoWhatsBtn" type="button">
          <img src={whatsappIcon} alt="" className="whatsIcon" />
          Falar agora pelo WhatsApp
        </button>

        <ul className="contactInfoList">
          <li>
            <img src={checkIcon} alt="" className="checkIcon" />
            Atendimento profissional
          </li>
          <li>
            <img src={checkIcon} alt="" className="checkIcon" />
            Resposta rápida
          </li>
          <li>
            <img src={checkIcon} alt="" className="checkIcon" />
            Sem compromisso
          </li>
        </ul>
      </div>
    </aside>
  );
}