import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { ReactComponent as IconVehicles } from '../../../assets/icon-vehicles.svg';
import { ReactComponent as IconStarships } from '../../../assets/icon-starships.svg';

import { Container, Item } from './styles';
import Card from '../../../components/Card';
import Head from '../../../components/Head';

const Menu = () => {
  const { path } = useRouteMatch();

  return (
    <Container>
      <Head title="Vehicles and Starships" />
      <Item to={`${path}/vehicles`}>
        <Card>
          <IconVehicles /> Vehicles
        </Card>
      </Item>
      <Item to={`${path}/starships`}>
        <Card>
          <IconStarships /> Starships
        </Card>
      </Item>
    </Container>
  );
};

export default Menu;
