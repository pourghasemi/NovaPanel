
import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  loginUser: () => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return context;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => sessionStorage.getItem('isAuthenticated') === 'true',
  );

  const loginUser = () => {
    sessionStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
  };

  const logout = () => {
    sessionStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, loginUser, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
