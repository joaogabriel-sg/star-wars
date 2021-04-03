import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;

  & > div {
    flex-direction: column;
  }
`;

export const Info = styled.div`
  margin-top: 0.8rem;

  font-size: 1.8rem;
  font-weight: 700;
  font-style: italic;
  text-transform: capitalize;
`;
