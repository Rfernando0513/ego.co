import './Contact.css'
import Form from '../form'
import TextDescription from '../textDescription/TextDescription'

export default function Contact() {
  return (
    <section className="contactSection">
      <div className="contactContainer">
        <TextDescription />
        <Form />
      </div>
    </section>
  )
}