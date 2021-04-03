import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { ReactComponent as IconPlanets } from '../../../assets/icon-planets.svg';
import { ReactComponent as IconMoons } from '../../../assets/icon-moons.svg';

import { Container, Item } from './styles';
import Card from '../../../components/Card';

const Menu = () => {
  const { path } = useRouteMatch();

  return (
    <Container>
      <Item to={`${path}/planets`}>
        <Card>
          <IconPlanets /> Planets
        </Card>
      </Item>
      <Item to={`${path}/moons`}>
        <Card>
          <IconMoons /> Moons
        </Card>
      </Item>
    </Container>
  );
};

export default Menu;
