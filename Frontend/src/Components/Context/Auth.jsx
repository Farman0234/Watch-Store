import React, { createContext, useState, useContext } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component to wrap around the application
export default function AuthProvider({ children }) {
  // Initialize the authUser state with localStorage data if it exists
  const initialAuthUser = localStorage.getItem("token");
  const [authUser, setAuthUser] = useState(initialAuthUser ? initialAuthUser : undefined);

  // Function to update authUser and save it to localStorage
  const setAuthUserAndPersist = (user) => {
    setAuthUser(user);
    if (user) {
      localStorage.setItem("token", user);
    } else {
      localStorage.removeItem("token");
    }
  };

  return (
    <AuthContext.Provider value={[authUser, setAuthUserAndPersist]}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
