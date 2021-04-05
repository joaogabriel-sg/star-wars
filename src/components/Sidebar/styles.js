import styled from 'styled-components';

export const Container = styled.aside`
  background: ${({ theme }) =>
    theme.title === 'dark' ? theme.colors.primary : theme.colors.text};

  min-width: 24rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  flex: 1;

  @media screen and (max-width: 820px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 100%;
    margin: 3.2rem 0;

    & > :nth-child(2) {
      order: 2;
    }
  }
`;

export const Settings = styled.button`
  background: transparent;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.palette.cloud};

  svg {
    margin-right: 0.4rem;
    transition: transform 1.2s;
  }

  &:hover {
    svg {
      transform: rotate(360deg);
    }
  }
`;
