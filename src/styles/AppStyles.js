import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  background: ${({ theme }) => theme.colors.secondary};
  min-height: 100vh;
`;
