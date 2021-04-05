import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;

  & > div {
    flex-direction: column;
  }

  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    overflow-y: visible;
  }
`;

export const Info = styled.span`
  margin-top: 0.8rem;

  font-size: 1.8rem;
  font-weight: 700;
  font-style: italic;
  text-align: center;
  text-transform: capitalize;
`;
