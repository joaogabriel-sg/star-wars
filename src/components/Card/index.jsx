import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Card = ({ children }) => <Container>{children}</Container>;

Card.defaultProps = {
  children: null,
};

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
