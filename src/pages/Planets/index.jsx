import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import PageTitle from '../../components/PageTitle';
import PlanetsList from './PlanetsList';
import Individually from './Individually';

import { Container } from './styles';

const PlanetsAndStarships = () => {
  const { path } = useRouteMatch();

  return (
    <Container>
      <PageTitle title="Planets" />
      <Switch>
        <Route path={path} component={PlanetsList} exact />
        <Route path={`${path}/:planetId`} component={Individually} exact />
      </Switch>
    </Container>
  );
};

export default PlanetsAndStarships;
