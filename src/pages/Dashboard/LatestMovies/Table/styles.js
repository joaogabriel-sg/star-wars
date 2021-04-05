import styled from 'styled-components';

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.4rem;

  td:last-child {
    text-align: center;
  }

  @media screen and (max-width: 425px) {
    td:nth-child(3),
    td:nth-child(4) {
      display: none;
    }
  }

  @media screen and (max-width: 250px) {
    td:nth-child(2) {
      display: none;
    }
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
