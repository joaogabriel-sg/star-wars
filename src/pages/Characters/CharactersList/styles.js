import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 2rem;
`;

export const Character = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.6rem 0.4rem;
  border-radius: 0.4rem;

  font-size: 1.6rem;
  font-weight: 700;

  transition: all 0.2s linear;

  &:hover {
    background: ${({ theme }) =>
      theme.title === 'dark' ? theme.colors.palette.yellow : theme.colors.text};

    color: ${({ theme }) =>
      theme.title === 'dark'
        ? theme.colors.primary
        : theme.colors.palette.yellow};
  }
`;
