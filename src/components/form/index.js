import './Form.css'
import {TextCamp} from '../textCamp/TextCamp'

const Form = () => {
    return(
        <section className="Form">
            <form>
                <h2>Solicitar contato ou orçamento</h2>

                <TextCamp
                    label='Nome'
                    placeholder='Digite seu nome...'
                />

                <TextCamp
                    label='WhatsApp'
                    placeholder='Digite seu número...'
                />

                <TextCamp  
                    label='E-mail'
                    placeholder='Digite seu email...'
                />

                <TextCamp  
                    label='Nome do estabelecimento'
                    placeholder='Digite o nome do estabelecimento...'
                />

                <div>
                    <label className="RadioTitle">Tipo de estabelecimento </label>
                    <div className='RadioGroup'>
                        <input type="radio" value="restaurante" /> Restaurante
                        <input type="radio" value="bar" /> Bar
                        <input type="radio" value="padaria" /> Padaria
                        <input type="radio" value="outro" /> Outro
                    </div>
                </div>

                <div className="input-message">
                    <label>Mensagem</label>
                    <textarea type="text" className="field mess" placeholder='Conte brevemente a sua necessidade ou dúvida' required />
                </div>

                <button type="submit">Enviar Mensagem</button>

                <div>
                    <label className="Text">
                        Ao enviar, você concorda em receber contato da EGO.CO
                        por e-mail ou whatsApp
                    </label>
                </div>

            </form>
        </section>
    )
}

export default Form;