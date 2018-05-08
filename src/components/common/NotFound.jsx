import React from 'react';
import PropTypes from 'prop-types';

// import './not.found.scss';

const NotFound = (props) => {
    const { message } = props;

    return (
        <div className="not-found">
            <div className="container">
                <p>{ message }</p>
            </div>
        </div>
    );
}

NotFound.propTypes = {
    message: PropTypes.string.isRequired
};

export default NotFound;
