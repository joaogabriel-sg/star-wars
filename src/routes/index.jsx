import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Characters from '../pages/Characters';
import PlanetsAndMoons from '../pages/PlanetsAndMoons';
import Starships from '../pages/Starships';
import NotFound from '../pages/NotFound';

const Routes = () => (
  <Switch>
    <Route path="/" component={Dashboard} exact />
    <Route path="/characters" component={Characters} exact />
    <Route path="/planets-and-moons" component={PlanetsAndMoons} exact />
    <Route path="/starships" component={Starships} exact />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
