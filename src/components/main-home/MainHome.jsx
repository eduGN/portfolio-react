import { faAndroid } from "@fortawesome/free-brands-svg-icons";
import { faBriefcase, faChevronDown, faChevronUp, faCode, faDotCircle, faDownload, faFileCode, faGraduationCap, faMobile, faPaperPlane, faServer, faSprayCan, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import React, { useEffect, useState, /* useRef */ } from "react";
import Button from "../button/Button";
import CardProject from "../card-project/CardProject";
import Footer from "../footer/Footer";
import FormContact from "../form-contact/FormContact";
import NavBar from "../nav-bar/NavBar"
import Skill from "../skill/Skill";
import "./MainHome.css";

function MainHome() {

  const [showFront, setShowFront] = useState(false)

  const handleShowFront = () => {
    setShowFront(!showFront)
  }

  const [showBack, setShowBack] = useState(false)

  const handleShowBack = () => {
    setShowBack(!showBack)
  }

  const [showMobile, setShowMobile] = useState(false)

/*   const contactRef = useRef(null) */

  const handleShowMobile = () => {
    setShowMobile(!showMobile)
  }


  /* const goToContact = () => {

    contactRef
      .current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start"
      });
  }

  const downloadCV = () => {
    console.log("Se descargará el CV")
  }
 */
  useEffect(() => {

    AOS.init({ duration: 2000 })

  }, [])
  return (
    <>
      <NavBar navbarOpen={false} />
      <div className="main-container" id="introduction">

        <div className="introduction" data-aos="fade-down" >
          <div className="img-profile-container">
            <img className="img-profile" src="./assets/img/profileimg.jpg" alt="" />
          </div>
          
          <h1>
            ¡Hola!, soy <span>Edu</span>
          </h1>
          <p>Desarrollador</p>
          <p>
            <FontAwesomeIcon className="icon" icon={faCode} /> Web FullStack
          </p>
          <p>
            <FontAwesomeIcon className="icon" icon={faAndroid} /> Android Apps
          </p>
          <FontAwesomeIcon
            className="icon arrow-down"
            style={{ "--order": "1", marginTop: '1rem' }}
            icon={faChevronDown}
          />
          <FontAwesomeIcon
            className="icon arrow-down"
            style={{ "--order": "2" }}
            icon={faChevronDown}
          />
          <FontAwesomeIcon
            className="icon arrow-down"
            style={{ "--order": "3" }}
            icon={faChevronDown}
          />
        </div>

        <div className="about-me" id="about-me">
          <h2 data-aos="fade-up" >Sobre mí</h2>
          <div data-aos="fade-up">
            <FontAwesomeIcon
              className="icon icon-l"
              icon={faUser} />
          </div>

          <p data-aos="fade-up">
            Apasionado de la programación, tengo el objetivo de contribuir con mi
            trabajo a la consecución de los retos de la empresa con la que
            colabore. <br /> <br />
            Entusiasta y prudente, empático, centrado en el aprendizaje
            y la mejora continua. Tengo buena capacidad de adaptación ante
            imprevistos, y colaboro activamente con el equipo para alcanzar
            cuantos objetivos se plantean.
          </p>

          <div className="download-cv" data-aos="fade-up">
            <a href="/assets/files/curriculum_EduGutierrez.pdf" target="_blank" rel="noopener noreferrer" download="cv_EduGutierrez.pdf">
              <Button buttonSize="btn-medium" buttonStyle="btn-secondary"><div><span>Descargar CV</span><FontAwesomeIcon icon={faDownload} /></div></Button>
            </a>
          </div>
        </div>

        <div className="education" id="education">
          <h2 data-aos="fade-up" >Formación</h2>
          <div data-aos="fade-up">
            <FontAwesomeIcon
              className="icon icon-l"
              icon={faGraduationCap} />
          </div>
          <p data-aos="fade-up" >Mi camino hasta aquí</p>
          <div data-aos="fade-up" className="education-group">
            <p className="education-title">Grado Superior Desarrollo de Aplicaiones Web</p>
            <div className="dot-line">
              <FontAwesomeIcon
                className="icon"
                icon={faDotCircle} />
              <div className="vertical-line"></div>
            </div>
            <p className="education-school" >I.E.S Leonardo Da Vinci, Madrid. <br />
              <span>2019 - 2021</span></p>

          </div>

          <div data-aos="fade-up" className="education-group">
            <p className="education-school" style={{ textAlign: "right" }}> 290h Escuela Organización Industrial <br />
              <span>2021</span></p>
            <div className="dot-line">
              <FontAwesomeIcon
                className="icon"
                icon={faDotCircle} />
              <div className="vertical-line"></div>
            </div>
            <p className="education-title" style={{ textAlign: "left" }}>Programación Web FullStack: FrontEnd y BackEnd</p>


          </div>

          <div data-aos="fade-up" className="education-group">
            <p className="education-title">Programación de Aplicaiones Android y Desarrollo API REST</p>
            <div className="dot-line">
              <FontAwesomeIcon
                className="icon"
                icon={faDotCircle} />
              <div className="vertical-line"></div>
            </div>
            <p className="education-school" >315h Escuela Organización Industrial <br />
              <span>2020</span></p>
          </div>

          <FontAwesomeIcon
            className="icon"
            icon={faDotCircle} />

        </div>

        <div className="skills" id="skills">
          <h2 data-aos="fade-up" >Habilidades</h2>
          <div data-aos="fade-up">
            <FontAwesomeIcon
              className="icon icon-l"
              icon={faFileCode} />
          </div>
          <p data-aos="fade-up">Mis herramientas</p>

          <div className="skills-grid">
            <div>
              <div className="skills-type" data-aos="fade-up" onClick={handleShowFront}>
                <FontAwesomeIcon
                  className="icon icon-l"
                  icon={faSprayCan} />
                <h4>Frontend</h4>

                <FontAwesomeIcon
                  className="icon"
                  icon={showFront ? faChevronUp : faChevronDown} />

              </div>
              <div id="skills-type-list" data-aos="fade-up" style={{ visibility: showFront ? 'visible' : 'hidden', opacity: showFront ? '1' : '0', position: showFront ? 'unset' : 'absolute' }}>
                <Skill name="HTML" percentage="80%" cssPercentage="0.8" icon="html" colorIcon="#F06137" />
                <Skill name="CSS" percentage="75%" cssPercentage="0.75" icon="css" colorIcon="#016EAB" />
                <Skill name="JavaScript" percentage="70%" cssPercentage="0.7" icon="javascript" colorIcon="#F7DF4E" />
                <Skill name="Angular" percentage="65%" cssPercentage="0.65" icon="angular" colorIcon="#DE0034" />
                <Skill name="React" percentage="60%" cssPercentage="0.6" icon="react" colorIcon="#4CD3F0" />
              </div>
            </div>

            <div>
              <div className="skills-type" data-aos="fade-up" onClick={handleShowBack}>
                <FontAwesomeIcon
                  className="icon icon-l"
                  icon={faServer} />
                <h4>Backend</h4>
                <FontAwesomeIcon
                  className="icon"
                  icon={showBack ? faChevronUp : faChevronDown} />

              </div>
              <div id="skills-type-list" data-aos="fade-up" style={{ visibility: showBack ? 'visible' : 'hidden', opacity: showBack ? '1' : '0', position: showBack ? 'unset' : 'absolute' }}>
                <Skill name="PHP" percentage="70%" cssPercentage="0.7" icon="php" colorIcon="#787BAF" />
                <Skill name="NodeJS" percentage="75%" cssPercentage="0.75" icon="nodejs" colorIcon="#459E4E" />
                <Skill name="Java SpringBoot" percentage="60%" cssPercentage="0.6" icon="java" colorIcon="#007797" />
              </div>
            </div>

            <div>
              <div className="skills-type" data-aos="fade-up" onClick={handleShowMobile}>

                <FontAwesomeIcon
                  className="icon icon-l"
                  icon={faMobile} />

                <h4>Mobile<em>as</em></h4>
                <FontAwesomeIcon
                  className="icon"
                  icon={showMobile ? faChevronUp : faChevronDown} />

              </div>
              <div id="skills-type-list" data-aos="fade-up" style={{ visibility: showMobile ? 'visible' : 'hidden', opacity: showMobile ? '1' : '0', position: showMobile ? 'unset' : 'absolute' }}>
                <Skill name="Kotlin Android" percentage="65%" cssPercentage="0.65" icon="kotlin" colorIcon="#00D788" />
              </div>
            </div>
          </div>


        </div>

        <div className="projects" id="projects">
          <h2 data-aos="fade-up">Mis proyectos</h2>
          <div data-aos="fade-up">
            <FontAwesomeIcon
              className="icon icon-l"
              icon={faBriefcase} />
          </div>

          <div className="card-projects" data-aos="fade-up">
            <CardProject data-aos="fade-up" title="Portfolio Personal" img="./assets/img/profileimg.jpg" bodyText="Sitio web totalmente responsive con toda mi
            información personal desarrollado en React." href="https://www.spotify.com" />

            <CardProject data-aos="fade-up" title="Garito" img="./assets/img/garito.png" bodyText="Espacio para todos los músicos locales que se quieren dar
            a conocer. Actualmente en desarrollo utilizando el MEAN stack" href="https://www.spotify.com" />

            <CardProject data-aos="fade-up" title="Among Us Wiki" img="./assets/img/amongus.jpg" bodyText="Guía completa del juego más famoso del año 2020. 
            Desarrollado en Android Studio con Kotlin." href="https://www.spotify.com" />

          </div>
        </div>

        <div className="contact" id="contact">
          <h2 data-aos="fade-up">Contacto</h2>
          <div data-aos="fade-up">
            <FontAwesomeIcon
              className="icon icon-l"
              icon={faPaperPlane} />
          </div>
          <div data-aos="fade-up" >
            <FormContact />
          </div>

        </div>

        <div className="footer" id="footer">
          <div>
            <Footer />
          </div>


        </div>
      </div>
    </>
  );
}

export default MainHome;
