import React from 'react';
import PropTypes from 'prop-types';

import './poster.scss';

const Poster = (props) => {
    const {
        posterPath,
        title
    } = props;

    return(
        <img className="movie-item-poster" src={ posterPath } alt={ `Poster of ${ title }` } />
    );
};

Poster.defaultProps = {
    posterPath: 'http://via.placeholder.com/200x300'
};

Poster.propTypes = {
    posterPath: PropTypes.string,
    title: PropTypes.string.isRequired,
};

export default Poster;
