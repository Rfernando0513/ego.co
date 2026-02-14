import './plans.css'
import PlanCard from './PlanCard'
import ServicesAvulsos from './Services'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function Plans() {
  const [titleRef, titleVisible] = useScrollAnimation()
  const [plansRef, plansVisible] = useScrollAnimation()
  const [serviceRef, serviceVisible] = useScrollAnimation()

  return (
    <div className="containnerPlans">
      <div
        ref={titleRef}
        className={`fade-up ${titleVisible ? 'show' : ''}`}
      >
        <h1>Pacotes de Serviços</h1>
        <h4>Assessoria Nutricional e Gestão da Qualidade</h4>
        <h4>
          Soluções completas para controle de qualidade e segurança dos alimentos,
          adaptadas <br />
          à realidade de cada operação. Escolha o pacote ideal para o seu estabelecimento.
        </h4>
      </div>

      <div className="plans">
        <div
          ref={plansRef}
          className={`plans-grid fade-up delay-1 ${
            plansVisible ? 'show' : ''
          }`}
        >
          <PlanCard type="prime" />

          <div className="right-column">
            <div className="top-cards">
              <PlanCard type="core" />
              <PlanCard type="base" />
            </div>
            <div
              ref={serviceRef}
              className={`from-right delay-2 ${
                serviceVisible ? 'show' : ''
              }`}
            >
              <ServicesAvulsos />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
