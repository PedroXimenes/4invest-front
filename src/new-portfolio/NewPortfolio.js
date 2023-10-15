import React, { useState } from 'react';
import axios from 'axios';
import './styles.css'
import { useAuth } from '../AuthContext';
const base_url_prd = 'https://four-invest-portfolio-p3xh7jp6wa-uc.a.run.app'


function NewPortfolio() {
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
    <div className='check-page' id='new-portfolio'>
      <h2>Nova carteira</h2>
      <form className='check-form' onSubmit={handleSubmit}> 
        <div className='portfolio-div'>
        <label className='assets-label'>
          Nome da carteira:
          <input className='default-input' type="text" value={name} onChange={handleNameChange} />
        </label>
        <button className='send-row-button' type="submit">criar</button>
        </div>
      </form>
    </div>
  );
}

export default NewPortfolio;
