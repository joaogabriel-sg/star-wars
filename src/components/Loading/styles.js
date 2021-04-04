import styled, { keyframes } from 'styled-components';

const dotAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(2rem);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(-2rem);
  }
  100% {
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Loader = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Dot = styled.div`
  background: ${({ theme }) => theme.colors.palette.yellow};
  width: 2rem;
  height: 2rem;

  border-radius: 50%;
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.1);

  animation: ${dotAnimation} 0.8s infinite linear;

  &:nth-child(1) {
    animation-delay: 0;
  }

  &:nth-child(2) {
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;
