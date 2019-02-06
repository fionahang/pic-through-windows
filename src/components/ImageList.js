import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import './ImageList.css';

const ImageList = (props) => {
    const results = props.data;
	return (
		<ul className="grid">
            { results.map((imageUrl, index) =>
                 <Image onClick={ props.onClick } url={ imageUrl } key={ index }/>
            )}
		</ul>
	);
};

ImageList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.string),
    onClick: PropTypes.func
};

export default ImageList;