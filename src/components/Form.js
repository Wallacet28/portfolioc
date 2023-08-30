import "./FormStyles.css";

import React from 'react'

const Form = () => {
  return (
    <div className="form">  
    <form>
        <label>Nome</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Descrição</label>
        <input type="text"></input>
        <label>Mensagem</label>
        <textarea rows="6" placeholder="Escreva a mensagem que deseja enviar para Wallace"/>
        <button className="btn">Enviar</button>
    </form>

    </div>
  )
}

export default Form;