
import styled from 'styled-components';

export const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

export const MainContent = styled.main`
  flex: 1;
  min-width: 0;
  padding: 28px 32px;

  @media (max-width: 768px) {
    padding: 20px 14px;
  }
`;

export const PageContent = styled.div`
  width: 100%;
`;
