import Avatar from '../img/foto.jpg'
import '../styles/components/sidebar.sass'
import { SocialNetworks } from './SocialNetworks'
import {InformatationContainer} from './InformatationContainer'

export function Sidebar() {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Samia Kelly" />
      <p className="title">Desenvolvedora Front-end</p>
      <SocialNetworks/>
      <InformatationContainer />
     
    </aside>
  )
}