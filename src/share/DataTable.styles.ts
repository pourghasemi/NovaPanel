
import styled from 'styled-components';

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  background: ${({ theme }) => theme.colors.surface};
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: start;
  white-space: nowrap;

  th,
  td {
    padding: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    font-size: 14px;
  }

  th {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 600;
    background: ${({ theme }) => theme.colors.background};
  }

  td {
    color: ${({ theme }) => theme.colors.text};
  }

  tbody tr:last-child td {
    border-bottom: none;
  }
`;

export const EmptyMessage = styled.div`
  padding: 32px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const TableFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  padding: 16px 0;
`;

export const PageSizeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 13px;
`;

export const PageSizeSelect = styled.select`
  padding: 7px 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;
