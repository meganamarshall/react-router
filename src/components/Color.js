import React from 'react';
import PropTypes from 'prop-types';

function Color({ match }) {

  const style = {
    backgroundColor: decodeURIComponent(match.params.color),
    height: '100px',
    width: '100px'
  };

  return <div style={style}></div>;
}

Color.proptypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      color: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Color;
