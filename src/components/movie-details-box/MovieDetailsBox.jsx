import React from 'react';

import InfoBanner from '../../common/components/info-banner/InfoBanner';
import MovieDetails from '../movie-details/MovieDetails';
import MoviesGenre from '../movies-genre/MoviesGenre';

const MovieDetailsBox = (props) => {
    const { genre } = props;
    const movieDetailsProps = { };

    ({
        poster_path: movieDetailsProps.posterPath,
        title: movieDetailsProps.title,
        tagline: movieDetailsProps.tagline,
        vote_average: movieDetailsProps.voteAverage,
        release_date: movieDetailsProps.releaseDate,
        runtime: movieDetailsProps.runtime,
        overview: movieDetailsProps.overview
    } = props);

    console.log('Rendering MovieDetailsBox ...');

    return (
        <React.Fragment>
            <MovieDetails { ...movieDetailsProps } />

            <InfoBanner>
                <MoviesGenre genre={ genre } />
            </InfoBanner>
        </React.Fragment>
    );
}

export default MovieDetailsBox;
