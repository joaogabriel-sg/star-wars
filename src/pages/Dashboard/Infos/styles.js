import styled from 'styled-components';

export const Container = styled.div`
  grid-area: infos;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 2rem;

  & > div:not(:nth-child(2)) {
    flex: 1;
    gap: 1.2rem;
  }

  & > div:nth-child(2) {
    flex: 2;
  }
`;
