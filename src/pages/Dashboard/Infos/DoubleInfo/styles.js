import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > :nth-child(1) {
    transition: border-color 0.4s;
    padding-right: 2rem;
    border-right: 0.1rem solid ${({ theme }) => theme.colors.text};
  }

  & > :nth-child(2) {
    transition: border-color 0.4s;
    padding-left: 2rem;
    border-left: 0.1rem solid ${({ theme }) => theme.colors.text};
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
