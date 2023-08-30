import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";
import React from 'react';

function Work(props) {
  return (
    <div className="work-container">
            <img src={props.imgsrc} alt="Imagem projeto" />
            <h1 className="project-heading">{props.title}</h1>
            <div className="project-container">
                {WorkCardData.map((val, ind) =>{
                return(
                    <WorkCard
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    />

                )
             })}
                
            </div>
        </div>
  )
}

export default Work;