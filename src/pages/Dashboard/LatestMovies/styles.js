import styled from 'styled-components';

export const Container = styled.div`
  grid-area: table;

  & > div {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 4rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1;
`;

export const Subtitle = styled.h3`
  margin: 0.8rem 0 1.2rem;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1;
`;
