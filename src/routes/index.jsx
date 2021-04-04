import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Characters from '../pages/Characters';
import Planets from '../pages/Planets';
import VehiclesAndStarships from '../pages/VehiclesAndStarships';
import NotFound from '../pages/NotFound';

const Routes = () => (
  <Switch>
    <Route path="/" exact>
      <Dashboard />
    </Route>
    <Route path="/characters">
      <Characters />
    </Route>
    <Route path="/planets">
      <Planets />
    </Route>
    <Route path="/vehicles-and-starships">
      <VehiclesAndStarships />
    </Route>
    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
);

export default Routes;
