import React, { useState } from 'react';
import axios from 'axios';
import './styles.css'

const base_url_prd = 'https://four-invest-portfolio-p3xh7jp6wa-uc.a.run.app'

function AssetsByPortfolio() {
  const [portfolioId, setPortfolioId] = useState('');
  const [result, setResult] = useState(null);

  const handlePortfolioIdChange = (e) => {
    setPortfolioId(e.target.value);
  };


  const handleRequest = async () => {
    try {
      // Make a request to the backend with userId as a path parameter
      const response = await axios.get(`${base_url_prd}/ativos/carteiras/${portfolioId}`);
      setResult(response.data);
    } catch (error) {
      setResult([])
      console.error('Error:', error);
    }
  };


  return (
    <div className='portfolio-section' id='assets'>
      <h2>Ativos por carteira</h2>
      <div className='portfolio-div'>
        <label className='assets-label'>
          ID da Carteira:
          <input className='default-input' type="text" value={portfolioId} onChange={handlePortfolioIdChange} />
        </label>
        <button className='send-row-button' onClick={handleRequest}>Enviar</button>
      </div>
      <hr className='line'/>
      {result && result.length > 0 && (
        <div>
          <table>
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Símbolo</th>
                <th>Quantidade</th>
              </tr>
            </thead>
            <tbody>
              {result.map((item) => (
                <tr key={item.ID}>
                  <td>{item.type}</td>
                  <td>{item.symbol}</td>
                  <td>{item.quantity}</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {result && result.length === 0 && <p>Nenhum resultado encontrado.</p>}
    </div>
  );
}

export default AssetsByPortfolio;