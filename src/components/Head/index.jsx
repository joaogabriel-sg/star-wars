import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Head = ({ title, description }) => {
  useEffect(() => {
    document.title = `Star Wars${title ? ` | ${title}` : ''}`;

    document
      .querySelector('meta[name="description"]')
      .setAttribute('content', description);
  }, [title, description]);

  return null;
};

Head.defaultProps = {
  description: '',
};

Head.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Head;
