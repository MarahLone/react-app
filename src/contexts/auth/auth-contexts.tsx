import React, { createContext, useState, ReactNode } from "react";

// Define the shape of your context state
interface AuthContextType {
  authToken: string | null;
  login: (token: string) => void;
}

// Create the context with a default value
export const AuthContext = createContext<AuthContextType | null>(null);

// Define the type for the AuthProvider's props
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authToken, setAuthToken] = useState<string | null>(null);

  const login = (token: string) => {
    setAuthToken(token);
    // Set the token in a cookie here using document.cookie
    document.cookie = `token=${encodeURIComponent(
      token
    )}; path=/; Secure; SameSite=Strict`;
  };

  return (
    <AuthContext.Provider value={{ authToken, login }}>
      {children}
    </AuthContext.Provider>
  );
};
