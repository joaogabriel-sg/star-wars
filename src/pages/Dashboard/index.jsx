import React, { useContext } from 'react';

import Infos from './Infos';
import LatestMovies from './LatestMovies';
import ChartBoxOffice from './ChartBoxOffice';

import Loading from '../../components/Loading';
import ErrorComponent from '../../components/ErrorComponent';
import { Container } from './styles';
import { StarWarsDataContext } from '../../contexts/StarWarsDataContext';
import Head from '../../components/Head';

const Dashboard = () => {
  const { loading, error } = useContext(StarWarsDataContext);

  if (loading) return <Loading />;

  if (error)
    return (
      <Container>
        <ErrorComponent />
      </Container>
    );

  return (
    <Container>
      <Head
        title="Dashboard"
        description="Star Wars is an unofficial Star Wars app that searches in the SWAPI data about characters, planets, vehicles and spaceships of the franchise."
      />
      <Infos />
      <LatestMovies />
      <ChartBoxOffice />
    </Container>
  );
};

export default Dashboard;
