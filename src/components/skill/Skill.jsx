import React from 'react';
import './Skill.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid, faAngular, faCss3, faHtml5, faJava, faJs, faNodeJs, faPhp, faReact } from '@fortawesome/free-brands-svg-icons';


function Skill({name, percentage, cssPercentage, icon, colorIcon}) {

        switch (icon) {
            case 'html': icon = faHtml5
            break;
            case 'css': icon = faCss3
            break;
            case 'javascript': icon = faJs
            break;
            case 'angular': icon = faAngular
            break;
            case 'react': icon = faReact
            break;
            case 'php': icon = faPhp
            break;
            case 'nodejs': icon = faNodeJs
            break;
            case 'java': icon = faJava
            break;
            case 'kotlin': icon = faAndroid
            break;
        
            default:
                break;
        }
    return (
        <div className="skill">
            <div className="skill-text">
                <span>{name} <FontAwesomeIcon style={{marginLeft:'0.25rem', fontSize: '1rem', color: colorIcon}} icon={icon}/> </span>
                <span>{percentage}</span>
            </div>
            <div className="skill-progress-container">
            <div className="skill-progress" style={{ "--percentage": cssPercentage }}>
              
              </div>
            </div>
            
        </div>
    )
}

export default Skill
