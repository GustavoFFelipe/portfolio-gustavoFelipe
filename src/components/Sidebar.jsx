import './Sidebar.scss'

export default function Sidebar(){
    return (
        <>
            <div id="sidebar">
            <h1>Gustavo Felipe</h1>
            <span>Desenvolvedor Front-end</span>
            <p>Resumo de habilidades na criação de um site</p>
            <nav className="menu">
              <ul>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#projects">Projetos</a></li>
                <li><a href="contact">Contato</a></li>
              </ul>
            </nav>
          </div>
        </>
    )
}