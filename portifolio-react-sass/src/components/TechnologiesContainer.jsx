import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiPython,
  DiReact,
  
} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const technologies = [
  {id: "html", name: "HTML5", icon: <DiHtml5 />, text: "É uma linguagem de marcação utilizada na construção de páginas na Web, que podem ser interpretados por navegadores"},
  {id: "css", name: "CSS3", icon: <DiCss3 />, text:"Cascading Style Sheets é uma 'folha de estilo' composta por 'camadas' e utilizada para definir a apresentação (aparência) a um documento web."},
  {id: "js", name: "JavaScript", icon: <DiJsBadge />, text:"É uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma."},
  {id: "node", name: "Node.js", icon: <DiNodejsSmall />, text:"É um software de código aberto, multiplataforma, que permite a execução de códigos JavaScript fora de um navegador web."},
  {id: "python", name: "Python", icon: <DiPython/>, text:"É uma linguagem de programação interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica."},
  {id: "react", name: "React", icon: <DiReact />, text:"É uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. "},
]

export function TechnologiesContainer(){
  return (
    <section className='technologies-container'>
      <h2>Tecnologias</h2>
      <div className='technologies-grid'>
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} Key={tech.id}>
            {tech.icon}
            <div className='technology-info'>
              <h3>{tech.name}</h3>
              <p>{tech.text}</p>
            </div>
          </div>
        ))}
        
      </div>
    </section>
  )
}