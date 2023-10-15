import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../header/NavBar';
import { useAuth } from '../AuthContext';
import './styles.css'

const base_url = 'https://four-invest-p3xh7jp6wa-uc.a.run.app'

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({isError: false, errorMessage: ''});

  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth()
  

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      // Make an HTTP POST request to your backend for authentication
      const response = await axios.post(`${base_url}/users/auth`, {
        email: email,
        password: password,
      });

      // Check if the response indicates successful authentication
      console.log(response.status)
      if (response.status === 200) {
        // User is authenticated, navigate to the main app
        setError({isError: false, errorMessage: ''})
        setIsLoggedIn({isLogin: true, userId: response.data.id})
        navigate('/');
      } 
    } catch (error) {
      // Handle any network or server-related errors
      setError({isError: true, errorMessage: 'Email ou senha incorretos'})
      setIsLoggedIn({isLogin: false})

      console.error('Error:', error);
    }
  };

  return (
      <>
      <NavBar onlyTitle/>
          <div className='login-page'>

      {error.isError && <alert>{error.errorMessage}</alert>}
      <h2>Login</h2>
      <form className='login-form'>
        <div className='default-input-label'>
          <label className='default-label'>Email:</label>
          <input className='default-input' type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className='default-input-label'>
          <label className='default-label'>Password:</label>
          <input className='default-input' type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button className='login-button' type="button" onClick={handleLogin}>ENTRAR</button>
      </form>
    </div>
    </>
  );
}

export default LoginPage;