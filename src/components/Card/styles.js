import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2rem;
  border-radius: 0.4rem;

  box-shadow: 0.4rem 0.4rem 0.8rem rgba(0, 0, 0, 0.05);
  transition: background 0.4s;
`;
