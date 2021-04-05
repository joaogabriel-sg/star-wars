import React from 'react';
import PropTypes from 'prop-types';

import SingleInfo from '../SingleInfo';

import { Container, Message } from './styles';

const DoubleInfo = ({ infos }) => (
  <Container>
    {infos.length === 2 ? (
      infos.map(({ title, quantity, icon, to }) => (
        <SingleInfo
          key={title}
          title={title}
          quantity={quantity}
          icon={icon}
          to={to}
        />
      ))
    ) : (
      <Message>Please, insert two Star Wars informations!</Message>
    )}
  </Container>
);

DoubleInfo.propTypes = {
  infos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      icon: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default DoubleInfo;
