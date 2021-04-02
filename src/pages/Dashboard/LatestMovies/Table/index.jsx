import React from 'react';

import Row from '../Row';

import { TableContainer, THead } from './styles';

const movieDatas = {
  count: 6,
  next: null,
  previous: null,
  results: [
    {
      title: 'A New Hope',
      episode_id: 4,
      director: 'George Lucas',
      release_date: '1977-05-25',
    },
    {
      title: 'The Empire Strikes Back',
      episode_id: 5,
      director: 'Irvin Kershner',
      release_date: '1980-05-17',
    },
    {
      title: 'Return of the Jedi',
      episode_id: 6,
      director: 'Richard Marquand',
      release_date: '1983-05-25',
    },
    {
      title: 'The Phantom Menace',
      episode_id: 1,
      director: 'George Lucas',
      release_date: '1999-05-19',
    },
    {
      title: 'Attack of the Clones',
      episode_id: 2,
      director: 'George Lucas',
      release_date: '2002-05-16',
    },
    {
      title: 'Revenge of the Sith',
      episode_id: 3,
      director: 'George Lucas',
      release_date: '2005-05-19',
    },
  ],
};

const Table = () => (
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
      {movieDatas.results.length > 0 &&
        movieDatas.results.map(
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

export default Table;
