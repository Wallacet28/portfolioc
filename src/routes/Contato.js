import React from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import Form from "../components/Form";
const Contato = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="CONTATO" text="Para entrar em contato, envie um e-mail para wallacetadeu29@gmail.com"/>
      <Form/>
      <Footer />
    </div>
  );
}
export default Contato;
