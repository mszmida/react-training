import React from 'react';

import InfoBanner from '../../common/components/info-banner/InfoBanner';
import MovieDetails from '../movie-details/MovieDetails';
import MoviesGenre from '../movies-genre/MoviesGenre';

const MovieDetailsBox = (props) => {
    const { genre, ...movieDetails } = props;

    return (
        <React.Fragment>
            <MovieDetails { ...movieDetails } />

            <InfoBanner>
                <MoviesGenre genre={ genre } />
            </InfoBanner>
        </React.Fragment>
    );
}

export default MovieDetailsBox;
