
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SidebarContainer = styled.aside`
  width: 250px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 28px 18px;
  background: ${({ theme }) => theme.colors.sidebar};
  color: #fff;

  @media (max-width: 768px) {
    width: 72px;
    padding: 24px 10px;
  }
`;

export const Logo = styled.div`
  font-size: 26px;
  font-weight: 800;
  padding: 0 14px;
  margin-bottom: 48px;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    padding: 0;
    text-align: center;
    font-size: 18px;
  }
`;

export const MenuTitle = styled.p`
  padding: 0 14px;
  margin-bottom: 14px;
  color: #9aa9c1;
  font-size: 12px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MenuLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 13px 14px;
  border-radius: 10px;
  color: #b8c3d5;
  text-decoration: none;
  font-size: 14px;

  &.active {
    color: #fff;
    background: rgba(255, 255, 255, 0.13);
  }

  svg {
    flex-shrink: 0;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    justify-content: center;
    padding: 13px 8px;

    span {
      display: none;
    }
  }
`;

export const SidebarFooter = styled.div`
  margin-top: auto;
`;

export const LogoutButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 13px 14px;
  border: none;
  border-radius: 10px;
  background: transparent;
  color: #ffb4a9;
  font: inherit;
  font-size: 14px;
  cursor: pointer;
  text-align: start;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  svg {
    flex-shrink: 0;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    justify-content: center;
    padding: 13px 8px;

    span {
      display: none;
    }
  }
`;
