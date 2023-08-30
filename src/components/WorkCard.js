import "./WorkCardStyles.css";
import { NavLink } from "react-router-dom";
import React from 'react';

function WorkCard(props) {
  return (
      <div className="project-card">
          <img src={props.imgsrc} alt="Imagem projeto" />
          <h2 className="project-title">{props.title}</h2>
          <div className="pro-details">              
                      <p>{props.text}</p>
                      <div className="pro-btns">
                          <NavLink to={props.view} className="btn">Ver vídeo</NavLink>
                          <NavLink to="url.com" className="btn">Ver github</NavLink>
                      </div>
                  </div>
              </div>
        
  )
}

export default WorkCard;
