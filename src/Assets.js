import React, { useState } from 'react';

function Assets() {
  const [portfolioId, setPortfolioId] = useState('');
  const [assets, setAssets] = useState([{ type: '', symbol: '', quantity: '', max_value_limit: '', ideal_percentage: '' }]);
  const [assetCount, setAssetCount] = useState(1);

  const handlePortfolioIdChange = (e) => {
    setPortfolioId(e.target.value);
  };

  const handleAssetChange = (e, index, field) => {
    const updatedAssets = [...assets];
    updatedAssets[index][field] = e.target.value;
    setAssets(updatedAssets);
  };

  const addAsset = () => {
    setAssets([...assets, { type: '', symbol: '', quantity: '', max_value_limit: '', ideal_percentage: '' }]);
    setAssetCount(assetCount + 1);
  };

  const removeAsset = (index) => {
    const updatedAssets = [...assets];
    updatedAssets.splice(index, 1);
    setAssets(updatedAssets);
    setAssetCount(assetCount - 1);
  };

  const handleSend = () => {
    // You can send the 'portfolioId' and 'assets' array to the backend here
    console.log('Portfolio ID:', portfolioId);
    console.log('Assets:', assets);
  };

  return (
    <div>
      <h2>Assets</h2>
      <div>
        <label>
          Portfolio ID:
          <input type="text" value={portfolioId} onChange={handlePortfolioIdChange} />
        </label>
      </div>
      {assets.map((asset, index) => (
        <div key={index}>
          <h3>Asset {index + 1}</h3>
          <label>
            Type:
            <input type="text" value={asset.type} onChange={(e) => handleAssetChange(e, index, 'type')} />
          </label>
          <label>
            Symbol:
            <input type="text" value={asset.symbol} onChange={(e) => handleAssetChange(e, index, 'symbol')} />
          </label>
          <label>
            Quantity:
            <input type="text" value={asset.quantity} onChange={(e) => handleAssetChange(e, index, 'quantity')} />
          </label>
          <label>
            Max Value Limit:
            <input type="text" value={asset.max_value_limit} onChange={(e) => handleAssetChange(e, index, 'max_value_limit')} />
          </label>
          <label>
            Ideal Percentage:
            <input type="text" value={asset.ideal_percentage} onChange={(e) => handleAssetChange(e, index, 'ideal_percentage')} />
          </label>
          <button onClick={() => removeAsset(index)}>Remove</button>
        </div>
      ))}
      <button onClick={addAsset}>Add Asset</button>
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default Assets;