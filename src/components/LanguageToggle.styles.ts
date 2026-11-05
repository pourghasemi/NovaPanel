
import styled from 'styled-components';

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 10px 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};

  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};

  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.background};
  }

  svg {
    font-size: 18px;
  }
`;
