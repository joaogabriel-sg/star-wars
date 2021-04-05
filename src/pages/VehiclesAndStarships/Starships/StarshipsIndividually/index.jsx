import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  IoPeopleOutline,
  IoAirplaneOutline,
  IoBuildOutline,
} from 'react-icons/io5';

import { ReactComponent as IconStarships } from '../../../../assets/icon-starships.svg';

import BackButton from '../../../../components/BackButton';
import ItemName from '../../../../components/ItemName';
import Card from '../../../../components/Card';
import Loading from '../../../../components/Loading';
import ErrorComponent from '../../../../components/ErrorComponent';

import { api } from '../../../../services/api';

import { Infos, Info } from './styles';

const StarshipsIndividually = () => {
  const { starshipId } = useParams();
  const [starship, setStarship] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const cardIconSize = 36;

  useEffect(async () => {
    try {
      setLoading(true);
      setError(false);

      const { data: starshipData } = await api.get(`starships/${starshipId}`);
      setStarship(starshipData);
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
    <div>
      <BackButton to="/vehicles-and-starships/starships" />
      {starship && (
        <>
          <ItemName>
            <IconStarships /> {starship.name}
          </ItemName>
          <Infos>
            <Card>
              <IoPeopleOutline size={cardIconSize} />
              <Info>{starship.passengers.replace(',', '.')}</Info>
            </Card>
            <Card>
              <IoAirplaneOutline size={cardIconSize} />
              <Info>
                {starship.cargo_capacity === 'unknown'
                  ? 'unknown'
                  : `${starship.cargo_capacity} kg`}
              </Info>
            </Card>
            <Card>
              <IoBuildOutline size={cardIconSize} />
              <Info>{starship.manufacturer}</Info>
            </Card>
          </Infos>
        </>
      )}
    </div>
  );
};

export default StarshipsIndividually;
