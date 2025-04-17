import React from 'react';
import './Cartao.css';
import Marvel from '../assets/Marvel.png';
import Instagram from '../assets/instagram.webp';
import Linkedin from '../assets/linkedin.webp';
import Site from '../assets/logo-marvel-2048.png';

const Cartao = () => {
  return (
    <div className="cartao">
      <div className="cartao-conteudo">
        <div className="cartao-header">
          <h1>Marvel Studios</h1>
        </div>
        <div className="cartao-body">
            <img src={Marvel} alt="" id='logo' />
          <p>Nome: Tony Stark</p>
          <p>Cargo: CEO, Stark Industries</p>
          <p>Email: tony.stark@starkindustries.com</p>
          <p>Telefone: (555) 1234-5678</p>
          <div className="links">
            <a href="https://www.instagram.com/marvelstudios" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="" id='insta' className='icon'/>
            </a>
            <a href="https://www.linkedin.com/company/marvelstudios" target="_blank" rel="noopener noreferrer">
            <img src={Linkedin} alt="" id='link' className='icon' />
            </a>
            <a href="https://www.marvel.com" target="_blank" rel="noopener noreferrer">
            <img src={Site} alt="" id='site' className='icon' />
            </a>
          </div>
        </div>
        <div className="cartao-footer">
          <button className="botao-marvel">Visite Nosso Site</button>
        </div>
      </div>
    </div>
  );
};

export default Cartao;
