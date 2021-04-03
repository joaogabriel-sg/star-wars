import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Characters from '../pages/Characters';
import PlanetsAndMoons from '../pages/PlanetsAndMoons';
import Spaceships from '../pages/Spaceships';
import NotFound from '../pages/NotFound';

const Routes = () => (
  <Switch>
    <Route path="/" exact>
      <Dashboard />
    </Route>
    <Route path="/characters">
      <Characters />
    </Route>
    <Route path="/planets-and-moons">
      <PlanetsAndMoons />
    </Route>
    <Route path="/spaceships" exact>
      <Spaceships />
    </Route>
    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
);

export default Routes;
