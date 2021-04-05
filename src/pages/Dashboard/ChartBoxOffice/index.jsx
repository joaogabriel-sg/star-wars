import React, { useContext } from 'react';
import { VictoryPie, VictoryTooltip } from 'victory';

import Card from '../../../components/Card';

import palette from '../../../styles/themes/palette';
import { Container, Title } from './styles';

import { StarWarsDataContext } from '../../../contexts/StarWarsDataContext';

const ChartBoxOffice = () => {
  const { planets } = useContext(StarWarsDataContext);

  const topFivePlanetsByPopulation = planets
    .sort((a, b) => b.population - a.population)
    .slice(0, 5)
    .reverse();

  return (
    <Container>
      <Card>
        <Title>The top 5 planets by population</Title>
        <VictoryPie
          data={topFivePlanetsByPopulation}
          x="name"
          y="population"
          colorScale={[
            palette.turquoise,
            palette.blue,
            palette.purple,
            palette.orange,
            palette.red,
          ]}
          labelComponent={
            <VictoryTooltip
              cornerRadius={4}
              flyoutPadding={12}
              style={{ fontSize: 20, fontWeight: 'bold' }}
              flyoutStyle={{
                fill: palette.yellow,
                stroke: palette.yellowDark,
                strokeWidth: 4,
              }}
              constrainToVisibleArea
            />
          }
        />
      </Card>
    </Container>
  );
};

export default ChartBoxOffice;
