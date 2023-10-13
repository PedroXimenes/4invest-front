import React, { useState } from 'react';
import axios from 'axios';


function Form() {
  const [name, setName] = useState('');
  const [user_id, setuserID] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleuserIDChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    //const value = parseInt(e.target.value, 10);
    setuserID(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userIdAsInt = parseInt(user_id, 10);
    try {
        const response = await axios.post('http://localhost:9000/carteiras', { name, user_id: userIdAsInt });
        console.log('Response from the server:', response.data);
      } catch (error) {
        console.error('Error:', error);
      }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Usuário:
          <input type="text" value={user_id} onChange={handleuserIDChange} />
        </label>
        <label>
          Nome da carteira:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
