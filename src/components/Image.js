import React from 'react';
import PropTypes from 'prop-types';
import './Image.css';

const Image = (props) => (
  <li className="image-cell">
    <div className="image-frame" onClick={ () => props.onClick(props.url) }>
      <img src={ props.url } alt="" className="image-img" />
    </div>
  </li>
);

Image.propTypes = {
    url: PropTypes.string,
    onClick: PropTypes.func
};

export default Image;