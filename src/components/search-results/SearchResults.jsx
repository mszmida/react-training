import React from 'react';

import NotFound from '../common/NotFound';
import MovieItem from '../movie-item/MovieItem';

// import './search.results.scss';

export default function SearchResults(props) {
    const { movies } = props;

    if (!movies) {
        return null;
    }

    if (movies.length === 0) {
        return <NotFound message="No movies has been found"/>;
    }

    console.log('rendering SearchResults ...');

    return (
        <div className="search-results">
            <div className="container">
                { movies.map( movie => <MovieItem key={movie.id} movie={movie} /> ) }
            </div>
        </div>
    );
}
