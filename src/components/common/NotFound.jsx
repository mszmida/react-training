import React from 'react';
import PropTypes from 'prop-types';

// import './not.found.scss';

const NotFound = ({ message }) => {
    return (
        <div className="not-found">
            <p>{ message }</p>
        </div>
    );
};

NotFound.propTypes = {
    message: PropTypes.string.isRequired
};

export default NotFound;
