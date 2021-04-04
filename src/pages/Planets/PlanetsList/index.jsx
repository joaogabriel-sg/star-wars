import React, { useContext } from 'react';
import List from '../../../components/List';
import { StarWarsDataContext } from '../../../contexts/StarWarsDataContext';

const PlanetsList = () => {
  const { planets } = useContext(StarWarsDataContext);
  return <List data={planets} type="planets" />;
};

export default PlanetsList;
