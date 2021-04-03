import styled from 'styled-components';

export const Container = styled.section``;

export const Name = styled.h2`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  font-size: 4.8rem;
  font-weight: 700;
  color: ${({ theme }) =>
    theme.title === 'dark' ? theme.colors.palette.yellow : theme.colors.text};

  svg {
    margin-right: 1.2rem;

    * {
      fill: ${({ theme }) =>
        theme.title === 'dark'
          ? theme.colors.palette.yellow
          : theme.colors.text};
    }
  }
`;
