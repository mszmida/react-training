import React from 'react';
import PropTypes from 'prop-types';

const ReleaseYear = ({ releaseDate }) => <span>{ releaseDate.getFullYear() }</span>;

ReleaseYear.propTypes = {
    releaseDate: PropTypes.instanceOf(Date)
};

export default ReleaseYear;
