import styled from 'styled-components';

export const ChartContainer = styled.div`
  grid-area: chart;

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
