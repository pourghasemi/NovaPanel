
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  FiGrid,
  FiUsers,
  FiPackage,
  FiLogOut,
} from 'react-icons/fi';

import { useAuth } from '@/providers/AuthProvider';

import {
  SidebarContainer,
  Logo,
  MenuTitle,
  Menu,
  MenuLink,
  SidebarFooter,
  LogoutButton,
} from './Sidebar.styles';

const Sidebar = () => {
  const { t } = useTranslation();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <SidebarContainer>
      <Logo>NOVA</Logo>

      <MenuTitle>{t('dashboard.menu')}</MenuTitle>

      <Menu>
        <MenuLink to="/dashboard">
          <FiGrid />
          <span>{t('navigation.dashboard')}</span>
        </MenuLink>

        <MenuLink to="/users">
          <FiUsers />
          <span>{t('navigation.users')}</span>
        </MenuLink>

        <MenuLink to="/products">
          <FiPackage />
          <span>{t('navigation.products')}</span>
        </MenuLink>
      </Menu>

      <SidebarFooter>
        <LogoutButton type="button" onClick={handleLogout}>
          <FiLogOut />
          <span>{t('common.logout')}</span>
        </LogoutButton>
      </SidebarFooter>
    </SidebarContainer>
  );
};

export default Sidebar;
