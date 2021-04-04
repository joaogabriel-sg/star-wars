import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import PageTitle from '../../components/PageTitle';
import Menu from './Menu';
import Vehicles from './Vehicles';
import VehiclesIndividually from './Vehicles/VehiclesIndividually';
import Starships from './Starships';
import StarshipsIndividually from './Starships/StarshipsIndividually';

import { Container } from './styles';

const VehiclesAndStarships = () => {
  const { path } = useRouteMatch();

  return (
    <Container>
      <PageTitle title="Vehicles and Starships" />
      <Switch>
        <Route path={path} component={Menu} exact />
        <Route path={`${path}/vehicles`} component={Vehicles} exact />
        <Route
          path={`${path}/vehicles/:vehicleId`}
          component={VehiclesIndividually}
          exact
        />
        <Route path={`${path}/starships`} component={Starships} exact />
        <Route
          path={`${path}/starships/:starshipId`}
          component={StarshipsIndividually}
          exact
        />
      </Switch>
    </Container>
  );
};

export default VehiclesAndStarships;
