import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import LoginPage from './LoginPage';
import { useAuth } from './AuthContext';

const AppRouter = () => {
    const { isLoggedIn } = useAuth();
  
    return (
      <Router>
        <Routes>
          <Route path="/login" element={isLoggedIn ? <App /> : <LoginPage />} />
          <Route path="/" element={isLoggedIn ? <App /> : <LoginPage />} />
        </Routes>
      </Router>
    );
  };
  
  export default AppRouter;