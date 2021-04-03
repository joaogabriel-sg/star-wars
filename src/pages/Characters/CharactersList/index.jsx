import React, { useContext } from 'react';
import List from '../../../components/List';
import { StarWarsDataContext } from '../../../contexts/StarWarsDataContext';

const CharactersList = () => {
  const { characters } = useContext(StarWarsDataContext);
  return <List data={characters} type="characters" />;
};

export default CharactersList;
