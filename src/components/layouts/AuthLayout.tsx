
import type { ReactNode } from 'react';

import { Container } from './AuthLayout.styles';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <Container>{children}</Container>;
};

export default AuthLayout;