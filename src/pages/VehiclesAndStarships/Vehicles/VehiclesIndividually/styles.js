import styled from 'styled-components';

export const Infos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  & > div {
    flex-direction: column;
  }

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
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
