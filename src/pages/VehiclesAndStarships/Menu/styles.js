import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Item = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;

  font-size: 2.4rem;
  font-weight: 700;
  font-style: italic;
  line-height: 1;
  color: ${({ theme }) =>
    theme.title === 'dark' ? theme.colors.palette.yellow : theme.colors.text};

  & > div {
    transition: all 0.4s;
  }

  svg {
    margin-right: 1.2rem;
    * {
      transition: all 0.4s;
      fill: ${({ theme }) =>
        theme.title === 'dark'
          ? theme.colors.palette.yellow
          : theme.colors.text};
    }
  }

  &:hover {
    color: ${({ theme }) =>
      theme.title === 'dark' ? theme.colors.text : theme.colors.palette.yellow};

    & > div:hover {
      background: ${({ theme }) =>
        theme.title === 'dark'
          ? theme.colors.palette.yellow
          : theme.colors.text};
    }

    svg * {
      fill: ${({ theme }) =>
        theme.title === 'dark'
          ? theme.colors.text
          : theme.colors.palette.yellow};
    }
  }
`;
