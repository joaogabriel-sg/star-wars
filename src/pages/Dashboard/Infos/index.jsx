import React, { useContext } from 'react';

import iconCharacters from '../../../assets/icon-characters.svg';
import iconPlanets from '../../../assets/icon-planets.svg';
import iconStarships from '../../../assets/icon-starships.svg';
import iconVehicles from '../../../assets/icon-vehicles.svg';

import Card from '../../../components/Card';
import SingleInfo from './SingleInfo';
import DoubleInfo from './DoubleInfo';

import { Container } from './styles';

import { StarWarsDataContext } from '../../../contexts/StarWarsDataContext';

const Infos = () => {
  const { characters, planets, starships, vehicles } = useContext(
    StarWarsDataContext,
  );

  return (
    <Container>
      <Card>
        <SingleInfo
          title="Characters"
          quantity={characters.length || 0}
          icon={iconCharacters}
          to="/characters"
        />
      </Card>
      <Card>
        <DoubleInfo
          infos={[
            {
              title: 'Vehicles',
              quantity: vehicles.length || 0,
              icon: iconVehicles,
              to: '/vehicles-and-starships/vehicles',
            },
            {
              title: 'Starships',
              quantity: starships.length || 0,
              icon: iconStarships,
              to: '/vehicles-and-starships/starships',
            },
          ]}
        />
      </Card>
      <Card>
        <SingleInfo
          title="Planets"
          quantity={planets.length || 0}
          icon={iconPlanets}
          to="/planets"
        />
      </Card>
    </Container>
  );
};

export default Infos;
