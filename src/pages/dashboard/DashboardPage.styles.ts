import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
`;

export const StatCard = styled(Link)`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  column-gap: 16px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.card};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  transition: transform 150ms ease, box-shadow 150ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(31, 45, 80, 0.12);
  }
`;

export const StatIcon = styled.div`
  grid-row: span 2;
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 22px;
`;

export const StatValue = styled.strong`
  font-size: 26px;
  line-height: 1.2;
`;

export const StatLabel = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
`;
