import { Link } from "react-router-dom";
import "./NavBarStyle.css";
import { FaBars,FaTimes } from 'react-icons/fa';


import React, {useState} from 'react'

const NavBar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [color, setColor] = useState(false);
    const changeCoolor =() => {
        if (window.scrollY >=1) {
            setColor(true);
        }else{
            setColor(false);

        }
    };
    window.addEventListener("scroll", changeCoolor);
    



    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to={"/"}>
                <h1>Portfólio</h1>
            </Link>
            <ul className={click ? "nav-menu active" :
            "nav-menu"}> 
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/sobre">Sobre mim</Link>
                </li>
                <li>
                    <Link to="/projeto">Projeto</Link>
                </li>
                <li>
                    <Link to="/contato">Contato</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ?
                 (<FaTimes size={20} color="#fff" />) :
                 (<FaBars size={20} style={{ color: "#fff" }} />
                )}


            </div>
        </div>
    );
}

export default NavBar;
