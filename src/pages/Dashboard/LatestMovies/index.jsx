import React from 'react';

import Card from '../../../components/Card';
import Table from './Table';

import { Container, Title, Subtitle } from './styles';

const LatestMovies = () => (
  <Container>
    <Card>
      <Title>Latest movies</Title>
      <Subtitle>Get to know the latest brand launches</Subtitle>
      <Table />
    </Card>
  </Container>
);

export default LatestMovies;
