import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai"

import '../styles/components/InformatationContainer.sass'

export function InformatationContainer() {
  return (
    <section id="information">
      <div className="info-card">
        <a  href="https://api.whatsapp.com/send?phone=5585999824117&text=ol%C3%A1"
            target="_blank" ><AiFillPhone id="phone-icon"/></a>
        <div>
          <h3>Telefone</h3>
          <p>(85)99982-4117</p>
        </div>
      </div>
      <div className="info-card">
        <a href="mailto:samiasks@hotmail.com">
         <AiOutlineMail id="email-icon"/> 
        </a>
        <div>
          <h3>E-mail</h3>
          <p>samiasks@hotmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon"/> 
        <div>
          <h3>Localização</h3>
          <p>Fortaleza / CE</p>
        </div>
      </div>
    </section>
  )
}