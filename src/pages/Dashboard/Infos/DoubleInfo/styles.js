import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > :nth-child(1) {
    padding-right: 2rem;
    border-right: 0.1rem solid ${({ theme }) => theme.colors.text};
  }

  & > :nth-child(2) {
    padding-left: 2rem;
    border-left: 0.1rem solid ${({ theme }) => theme.colors.text};
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
