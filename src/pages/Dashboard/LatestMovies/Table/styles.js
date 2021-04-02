import styled from 'styled-components';

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.4rem;

  td:last-child {
    text-align: center;
  }
`;

export const THead = styled.thead`
  border-bottom: 0.2rem solid ${({ theme }) => theme.colors.text};
  border-radius: 0.4rem;
  font-weight: 700;

  td {
    padding: 0 0.4rem 0.4rem;
    color: ${({ theme }) =>
      theme.title === 'dark' ? theme.colors.palette.yellow : theme.colors.text};
  }
`;
