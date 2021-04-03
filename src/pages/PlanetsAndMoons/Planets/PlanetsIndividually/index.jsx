import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  IoPeopleOutline,
  IoPartlySunnyOutline,
  IoImageOutline,
} from 'react-icons/io5';

import { ReactComponent as IconPlanets } from '../../../../assets/icon-planets.svg';

import BackButton from '../../../../components/BackButton';
import ItemName from '../../../../components/ItemName';
import Card from '../../../../components/Card';

import { api } from '../../../../services/api';

import { Infos, Info } from './styles';

const PlanetsIndividually = () => {
  const { planetId } = useParams();
  const [planet, setPlanet] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const cardIconSize = 36;

  useEffect(async () => {
    try {
      setLoading(true);
      setError(false);

      const { data: planetData } = await api.get(`planets/${planetId}`);
      setPlanet(planetData);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>Error</h2>;

  return (
    <div>
      <BackButton to="/planets-and-moons/planets" />
      {planet && (
        <>
          <ItemName>
            <IconPlanets /> {planet.name}
          </ItemName>
          <Infos>
            <Card>
              <IoPeopleOutline size={cardIconSize} />
              <Info>{planet.population}</Info>
            </Card>
            <Card>
              <IoPartlySunnyOutline size={cardIconSize} />
              <Info>{planet.climate}</Info>
            </Card>
            <Card>
              <IoImageOutline size={cardIconSize} />
              <Info>{planet.terrain}</Info>
            </Card>
          </Infos>
        </>
      )}
    </div>
  );
};

export default PlanetsIndividually;
