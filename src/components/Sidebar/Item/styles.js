import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2.4rem;

  transition: transform 0.4s;

  &:nth-child(1) {
    margin-bottom: 3.2rem;
  }

  &:hover {
    transform: scale(1.1, 1.1);
  }

  svg {
    max-width: 16rem;
    * {
      transition: fill 0.4s;
      fill: ${({ theme }) => theme.colors.palette.cloud};
    }
  }

  &:hover,
  &.active {
    svg * {
      fill: ${({ theme }) => theme.colors.palette.yellow};
    }

    h2 {
      color: ${({ theme }) => theme.colors.palette.yellow};
    }
  }

  @media screen and (max-width: 820px) {
    margin-bottom: 0;
    &:nth-child(1) {
      margin-bottom: 0;
    }
  }
`;

export const Title = styled.h2`
  margin-top: 0.4rem;

  color: ${({ theme }) => theme.colors.palette.cloud};
  transition: color 0.4s;

  @media screen and (max-width: 820px) {
    display: none;
  }
`;
