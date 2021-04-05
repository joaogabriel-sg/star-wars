import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding: 4rem 8rem;
  overflow-y: auto;

  @media screen and (max-width: 820px) {
    padding: 2rem 4rem;
    overflow-y: visible;
  }
`;
