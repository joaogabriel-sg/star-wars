import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
`;

export const Quantity = styled.h3`
  font-size: 4rem;
  font-weight: 700;
  font-style: italic;
  color: ${({ theme }) => theme.colors.palette.yellow};
`;

export const Icon = styled.img`
  width: 5.2rem;
  height: auto;
`;
