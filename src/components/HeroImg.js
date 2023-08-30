import "./HeroImgStyles.css";
import IntroImg from "../assets/foto-perfil.jpeg";

import React from "react";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg"/>
      </div>
      <div className="content">
        <p>Olá, Sou Wallace Tadeu.</p>
        <h1>Desenvolvedor Front-end</h1>
        <div>
          <Link to="/projeto" className="btn">Projeto</Link>
          <Link to="/contato" className="btn btn-light">Contato</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
 

