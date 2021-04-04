import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Wrapper, Item } from './styles';

const List = ({ data, type }) => {
  const { path } = useRouteMatch();

  return (
    <Wrapper>
      {data.length > 0 &&
        data.map((item, index) => {
          if (type === 'planets' && index === 27) return null;

          const urlSplitted = item.url.split('/');
          urlSplitted.pop();
          const id = urlSplitted[urlSplitted.length - 1];

          return <Item to={`${path}/${id}`}>{item.name}</Item>;
        })}
    </Wrapper>
  );
};

List.propTypes = {
  data: PropTypes.arrayOf({}).isRequired,
  type: PropTypes.string.isRequired,
};

export default List;
