import { GrHostMaintenance} from 'react-icons/gr'
import { RiPagesLine} from 'react-icons/ri'
import { CgWebsite } from "react-icons/cg";
import '../styles/components/services.sass'

export function Services(){
  return (
    <section>
      <h2>Serviços</h2>
      <div className="services-container">
          <div className="services-card">
            <GrHostMaintenance />
            <div>
              <h3>Manutenção</h3>
              <p>Sites e blogs, ajustes e otimizações, layout e navegação.</p>
            
            </div>
          </div>
          <div className="services-card">
            <RiPagesLine />
            <div>
                <h3>Landing pages</h3>
                <p>Landing pages personalizadas de sua preferência.</p>
              
            </div>
          </div>
          <div className="services-card">
            <CgWebsite />  
            <div>
                <h3>Web Sites</h3>
                <p>Desenvolver a interface de utilização do site.</p>
              
            </div>
          </div>
      </div>
    </section>
  )
}