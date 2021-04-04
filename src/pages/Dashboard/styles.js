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
`;
