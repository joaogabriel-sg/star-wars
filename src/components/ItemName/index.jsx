import React from 'react';
import PropTypes from 'prop-types';

import { Name } from './styles';

const ItemName = ({ children }) => <Name>{children}</Name>;

ItemName.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ItemName;
