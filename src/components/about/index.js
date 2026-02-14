import './About.css';
import StatCard from '../statCard/StatCard';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

import {
  Briefcase,
  CalendarCheck,
  CheckCircleFill,
  PersonGear
} from 'react-bootstrap-icons';

export default function About() {
  const [textRef, textVisible] = useScrollAnimation();
  const [iconsRef, iconsVisible] = useScrollAnimation();

  const stats = [
    {
      value: 50,
      suffix: '+',
      label: 'Empresas atendidas',
      Icon: Briefcase
    },
    {
      value: 7,
      suffix: '+',
      label: 'Anos de experiência',
      Icon: CalendarCheck
    },
    {
      value: 100,
      suffix: '%',
      label: 'Conformidade sanitaria',
      Icon: CheckCircleFill
    },
    {
      value: 50,
      suffix: '+',
      label: 'Projetos executados',
      Icon: PersonGear
    }
  ];

  return (
    <div className="containner">
      <div className="containner-about">
        <div className="about">
          <div
            ref={textRef}
            className={`description from-left ${
              textVisible ? 'show' : ''
            }`}
          >
            <h1 className="textTitle">
              Cuidamos de processos para nutrir resultados
            </h1>

            <p className="textDescription">
              Especialistas em nutrição corporativa, segurança alimentar e gestão de qualidade.
            </p>

            <p className="textDescription">
              Promovemos o equilíbrio entre técnica e propósito na gestão alimentar, garantindo segurança,
              qualidade e consciência em cada etapa — da origem do alimento ao prato final.
            </p>

            <p className="textDescription">
              Atuamos de forma preventiva e estratégica para transformar rotinas produtivas em processos mais
              humanos, eficientes e alinhados às exigências sanitárias, gerando confiança, conformidade e resultados sustentáveis.
            </p>
          </div>

          <div
            ref={iconsRef}
            className={`icons from-right ${
              iconsVisible ? 'show' : ''
            }`}
          >
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
