import React, { useContext } from 'react';

import iconCharacters from '../../../assets/icon-characters.svg';
import iconPlanets from '../../../assets/icon-planets.svg';
import iconMoons from '../../../assets/icon-moons.svg';
import iconSpaceships from '../../../assets/icon-spaceships.svg';

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
        />
      </Card>
      <Card>
        <DoubleInfo
          infos={[
            {
              title: 'Planets',
              quantity: planets.length || 0,
              icon: iconPlanets,
            },
            {
              title: 'Moons',
              quantity: starships.length || 0,
              icon: iconMoons,
            },
          ]}
        />
      </Card>
      <Card>
        <SingleInfo
          title="Spaceships"
          quantity={vehicles.length || 0}
          icon={iconSpaceships}
        />
      </Card>
    </Container>
  );
};

export default Infos;
