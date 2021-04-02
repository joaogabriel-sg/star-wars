import React from 'react';

import iconCharacters from '../../../assets/icon-characters.svg';
import iconPlanets from '../../../assets/icon-planets.svg';
import iconMoons from '../../../assets/icon-moons.svg';
import iconStarships from '../../../assets/icon-starships.svg';

import Card from '../../../components/Card';
import SingleInfo from './SingleInfo';
import DoubleInfo from './DoubleInfo';

import { Container } from './styles';

const Infos = () => (
  <Container>
    <Card>
      <SingleInfo title="Characters" quantity={259} icon={iconCharacters} />
    </Card>
    <Card>
      <DoubleInfo
        infos={[
          { title: 'Planets', quantity: 259, icon: iconPlanets },
          { title: 'Moons', quantity: 259, icon: iconMoons },
        ]}
      />
    </Card>
    <Card>
      <SingleInfo title="Spaceships" quantity={259} icon={iconStarships} />
    </Card>
  </Container>
);

export default Infos;
