import React, { useContext } from 'react';
import { useRouteMatch } from 'react-router-dom';

import { Wrapper, Character } from './styles';

import { StarWarsDataContext } from '../../../contexts/StarWarsDataContext';

const List = () => {
  const { characters } = useContext(StarWarsDataContext);
  const { path } = useRouteMatch();

  return (
    <Wrapper>
      {characters.length > 0 &&
        characters.map((character, index) => (
          <Character to={`${path}/${index >= 16 ? index + 2 : index + 1}`}>
            {character.name}
          </Character>
        ))}
    </Wrapper>
  );
};

export default List;
