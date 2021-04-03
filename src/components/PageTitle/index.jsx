import React from 'react';
import PropTypes from 'prop-types';

import { Title } from './styles';

const PageTitle = ({ title }) => <Title>{title}</Title>;

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
