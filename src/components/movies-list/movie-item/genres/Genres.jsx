import React from 'react';
import PropTypes from 'prop-types';

const Genres = ({ genres }) => <span className="movie-item-genre">{ genres.join(' & ') }</span>;

Genres.propTypes = {
    genres: PropTypes.array.isRequired,
};

export default Genres;
