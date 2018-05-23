import React from 'react';
import PropTypes from 'prop-types';

import ErrorBoundary from '../../common/components/error-boundary/ErrorBoundary';
import NotFound from '../../common/components/not-found/NotFound';
import MovieItem from './movie-item/MovieItem';

import './movies-list.scss';

const MoviesList = ({ movies, onMovieClick }) => {
    console.log('rendering MoviesList ...');

    if (!movies) {
        return null;
    }

    if (movies.length === 0) {
        return <NotFound message="No movies has been found"/>;
    }

    return (
        <div className="movies-list">
            <ErrorBoundary>
                { movies.map(
                    movie => <MovieItem key={ movie.id } { ...movie } onClickHandler={ onMovieClick } />
                ) }
            </ErrorBoundary>
        </div>
    );
}

MoviesList.propTypes = {
    onMovieClick: PropTypes.func.isRequired
};

export default MoviesList;
