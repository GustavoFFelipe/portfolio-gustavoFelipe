import './Main.scss';
import MainContentPortuguese from './MainContentPortuguese';
import Projects from './Projects';

export default function Main() {
  return (
    <>
      <div id="main">
        <div id="about">
          <MainContentPortuguese />
          <Projects />
        </div>
        
      </div>
    </>
  )
}