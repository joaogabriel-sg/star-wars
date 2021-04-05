import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  background: ${({ theme }) => theme.colors.secondary};
  height: 100vh;
  overflow-y: hidden;
  transition: all 0.4s;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    overflow-y: auto;
  }
`;
