
import AuthLayout from '@/components/layouts/AuthLayout';
import LoginForm from '@/components/login/LoginForm';
import LanguageToggle from '@/components/LanguageToggle';
import ThemeToggle from '@/components/ThemeToggle';

import { PageHeader } from './LoginPage.styles';

const LoginPage = () => {
  return (
    <AuthLayout>
      <PageHeader>
        <LanguageToggle />
        <ThemeToggle />
      </PageHeader>

      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
