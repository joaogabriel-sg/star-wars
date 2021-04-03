import React from 'react';
import PropTypes from 'prop-types';

import Card from '../../../../components/Card';

import { Container, Name, Data } from './styles';

const Planet = ({ name, population, climate, terrain }) => (
  <Container>
    <Card>
      <Name>Planet {name}</Name>
      {population && (
        <Data>
          Population: <span>{population}</span>
        </Data>
      )}
      {climate && (
        <Data>
          Climate: <span>{climate}</span>
        </Data>
      )}
      {terrain && (
        <Data>
          Terrain: <span>{terrain}</span>
        </Data>
      )}
    </Card>
  </Container>
);

Planet.propTypes = {
  name: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
  climate: PropTypes.string.isRequired,
  terrain: PropTypes.string.isRequired,
};

export default Planet;
