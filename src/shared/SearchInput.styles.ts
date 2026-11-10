
import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  min-width: 220px;
  padding: 0 14px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background: ${({ theme }) => theme.colors.input};
  color: ${({ theme }) => theme.colors.textSecondary};

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SearchField = styled.input`
  width: 100%;
  padding: 12px 0;
  border: none;
  outline: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;
