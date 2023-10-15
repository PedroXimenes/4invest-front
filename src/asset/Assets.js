import React, { useState } from 'react';
import './styles.css'
import axios from 'axios';

const base_url_prd = 'https://four-invest-portfolio-p3xh7jp6wa-uc.a.run.app'

function Assets() {
  const [portfolioId, setPortfolioId] = useState('');
  const [assets, setAssets] = useState([{ portfolio_id: '', type: '', symbol: '', quantity: '', max_value_limit: '', ideal_percentage: '' }]);
  const [assetCount, setAssetCount] = useState(1);
  const [result, setResult] = useState('')

  const handlePortfolioIdChange = (e) => {
    setPortfolioId(Number(e.target.value));
  };

  const handleAssetChange = (e, index, field) => {
    const updatedAssets = [...assets];
    if(field !== 'type' && field !== 'symbol') {
      updatedAssets[index][field] = Number(e.target.value);
    } else {
      updatedAssets[index][field] = e.target.value;
    }
    updatedAssets[index]['portfolio_id'] = portfolioId
    setAssets(updatedAssets);
  };

  const addAsset = () => {
    setAssets([...assets, { portfolio_id: portfolioId, type: '', symbol: '', quantity: '', max_value_limit: '', ideal_percentage: '' }]);
    setAssetCount(assetCount + 1);
  };

  const removeAsset = (index) => {
    const updatedAssets = [...assets];
    updatedAssets.splice(index, 1);
    setAssets(updatedAssets);
    setAssetCount(assetCount - 1);
  };

  const handleSend = async () => {
    // You can send the 'portfolioId' and 'assets' array to the backend here
    try {
      // Make a request to the backend with userId as a path parameter
      await axios.post(`${base_url_prd}/ativos`, assets);
      setResult('success')
    } catch (error) {
      setResult('error')
      console.error('Error:', error);
    }
  };

  return (
    <div className='assets-section' id='add-assets'>
      {result === 'success' && <alert className='success'>Ativos adicionados</alert>}
      {result === 'error' && <alert>Erro ao adicionar ativos</alert>}
      <h2>Adicionar novos ativos</h2>
      <div className='assets-portfolio'>
        <label className='assets-label'>
          ID da carteira:
          <input className='default-input' type="text" value={portfolioId} onChange={handlePortfolioIdChange} />
        </label>
      </div>
      <hr className='line'/>
      {assets.map((asset, index) => (
        <div className='assets-wrapper' key={index}>
          <h3>Ativo {index + 1}</h3>
          <form className='assets-form'>
            <label className='assets-label'>
              Tipo:
              <input className='default-input' type="text" value={asset.type} onChange={(e) => handleAssetChange(e, index, 'type')} />
            </label>
            <label className='assets-label'>
              Simbolo:
              <input className='default-input' type="text" value={asset.symbol} onChange={(e) => handleAssetChange(e, index, 'symbol')} />
            </label>
            <label className='assets-label'>
              Quantidade:
              <input className='default-input' type="number" value={asset.quantity} onChange={(e) => handleAssetChange(e, index, 'quantity')} />
            </label>
            <label className='assets-label'>
              Valor máximo:
              <input className='default-input' type="number" value={asset.max_value_limit} onChange={(e) => handleAssetChange(e, index, 'max_value_limit')} />
            </label>
            <label className='assets-label'>
              Porcentagem ideal:
              <input className='default-input' type="number" value={asset.ideal_percentage} onChange={(e) => handleAssetChange(e, index, 'ideal_percentage')} />
            </label>
          </form>
          <button className='remove-button' onClick={() => removeAsset(index)}>Remover</button>
        </div>
      ))}
      <hr className='line'/>
      <div className='buttons-wrapper'>
        <button className='add-button' onClick={addAsset}>Adicionar ativo</button>
        <button className='send-button' onClick={handleSend}>Enviar</button>
      </div>
    </div>
  );
}

export default Assets;