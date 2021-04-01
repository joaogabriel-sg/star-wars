import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Characters from '../pages/Characters';
import PlanetsAndMoons from '../pages/PlanetsAndMoons';
import Spaceships from '../pages/Spaceships';
import NotFound from '../pages/NotFound';

const Routes = () => (
  <Switch>
    <Route path="/" component={Dashboard} exact />
    <Route path="/characters" component={Characters} exact />
    <Route path="/planets-and-moons" component={PlanetsAndMoons} exact />
    <Route path="/spaceships" component={Spaceships} exact />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;