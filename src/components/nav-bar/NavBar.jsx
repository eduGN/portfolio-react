import React, { useEffect, useState } from "react";
import {
  faAngleDoubleRight,
  faBriefcase,
  faPaperPlane,
  faGraduationCap,
  faUser,
  faFileCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavBar.css";


function NavBar() {
  const [navbar, setNavBar] = useState(false);

  useEffect(()=>{
    if (!navbar) {
      document.getElementsByTagName("body")[0].style.background =
        "rgba(0, 0, 0, 0)";
      document.getElementsByClassName("img-profile")[0].style.filter =
        "brightness(100%)";
    } else {
      document.getElementsByTagName("body")[0].style.background =
        "rgba(0, 0, 0, 0.6)";
      document.getElementsByClassName("img-profile")[0].style.filter =
        "brightness(40%)";
    }
  },[navbar])
 
  const handleNavBar = () => {
    setNavBar(!navbar);
  };
  const navItems = [
    {
      text: "Sobre mí",
      icon: <FontAwesomeIcon className="nav-link-icon" icon={faUser} />,
      class: 'about-me'
    },
    {
      text: "Formación",
      icon: <FontAwesomeIcon className="nav-link-icon" icon={faGraduationCap} />,
      class: 'education'
    },
    {
      text: "Habilidades",
      icon: <FontAwesomeIcon className="nav-link-icon" icon={faFileCode} />,
      class: 'skills'
    },
    {
      text: "Mis proyectos",
      icon: <FontAwesomeIcon className="nav-link-icon" icon={faBriefcase} />,
      class: 'projects'
    },
    {
      text: "Contacto",
      icon: <FontAwesomeIcon className="nav-link-icon" icon={faPaperPlane} />,
      class: 'contact'
    }
  ];

  const navItemsList = navItems.map((navItem) => {
    return (
      <li key={navItem.text} className="nav-item">
        <a href={`#${navItem.class}`} className="nav-link" onClick={()=>{setNavBar(false)}}>
          {navItem.icon}
          <span
            className={
              navbar ? "nav-link-text active-nav-link-text" : "nav-link-text"
            }
          >
            {navItem.text}
          </span>
        </a>
      </li>
    );
  });

  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      <ul className="navbar-nav">
        <li className="nav-item nav-item_arrow">
          <div className="nav-link nav-link_arrow">
            <span
              className={
                navbar ? "nav-link-text logo active-logo" : "nav-link-text logo"
              }>

              Edu Gutierrez 
            </span>
            <FontAwesomeIcon
              className={
                navbar
                  ? "nav-link-icon arrow active-arrow"
                  : "nav-link-icon arrow"
              }
              icon={faAngleDoubleRight}
              onClick={handleNavBar}
            />
          </div>
        </li>
        {navItemsList}
      </ul>
    </nav>
  );
}

export default NavBar;
