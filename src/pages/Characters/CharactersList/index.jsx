import React, { useContext } from 'react';
import Head from '../../../components/Head';
import List from '../../../components/List';
import { StarWarsDataContext } from '../../../contexts/StarWarsDataContext';

const CharactersList = () => {
  const { characters } = useContext(StarWarsDataContext);
  return (
    <>
      <Head title="Characters" />
      <List data={characters} type="characters" />
    </>
  );
};

export default CharactersList;
