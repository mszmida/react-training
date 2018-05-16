import React from 'react';
import PropTypes from 'prop-types';

const Genres = (props) => {
    const { genres } = props;

    return(
        <span className="movie-item-genre">{ genres.join(' & ') }</span>
    );
};

Genres.propTypes = {
    genres: PropTypes.array.isRequired,
};

export default Genres;
