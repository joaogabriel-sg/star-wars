import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100000;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  min-height: 100%;
  padding: 0 1%;
`;

export const Content = styled.div`
  position: relative;

  background: ${({ theme }) => theme.colors.primary};
  width: 100%;
  max-width: 40rem;
  height: 20rem;

  padding: 2rem;
  border-radius: 0.4rem;
`;

export const BtnClose = styled.button`
  background: transparent;

  position: absolute;
  top: 0;
  right: 0;

  svg {
    fill: ${({ theme }) => theme.colors.palette.red};
  }
`;

export const Title = styled.h2`
  margin-bottom: 2.4rem;

  font-size: 2.4rem;
  font-weight: 700;
  font-style: italic;
  text-transform: uppercase;
  color: ${({ theme }) =>
    theme.title === 'dark' ? theme.colors.palette.yellow : theme.colors.text};
`;

export const Setting = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;

  background: transparent;
  width: 100%;
  padding: 0.4rem;
  border-radius: 0.4rem;

  text-align: left;
  color: ${({ theme }) => theme.colors.text};

  transition: all 0.4s;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;
