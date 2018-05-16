import React from 'react';
import PropTypes from 'prop-types';

const ReleaseYear = (props) => {
    const { releaseDate } = props;

    return (
        <span>{ new Date(releaseDate).getFullYear() }</span>
    );
};

ReleaseYear.propTypes = {
    releaseDate: PropTypes.string.isRequired
};

export default ReleaseYear;
