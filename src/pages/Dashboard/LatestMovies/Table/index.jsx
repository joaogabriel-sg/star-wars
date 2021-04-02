import React, { useContext } from 'react';

import Row from '../Row';

import { TableContainer, THead } from './styles';

import { StarWarsDataContext } from '../../../../contexts/StarWarsDataContext';

const Table = () => {
  const { movies } = useContext(StarWarsDataContext);

  return (
    <TableContainer>
      <THead>
        <tr>
          <td>Title</td>
          <td>Release</td>
          <td>Director</td>
          <td>Episode</td>
        </tr>
      </THead>
      <tbody>
        {movies.length > 0 &&
          movies.map(
            ({
              title,
              release_date: release,
              director,
              episode_id: episodeId,
            }) => (
              <Row
                key={title}
                title={title}
                release={release}
                director={director}
                episodeId={episodeId}
              />
            ),
          )}
      </tbody>
    </TableContainer>
  );
};

export default Table;
