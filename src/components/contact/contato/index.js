import './Contact.css'
import Form from '../form'
import TextDescription from '../textDescription/TextDescription'
import { useScrollAnimation } from '../../../hooks/useScrollAnimation'

export default function Contact() {
  const [textRef, textVisible] = useScrollAnimation()
  const [formRef, formVisible] = useScrollAnimation()

  return (
    <section className="contactSection">
      <div className="contactContainer">
        <div
          ref={textRef}
          className={`from-left ${textVisible ? 'show' : ''}`}
        >
          <TextDescription />
        </div>

        <div
          ref={formRef}
          className={`from-right ${formVisible ? 'show' : ''}`}
        >
          <Form />
        </div>
      </div>
    </section>
  )
}
