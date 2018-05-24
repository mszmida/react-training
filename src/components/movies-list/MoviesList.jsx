import React from 'react';
import PropTypes from 'prop-types';

import ErrorBoundary from '../../common/components/error-boundary/ErrorBoundary';
import NotFound from '../../common/components/not-found/NotFound';
import MovieItem from './movie-item/MovieItem';

import './movies-list.scss';

const MoviesList = ({ movies, onMovieClick }) => {
    if (!movies) {
        return null;
    }

    if (movies.length === 0) {
        return <NotFound message="No movies has been found"/>;
    }

    let movieDetails;

    const movieItems = movies.map(
        movie => {
            movieDetails = { };

            ({
                id: movieDetails.id,
                poster_path: movieDetails.posterPath,
                title: movieDetails.title,
                release_date: movieDetails.releaseDate,
                genres: movieDetails.genres
            } = movie);

            return <MovieItem key={ movie.id } { ...movieDetails } onClickHandler={ onMovieClick } />
        }
    );

    return (
        <ErrorBoundary>
            <div className="movies-list">
                { movieItems }
            </div>
        </ErrorBoundary>
    );
}

MoviesList.propTypes = {
    onMovieClick: PropTypes.func.isRequired
};

export default MoviesList;
