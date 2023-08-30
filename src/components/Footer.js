import "./FooterStyles.css";
import React from 'react';
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "1rem" }} />
                        <div>
                            <p>Rua: Adolfo Siqueira, 736</p>
                            <p>Bairro: São João</p>
                            <p>Conselheiro Lafaiete, Minas Gerais</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone
                                size={20}
                                style={{
                                    color: "#fff",
                                    marginRight: "1rem"
                                }}
                            />
                            (31) 9-9686-4420
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk
                                size={20}
                                style={{
                                    color: "#fff",
                                    marginRight: "1rem"
                                }}
                            />
                            wallacetadeu29@gmail.com
                        </h4>
                    </div>
                </div>
                <div className="right"></div>
                <div className="about">
                <h4>Sobre Mim</h4>
                <p>Desenvolvedor front-end apaixonado por criar
                    experiências excepcionais na web. 
                    Ansioso para enfrentar desafios
                    empolgantes e colaborar em projetos inovadores!</p>

            </div>
            </div>
            <div className="social">
            <div className="social-icons">
                <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </div>
            </div>

        </div>
    )
}

export default Footer;
