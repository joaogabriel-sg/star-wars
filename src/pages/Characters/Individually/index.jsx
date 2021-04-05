import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ReactComponent as IconCharacters } from '../../../assets/icon-characters.svg';

import { api } from '../../../services/api';

import BackButton from '../../../components/BackButton';
import ItemName from '../../../components/ItemName';
import Infos from './Infos';
import Planet from './Planet';
import Loading from '../../../components/Loading';
import ErrorComponent from '../../../components/ErrorComponent';

import { Container } from './styles';
import Head from '../../../components/Head';

const Individually = () => {
  const { characterId } = useParams();
  const [character, setCharacter] = useState(null);
  const [planet, setPlanet] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(async () => {
    try {
      setLoading(true);
      setError(false);

      const { data: characterData } = await api.get(`people/${characterId}`);
      const response = await fetch(characterData.homeworld);
      const planetData = await response.json();

      setCharacter(characterData);
      setPlanet(planetData);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) return <Loading />;

  if (error)
    return (
      <>
        <BackButton to="/planets" />
        <ErrorComponent />
      </>
    );

  return (
    <Container>
      <BackButton to="/characters" />
      {character && planet && (
        <>
          <Head title={character.name} />
          <ItemName>
            <IconCharacters /> {character.name}
          </ItemName>
          <Infos
            gender={character.gender}
            height={character.height}
            mass={character.mass}
            eyeColor={character.eye_color}
          />
          <Planet
            name={planet.name}
            population={planet.population}
            climate={planet.climate}
            terrain={planet.terrain}
          />
        </>
      )}
    </Container>
  );
};

export default Individually;
