import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import LoginPage from './login/LoginPage';
import { useAuth } from './AuthContext';

const AppRouter = () => {
    const { isLoggedIn } = useAuth();
    // const isLoggedIn = {isLogin: true}
  
    return (
      <Router>
        <Routes>
          <Route path="/login" element={isLoggedIn.isLogin ? <App /> : <LoginPage />} />
          <Route path="/" element={isLoggedIn.isLogin ? <App /> : <LoginPage />} />
        </Routes>
      </Router>
    );
  };
  
  export default AppRouter;