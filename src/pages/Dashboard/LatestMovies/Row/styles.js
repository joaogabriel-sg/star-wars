import styled from 'styled-components';

export const TableRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.palette.cloudDark};

  td {
    padding: 1.2rem 0.4rem 0.4rem;
  }
`;
