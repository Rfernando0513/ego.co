export default function PlanCard({ type, recommended, offset }) {

  const phoneNumber = '5511914100225';

  const messages = {
    prime: 'Olá! Tenho interesse no plano EGO PRIME – Gestão Completa. Gostaria de mais informações.',
    core: 'Olá! Tenho interesse no plano EGO CORE – Gestão Intermediária. Gostaria de mais informações.',
    base: 'Olá! Tenho interesse no plano EGO BASE – Gestão Essencial. Gostaria de mais informações.',
  };

  const whatsappLink = (message) =>
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className={`plan-card ${type} ${offset ? 'offset' : ''}`}>

      {recommended && <span className="badge">RECOMENDADO</span>}

      {type === 'prime' && (
        <>
          <h3>EGO PRIME – Gestão Completa</h3>
          <p className="descriptionPlans">
            Ideal para operações que exigem controle rigoroso,
            acompanhamento contínuo e alto nível de conformidade sanitária.
          </p>

          <div className="cardDivissor">
            <strong>Inclui:</strong>
            <ul>
              <li>. 04 auditorias mensais (01 por semana)</li>
              <li>. 01 varredura de validade mensal</li>
              <li>. 02 treinamentos on the job por mês</li>
              <li>. 01 treinamento completo a cada 06 meses</li>
              <li>. Gestão e atualização contínua da documentação</li>
              <li>. Pasta organizadora inclusa</li>
              <li>. Kit de adesivos informativos (POPs)</li>
              <li>. Manual de Boas Práticas + POPs (renovação anual)</li>
              <li>. Planilhas de controle (validade de 01 ano)</li>
              <li>. Análise de potabilidade da água (a cada 06 meses)</li>
            </ul>

            <a
              href={whatsappLink(messages.prime)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Contratar Gestão Completa</button>
            </a>
          </div>
        </>
      )}

      {type === 'core' && (
        <>
          <h3>EGO CORE – Gestão Intermediária</h3>
          <p className="descriptionPlans">
            Para estabelecimentos que buscam organização,
            prevenção e suporte técnico periódico.
          </p>

          <div className="cardDivissor">
            <strong>Inclui:</strong>
            <ul>
              <li>. 02 auditorias mensais</li>
              <li>. Treinamento e dinâmica de equipe a cada 06 meses</li>
              <li>. Gestão da documentação (auditoria trimestral)</li>
              <li>. Kit de adesivos informativos (POPs)</li>
              <li>. Manual de Boas Práticas + POPs (renovação anual)</li>
            </ul>

            <a
              href={whatsappLink(messages.core)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Contratar Gestão Intermediária</button>
            </a>
          </div>
        </>
      )}

      {type === 'base' && (
        <>
          <h3>EGO BASE – Gestão Essencial</h3>
          <p className="descriptionPlans">
            Indicado para quem precisa cumprir exigências sanitárias
            com acompanhamento básico e eficiente.
          </p>

          <div className="cardDivissor">
            <strong>Inclui:</strong>
            <ul>
              <li>. 01 auditoria mensal</li>
              <li>. Treinamento e dinâmica de equipe a cada 06 meses</li>
              <li>. Gestão da documentação (auditoria trimestral)</li>
              <li>. Kit de adesivos informativos (POPs)</li>
              <li>. Planilha de controle</li>
            </ul>

            <a
              href={whatsappLink(messages.base)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Contratar Gestão Essencial</button>
            </a>
          </div>
        </>
      )}

    </div>
  );
}
