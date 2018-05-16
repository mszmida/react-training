import React from 'react';
import PropTypes from 'prop-types';

import Poster from './poster/Poster';
import Title from './title/Title';
import ReleaseYear from './release-year/ReleaseYear';
import Genres from './genres/Genres';

const MovieItem = (props) => {
    const {
        id,
        poster_path,
        title,
        release_date,
        genres,
        onClickHandler
    } = props;

    console.log('rendering MovieItem ...');

    return (
        <div className="movie-item" data-movie-id={ id } onClick={ onClickHandler }>
            <Poster
                posterPath={ poster_path }
                title={ title } />

            <div className="row">
                <div className="col-xs">
                    <Title title={ title } />
                </div>

                <div className="col-xs">
                    <ReleaseYear releaseDate={ release_date } />
                </div>
            </div>

            <Genres genres={ genres } />
        </div>
    );
}

MovieItem.propTypes = {
    onClickHandler: PropTypes.func.isRequired,
};

export default MovieItem;
