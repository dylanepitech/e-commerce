import React, { createContext, useState, useEffect, ReactNode } from "react";

interface AuthContextType {
  authToken: string | null;
  setAuthToken: (token: string | null) => void;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  authToken: null,
  setAuthToken: () => {},
  isLoading: true,
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setAuthToken(token);
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
