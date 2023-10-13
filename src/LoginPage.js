import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      // Make an HTTP POST request to your backend for authentication
      const response = await axios.post('http://localhost:9000/users/auth', {
        email: email,
        password: password,
      });

      // Check if the response indicates successful authentication
      console.log(response.status)
      if (response.status === 200) {
        // User is authenticated, navigate to the main app
        navigate('/');
      } else {
        // Display an error message or handle the failed login
        console.log('Authentication failed.');
      }
    } catch (error) {
      // Handle any network or server-related errors
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;