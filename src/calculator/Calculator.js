import React, { useState } from 'react';
import axios from 'axios';
import './styles.css'
import { useAuth } from '../AuthContext';
const base_url_prd = 'https://four-invest-portfolio-p3xh7jp6wa-uc.a.run.app'


function Calculator() {
  const [name, setName] = useState('');
  const { isLoggedIn } = useAuth();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userIdAsInt = parseInt(isLoggedIn?.userId, 10);
    try {
        const response = await axios.post(`${base_url_prd}/carteiras`, { name, user_id: userIdAsInt });
        console.log('Response from the server:', response.data);
      } catch (error) {
        console.error('Error:', error);
      }
  };

  return (
    <div className='calculator-page' id='calculator'>
      <h2>Calculadora de aportes</h2>
      <form className='calculator-form' onSubmit={handleSubmit}> 
        <label className='calculator-label'>
          Valor total a ser investido:
          <input className='calculator-input' type="number" value={name} onChange={handleNameChange} />
        </label>
        <hr className='line'/>
        <label className='calculator-label'>
          Carteira:
          <input className='calculator-input' type="text" value={name} onChange={handleNameChange} />
        </label>
        <label className='calculator-label'>
          Valor a ser investido na carteira:
          <input className='calculator-input' type="number" value={name} onChange={handleNameChange} />
        </label>
        <button className='calculator-button' type="submit">criar</button>
      </form>
    </div>
  );
}

export default Calculator;
