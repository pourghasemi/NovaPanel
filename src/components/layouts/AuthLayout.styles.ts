
import styled from 'styled-components';

export const Container = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: ${({ theme }) => theme.colors.background};
`;
