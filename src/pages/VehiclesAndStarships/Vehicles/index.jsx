import React, { useContext } from 'react';

import BackButton from '../../../components/BackButton';
import List from '../../../components/List';

import { StarWarsDataContext } from '../../../contexts/StarWarsDataContext';

const Starships = () => {
  const { vehicles } = useContext(StarWarsDataContext);

  return (
    <div>
      <BackButton to="/vehicles-and-starships" />
      <List data={vehicles} type="vehicles" />
    </div>
  );
};

export default Starships;
