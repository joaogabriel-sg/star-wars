import styled from 'styled-components';

export const Title = styled.h1`
  position: relative;
  margin-bottom: 3.2rem;

  display: flex;
  align-items: center;

  font-size: 3.2rem;
  font-weight: 700;
  font-style: italic;
  line-height: 1;
  color: ${({ theme }) =>
    theme.title === 'dark' ? theme.colors.palette.yellow : theme.colors.text};

  &:after {
    content: '';
    display: inline-block;

    background: ${({ theme }) =>
      theme.title === 'dark' ? theme.colors.palette.yellow : theme.colors.text};
    width: 4rem;
    height: 0.4rem;
    border-radius: 0.4rem;
    margin-left: 1.2rem;
  }
`;
