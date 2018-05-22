import React from 'react';
import PropTypes from 'prop-types';

import './not-found.scss';

const NotFound = ({ message }) => {
    return (
        <div className="not-found">
            <h1>{ message }</h1>
        </div>
    );
};

NotFound.propTypes = {
    message: PropTypes.string.isRequired
};

export default NotFound;
