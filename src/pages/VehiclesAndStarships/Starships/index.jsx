import React, { useContext } from 'react';

import BackButton from '../../../components/BackButton';
import List from '../../../components/List';

import { StarWarsDataContext } from '../../../contexts/StarWarsDataContext';

const Starships = () => {
  const { starships } = useContext(StarWarsDataContext);

  return (
    <div>
      <BackButton to="/vehicles-and-starships" />
      <List data={starships} type="starships" />
    </div>
  );
};

export default Starships;
