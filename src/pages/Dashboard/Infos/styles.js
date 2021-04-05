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

  @media screen and (max-width: 1180px) {
    grid-template-columns: 1fr 1fr;

    & > div:nth-child(1) {
      order: 1;
    }
    & > div:nth-child(2) {
      order: 3;
      grid-column: 1 / -1;
    }
    & > div:nth-child(3) {
      order: 2;
    }

    @media screen and (max-width: 820px) {
      grid-template-columns: 1fr;

      & > div:nth-child(2) {
        background: transparent;
        box-shadow: none;
        padding: 0;
      }
    }
  }
`;
