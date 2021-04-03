import React from 'react';
import PropTypes from 'prop-types';
import {
  IoBarbellOutline,
  IoBodyOutline,
  IoEyeOutline,
  IoFemaleOutline,
  IoMaleFemaleOutline,
  IoMaleOutline,
} from 'react-icons/io5';

import Card from '../../../../components/Card';

import { Container, Info } from './styles';

const Infos = ({ gender, height, mass, eyeColor }) => {
  const cardIconSize = 36;

  function checkIfTheInfoIsUnknown(info, type = '') {
    let customValue = info;
    if (type === 'height') customValue = `${+height / 100} m`;
    if (type === 'mass') customValue = `${+height / 100} m`;

    return ['unknown', 'n/a', 'none', '', null].includes(info)
      ? 'unknown'
      : customValue;
  }

  function genderIcon() {
    if (gender === 'female') return <IoFemaleOutline size={cardIconSize} />;
    if (gender === 'male') return <IoMaleOutline size={cardIconSize} />;
    return <IoMaleFemaleOutline size={cardIconSize} />;
  }

  return (
    <Container>
      <Card>
        <IoBodyOutline size={cardIconSize} />
        <Info>{checkIfTheInfoIsUnknown(height, 'height')}</Info>
      </Card>
      <Card>
        <IoBarbellOutline size={cardIconSize} />
        <Info>{checkIfTheInfoIsUnknown(mass, 'mass')}</Info>
      </Card>
      <Card>
        {genderIcon()}
        <Info>{checkIfTheInfoIsUnknown(gender)}</Info>
      </Card>
      <Card>
        <IoEyeOutline size={cardIconSize} />
        <Info>{checkIfTheInfoIsUnknown(eyeColor)}</Info>
      </Card>
    </Container>
  );
};

Infos.propTypes = {
  gender: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  mass: PropTypes.string.isRequired,
  eyeColor: PropTypes.string.isRequired,
};

export default Infos;
