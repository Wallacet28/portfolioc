import { Link } from "react-router-dom";
import "./SobreContatoStyles.css";
import React from 'react';
import ImgHCs from "../assets/foto-calculadora.png";
import ImgRec from "../assets/foto-x-mem.png";


const SobreContato = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Quem sou eu?</h1>
            <p>Eu sou um desenvolvedor front-end. Eu crio sites respnsivos e seguros para meus clientes. </p>
            <Link to="/contato">
                <button className="btn">Contato</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={ImgHCs} className="img" alt="true" />
                </div> 
              
                <div className="img-stack buttom">
                    <img src={ImgRec} className="img" alt="true" />
                </div>


            </div>

        </div>
    </div>
  )
}

export default SobreContato;