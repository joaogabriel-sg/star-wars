import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title } from './styles';

const Item = ({ children, title, to, exact }) => (
  <Container to={to} exact={exact}>
    {children}
    {title && <Title>{title}</Title>}
  </Container>
);

Item.defaultProps = {
  title: null,
  exact: false,
};

Item.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  to: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

export default Item;
