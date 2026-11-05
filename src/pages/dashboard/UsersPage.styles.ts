
import styled from 'styled-components';

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 18px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background: ${({ theme }) => theme.colors.accent};
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    opacity: 0.9;
  }
`;

export const Message = styled.div`
  padding: 24px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
`;
