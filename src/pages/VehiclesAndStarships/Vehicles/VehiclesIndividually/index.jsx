import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  IoPeopleOutline,
  IoAirplaneOutline,
  IoBuildOutline,
} from 'react-icons/io5';

import { ReactComponent as IconVehicles } from '../../../../assets/icon-vehicles.svg';

import BackButton from '../../../../components/BackButton';
import ItemName from '../../../../components/ItemName';
import Card from '../../../../components/Card';
import Loading from '../../../../components/Loading';

import { api } from '../../../../services/api';

import { Infos, Info } from './styles';

const VehiclesIndividually = () => {
  const { vehicleId } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const cardIconSize = 36;

  useEffect(async () => {
    try {
      setLoading(true);
      setError(false);

      const { data: starshipData } = await api.get(`vehicles/${vehicleId}`);
      setVehicle(starshipData);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) return <Loading />;

  if (error) return <h2>Error</h2>;

  return (
    <div>
      <BackButton to="/vehicles-and-starships/vehicles" />
      {vehicle && (
        <>
          <ItemName>
            <IconVehicles /> {vehicle.name}
          </ItemName>
          <Infos>
            <Card>
              <IoPeopleOutline size={cardIconSize} />
              <Info>{vehicle.passengers.replace(',', '.')}</Info>
            </Card>
            <Card>
              <IoAirplaneOutline size={cardIconSize} />
              <Info>
                {vehicle.cargo_capacity === 'unknown'
                  ? 'unknown'
                  : `${vehicle.cargo_capacity} kg`}
              </Info>
            </Card>
            <Card>
              <IoBuildOutline size={cardIconSize} />
              <Info>{vehicle.manufacturer}</Info>
            </Card>
          </Infos>
        </>
      )}
    </div>
  );
};

export default VehiclesIndividually;
