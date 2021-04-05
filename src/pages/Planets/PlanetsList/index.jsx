import React, { useContext } from 'react';
import Head from '../../../components/Head';
import List from '../../../components/List';
import { StarWarsDataContext } from '../../../contexts/StarWarsDataContext';

const PlanetsList = () => {
  const { planets } = useContext(StarWarsDataContext);
  return (
    <>
      <Head title="Planets" />
      <List data={planets} type="planets" />
    </>
  );
};

export default PlanetsList;
