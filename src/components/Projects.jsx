import disney from '../assets/images/projectImages/disney.png';
import coffee from '../assets/images/projectImages/coffee.png';
import ignite from '../assets/images/projectImages/ignite.png';
import foxriver from '../assets/images/projectImages/foxriver.png';
import './Projects.scss';
export default function Projects() {
    return (
        <>
            <section className="projectsContainer">
                <div className="divider">
                    <h2>Projects</h2>
                </div>
                {/**-----Project Cards -------------*/}
                <a href="#">
                    <div className="cardContainer">
                        <img src={ignite} alt="Clone do site da disney" />
                        <div className="cardInfoContainer">
                            <p id='cardInfo'>
                                Clone da Landing page do Disney+, responsivo e utilizando técnicas de estilo avançadas como SASS e LESS.
                            </p>
                            <span className="tech">Typescript</span>
                            <span className="tech">Module CSS</span>
                            <span className="tech">React</span>
                            
                        </div>
                    </div>
                </a>
                {/**-----End Project Cards -------*/}
                {/**-----Project Cards -------------*/}
                <a href="#">
                    <div className="cardContainer">
                        <img src={disney} alt="Clone do site da disney" />
                        <div className="cardInfoContainer">
                            <p id='cardInfo'>
                                Clone da Landing page do Disney+, responsivo e utilizando técnicas de estilo avançadas como SASS e LESS.
                            </p>
                            <span className="tech">Javascrpit</span>
                            <span className="tech">HTML</span>
                            <span className="tech">SASS</span>
                            <span className="tech">LESS</span>
                        </div>
                    </div>
                </a>
                {/**-----End Project Cards -------*/}
                {/**-----Project Cards -------------*/}
                <a href="#">
                    <div className="cardContainer">
                        <img src={coffee} alt="Clone do site da disney" />
                        <div className="cardInfoContainer">
                            <p id='cardInfo'>
                                Clone da Landing page do Disney+, responsivo e utilizando técnicas de estilo avançadas como SASS e LESS.
                            </p>
                            <span className="tech">Javascrpit</span>
                            <span className="tech">React</span>
                            <span className="tech">SASS</span>
                            
                        </div>
                    </div>
                </a>
                {/**-----End Project Cards -------*/}
                {/**-----Project Cards -------------*/}
                <a href="#">
                    <div className="cardContainer">
                        <img src={foxriver} alt="Clone do site da disney" />
                        <div className="cardInfoContainer">
                            <p id='cardInfo'>
                                Clone da Landing page do Disney+, responsivo e utilizando técnicas de estilo avançadas como SASS e LESS.
                            </p>
                            <span className="tech">React</span>
                            <span className="tech">SASS</span>
                        </div>
                    </div>
                </a>
                {/**-----End Project Cards -------*/}
            </section >
        </>
    )
}