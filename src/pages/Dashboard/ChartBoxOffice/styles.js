import styled from 'styled-components';

export const Container = styled.div`
  grid-area: chart;

  & > div {
    flex-direction: column;
    justify-content: flex-start;
    padding: 4rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1;
`;

export const ChartContainer = styled.div``;
