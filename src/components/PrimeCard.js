import React from 'react';
import { Link } from "react-router-dom";
import './PrimeCardStyle.css';

function PrimeCard() {
  return (
    <div className="primeiro">
      <div className="card-container">
        <div className="card">
          <h3>-Titulo Card-</h3>
          <span className="bar"></span>
          <p className="btc">BTC Text</p>
          <Link to="/">Ver Video</Link>
        </div>
      </div>
    </div>
  );
}

export default PrimeCard;
