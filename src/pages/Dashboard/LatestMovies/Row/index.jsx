import React from 'react';
import PropTypes from 'prop-types';

import { TableRow } from './styles';

const Row = ({ title, episodeId, director, release }) => {
  const date = new Date(release);
  const day = `${date.getUTCDate()}`.padStart(2, '00');
  const month = `${date.getUTCMonth()}`.padStart(2, '00');
  const year = date.getUTCFullYear();
  const releaseDate = `${day}/${month}/${year}`;

  return (
    <TableRow>
      <td>{title}</td>
      <td>{releaseDate}</td>
      <td>{director}</td>
      <td>{episodeId}</td>
    </TableRow>
  );
};

Row.propTypes = {
  title: PropTypes.string.isRequired,
  episodeId: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
};

export default Row;
