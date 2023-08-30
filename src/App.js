import React from 'react';
import "./index.css";
import Home from './routes/Home';
import Contato from './routes/Contato';
import Project from './routes/Project';
import { Routes, Route } from 'react-router-dom';
import Sobre from './routes/Sobre';

function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/sobre" element={<Sobre/>}/>
    <Route path="/projeto" element={<Project />}/>
    <Route path="/contato" element={<Contato />}/>    
   </Routes>
   </>
  );
}
export default App;
