import React from 'react';
import PropTypes from 'prop-types';

import Poster from './poster/Poster';
import Title from './title/Title';
import ReleaseYear from './release-year/ReleaseYear';
import Genres from './genres/Genres';

const MovieItem = (props) => {
    const {
        id,
        poster_path: posterPath,
        title,
        release_date: releaseDate,
        genres,
        onClickHandler
    } = props;

    console.log('rendering MovieItem ...');

    return (
        <div className="movie-item" data-movie-id={ id } onClick={ onClickHandler }>
            <Poster
                posterPath={ posterPath }
                title={ title } />

            <div className="row">
                <div className="col-xs">
                    <Title title={ title } />
                </div>

                <div className="col-xs">
                    <ReleaseYear releaseDate={ new Date(releaseDate) } />
                </div>
            </div>

            <Genres genres={ genres } />
        </div>
    );
};

MovieItem.propTypes = {
    onClickHandler: PropTypes.func.isRequired,
};

export default MovieItem;
