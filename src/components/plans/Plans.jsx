import './plans.css'
import PlanCard from './PlanCard'
import ServicesAvulsos from './Services'

export default function Plans() {
  return (
    <div className="containnerPlans">
      <h1>Pacotes de Serviços</h1>
      <h4>Assessoria Nutricional e Gestão da Qualidade</h4>
      <h4>Soluções completas para controle de qualidade e segurança dos alimentos, adaptadas <br /> à realidade de cada operação. Escolha o pacote ideal para o seu estabelecimento.</h4>

      <div className="plans">
        <div className="plans-grid">
          <PlanCard type="prime" />

          <div className="right-column">
            <div className="top-cards">
              <PlanCard type="core" />
              <PlanCard type="base" />
            </div>

            <ServicesAvulsos />
          </div>
        </div>
      </div>
    </div>
  )
}
