import React from 'react';

import './styles.css'

function NavBar({onlyTitle = false}) {
  return (
    <header className='custom-header'>
      <span className='title'>4 invest</span>
      {!onlyTitle &&
      <nav>
        <a href='#portfolio'>
          Carteiras
          </a> 
          <a href='#new-portfolio'>
          Nova carteira
          </a> 
          <a href='#assets'>
          Ativos
          </a> 
          <a href='#add-assets'>
          Adicionar ativos
          </a> 
          <a href='#calculator'>
          Calculadora
          </a>       
      </nav>
    }
    </header>
  );
}

export default NavBar;
