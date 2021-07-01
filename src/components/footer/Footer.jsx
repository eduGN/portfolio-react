import { faFacebook, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './Footer.css'

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-container-info">
        <h4>Edu Gutierrez</h4>
        <h5>Desarrollador</h5>

        <div className="footer-roles">
        <p>Web Full Stack</p>
        <p>Android App</p>
        </div>
        
      </div>
      <div className="footer-container-social">
       <a href="https://www.instagram.com/edujoel_gn/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon-social" icon={faInstagram}/></a>
       <a href="https://www.facebook.com/edujoel.gutierreznavarro/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon-social" icon={faFacebook}/></a>
       <a href="https://github.com/eduGN" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon-social " icon={faGithub}/></a>
       <a href="https://www.linkedin.com/in/edu-gutierrez-navarro/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon-social" icon={faLinkedin}/></a>
      </div>
      <div className="footer-copyright">
        <div>© Edu Gutierrez.</div>
        <div> Todos los derechos reservados </div>
      </div>
    </div>
  );
}

export default Footer;
