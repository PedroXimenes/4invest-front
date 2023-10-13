import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // You can implement a more robust authentication check here (e.g., checking tokens).
  useEffect(() => {
    // Check if the user is authenticated (for example, by checking tokens).
    // Update isLoggedIn accordingly.
    // For now, let's set it to true for demonstration purposes.
    setIsLoggedIn(true);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}