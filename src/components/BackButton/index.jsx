import React from 'react';
import PropTypes from 'prop-types';
import { IoArrowBackOutline } from 'react-icons/io5';

import { Button } from './styles';

const BackButton = ({ to }) => (
  <Button to={to}>
    <IoArrowBackOutline size={24} />
    Back
  </Button>
);

BackButton.propTypes = {
  to: PropTypes.string.isRequired,
};

export default BackButton;
