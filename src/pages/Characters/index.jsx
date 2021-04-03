import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import PageTitle from '../../components/PageTitle';
import List from './List';
import Individually from './Individually';

import { Container } from './styles';

const Characters = () => {
  const { path } = useRouteMatch();

  return (
    <Container>
      <PageTitle title="Characters" />
      <Switch>
        <Route path={path} component={List} exact />
        <Route path={`${path}/:characterId`} component={Individually} exact />
      </Switch>
    </Container>
  );
};

export default Characters;
