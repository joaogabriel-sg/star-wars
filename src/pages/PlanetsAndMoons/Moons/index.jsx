import React, { useContext } from 'react';

import BackButton from '../../../components/BackButton';
import List from '../../../components/List';

import { StarWarsDataContext } from '../../../contexts/StarWarsDataContext';

const Moons = () => {
  const { starships } = useContext(StarWarsDataContext);

  return (
    <div>
      <BackButton to="/planets-and-moons" />
      <List data={starships} type="starships" />
    </div>
  );
};

export default Moons;
