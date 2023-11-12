import './Sidebar.scss'
import instagram from '../assets/images/icons/instagram.png';
import github from '../assets/images/icons/github.png';
import linkedin from '../assets/images/icons/linkedin.png';

export default function Sidebar(){
    return (
        <>
            <div id="sidebar">
            <div className="container">
{/*---------------------Title from sidebar------------- */}
              <div className="title">
                <h1 id='name-title'>Gustavo Felipe</h1>
                <span id='job-title'>Desenvolvedor Front-end</span>
                <p id='sub-title'>Trazendo praticidade, criatividade e eficacia ao seu dia a dia na web.</p>
              </div>
    {/*--------------Navigation menu -------------*/}
              <nav className="menu">
                <ul>
                  <li><a id='about-link' href="#about">Sobre</a></li>
                  <li><a href="#projects">Projetos</a></li>
                  <li><a href="#contact">Contato</a></li>
                </ul>
              </nav>
{/*-------------Social menu icons --------------*/}
              <div id="social">
                <ul>
                  <li><a href="https:instagram.com/gu.ffelipe"><img src={instagram} alt="" /></a></li>
                  <li><a href="https://github.com/GustavoFFelipe"><img src={github} alt="" /></a></li>
                  <li><a href="https:linkedin.com/in/gustavoffelipe"><img src={linkedin} alt="" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </>
    )
}