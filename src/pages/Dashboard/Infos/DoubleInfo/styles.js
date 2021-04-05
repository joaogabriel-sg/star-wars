import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > :nth-child(1) {
    padding-right: 0;
    &::after {
      content: '';
      background: ${({ theme }) => theme.colors.text};
      width: 0.2rem;
      height: 6.4rem;
      margin-left: 1rem;
      transition: all 0.4s;
    }

    @media screen and (max-width: 820px) {
      padding-right: 2rem;
      &::after {
        display: none;
      }
    }
  }

  & > :nth-child(2) {
    padding-left: 2rem;
  }

  @media screen and (max-width: 820px) {
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    & > :nth-child(1),
    & > :nth-child(2) {
      background: ${({ theme }) => theme.colors.primary};
      padding: 2rem;
      border: 0;
      border-radius: 0.4rem;
      box-shadow: 0.4rem 0.4rem 0.8rem rgba(0, 0, 0, 0.05);
    }
  }
`;

export const Message = styled.p`
  font-size: 1.8rem;
  text-align: center;

  &:nth-child(1) {
    padding-right: 0;
    border-right: 0;
  }
`;
