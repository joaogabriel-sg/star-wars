import React from 'react';

import Infos from './Infos';
import LatestMovies from './LatestMovies';
import ChartBoxOffice from './ChartBoxOffice';

import { Container } from './styles';

const Dashboard = () => (
  <Container>
    <Infos />
    <LatestMovies />
    <ChartBoxOffice />
  </Container>
);

export default Dashboard;
