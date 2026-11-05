
import styled from 'styled-components';

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 14px;

  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};

  font-size: 13px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  svg {
    font-size: 17px;
  }
`;
