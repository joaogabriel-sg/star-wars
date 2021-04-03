import styled from 'styled-components';

export const Container = styled.div`
  & > div {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Name = styled.h3`
  margin-bottom: 1.6rem;

  font-size: 2.3rem;
  font-weight: 700;
  line-height: 1;
`;

export const Data = styled.p`
  font-size: 1.6rem;
  font-weight: 700;

  & + p {
    margin-top: 1.2rem;
  }

  span {
    font-weight: 400;
  }
`;
