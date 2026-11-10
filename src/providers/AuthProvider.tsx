
import {
  createContext,
  useContext,
  useEffect,
  type ReactNode,
} from 'react';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { logoutUser } from '@/store/slices/authSlice';

interface AuthContextType {
  isAuthenticated: boolean;
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
  const isAuthenticated = useAppSelector(
    (state) => state.auth.isAuthenticated,
  );

  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(logoutUser());
  };

  useEffect(() => {
    const handleUnauthorized = () => {
      dispatch(logoutUser());
    };

    window.addEventListener('auth:logout', handleUnauthorized);

    return () => {
      window.removeEventListener('auth:logout', handleUnauthorized);
    };
  }, [dispatch]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
