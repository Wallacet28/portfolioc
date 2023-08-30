import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SobreMim from '../components/SobreMim';
import HeroImg2 from '../components/HeroImg2';
import SobreContato from '../components/SobreContato';

const Sobre = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 heading="Sobre Mim" text="Desenvolvedor front-end apaixonado por transformar conceitos criativos em experiências interativas e atraentes na web. Com proficiência em React, JavaScript, HTML5 e CSS3, minha jornada começou no interior e se expandiu para o mundo do desenvolvimento de web moderno." />
      <SobreMim/>
      <SobreContato/>
      <Footer/>

    </div>
  )
}

export default Sobre;