import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import PageTitle from '../../components/PageTitle';
import Menu from './Menu';
import Planets from './Planets';
import PlanetsIndividually from './Planets/PlanetsIndividually';
import Moons from './Moons';
import MoonsIndividually from './Moons/MoonsIndividually';

import { Container } from './styles';

const PlanetsAndMoons = () => {
  const { path } = useRouteMatch();

  return (
    <Container>
      <PageTitle title="Planets and Moons" />
      <Switch>
        <Route path={path} component={Menu} exact />
        <Route path={`${path}/planets`} component={Planets} exact />
        <Route
          path={`${path}/planets/:planetId`}
          component={PlanetsIndividually}
          exact
        />
        <Route path={`${path}/moons`} component={Moons} exact />
        <Route
          path={`${path}/moons/:starshipId`}
          component={MoonsIndividually}
          exact
        />
      </Switch>
    </Container>
  );
};

export default PlanetsAndMoons;
