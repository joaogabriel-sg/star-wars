import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding: 4rem 8rem;
  overflow-y: auto;

  display: grid;
  grid-template-columns: 1fr 1fr 5rem 10rem 1fr;
  grid-template-rows: auto 1fr;
  gap: 4rem;

  grid-template-areas: 'infos infos infos infos infos' 'table table table chart chart';

  @media screen and (max-width: 1180px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto, 3);

    grid-template-areas: 'infos' 'table' 'chart';
  }

  @media screen and (max-width: 820px) {
    display: flex;
    flex-direction: column;

    padding: 2rem 4rem;
    overflow-y: visible;
  }
`;
