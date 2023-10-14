import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css'
import { useAuth } from '../AuthContext';

const base_url_dev = 'http://localhost:9000'
const base_url_prd = 'https://four-invest-portfolio-p3xh7jp6wa-uc.a.run.app'

function UserIdSection() {
  const [result, setResult] = useState(null);
  const { isLoggedIn } = useAuth();

const handlePortfolio= useCallback(() => {
    if(!!isLoggedIn?.userId){
      axios.get(`${base_url_prd}/carteiras/usuarios/${isLoggedIn?.userId}`)
      .then(response => setResult(response.data))
      .catch(() => setResult([]))
    }
  },[isLoggedIn])

  useEffect(() => {
    handlePortfolio()
  },[handlePortfolio])



  return (
    <div className='user-id-section'>
      <h2>Minhas carteiras</h2>
      {result && result.length > 0 && (
        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
              </tr>
            </thead>
            <tbody>
              {result.map((item) => (
                <tr key={item.ID}>
                  <td>{item.ID}</td>
                  <td>{item.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {result && result.length === 0 && <p>Nenhum resultado encontrado.</p>}
      <button className='refresh-button' onClick={handlePortfolio}>Atualizar</button>
    </div>
  );
}

export default UserIdSection;