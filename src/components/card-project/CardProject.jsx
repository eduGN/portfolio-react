import React from 'react';
import './CardProject.css'


function CardProject({title, img, bodyText, href}) {
    return (
        <a href={href} target="_blank" rel="noreferrer">
        <div className="card card-container">
          <div className="card card-title">{title}</div>
          <div className="card card-img">
              <img src={img} alt="" />
          </div>
          <div className="card card-body">
               {bodyText}
          </div>
        </div>
        </a>
    )
}

export default CardProject
