import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  width: fit-content;
  display: flex;
  align-items: center;

  margin-bottom: 2.4rem;

  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1;
  color: ${({ theme }) => theme.colors.palette.metal};

  svg {
    margin-right: 0.4rem;
  }
`;
