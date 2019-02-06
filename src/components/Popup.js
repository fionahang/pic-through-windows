import React from 'react';
import PropTypes from 'prop-types';
import close from '../images/close-x.svg';
import './Popup.css';

const Popup = (props) => (
    <div className="popup" onClick={ props.closePopup }>
        <img src={ close } alt="x" className="close-icon"/>
        <div className="popup-inner">
            <img src={ props.url } alt="" className="popup-image"/>        
        </div>
    </div>
);

Popup.propTypes = {
    url: PropTypes.string,
    closePopup: PropTypes.bool
}

export default Popup;