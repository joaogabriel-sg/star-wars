import React, { useContext } from 'react';

import BackButton from '../../../components/BackButton';
import List from '../../../components/List';

import { StarWarsDataContext } from '../../../contexts/StarWarsDataContext';

const Planets = () => {
  const { planets } = useContext(StarWarsDataContext);

  return (
    <div>
      <BackButton to="/planets-and-moons" />
      <List data={planets} type="planets" />
    </div>
  );
};

export default Planets;
