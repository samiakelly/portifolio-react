import "../styles/components/maincontent.sass"
import { AboutContainer } from './AboutContainer'
import { TechnologiesContainer } from './TechnologiesContainer'
import { Services } from './Services'

export function MainContent(){
  return (
   <main id="main-content">
    <AboutContainer />
    <TechnologiesContainer />
    <Services />
   </main>
  )
}