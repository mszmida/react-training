import React from 'react';
import PropTypes from 'prop-types';

import NotFound from '../../components/common/NotFound';
import MovieItem from './movie-item/MovieItem';

import './movies-list.scss';

export default class MoviesList extends React.Component {
    static propTypes = {
        onMovieClick: PropTypes.func.isRequired
    }

    handleMovieItemClick = (event) => {
        const { movieId } = event.currentTarget.dataset;

        this.props.onMovieClick(Number(movieId));
    }

    render() {
        console.log('rendering MoviesList ...');

        const { movies } = this.props;

        if (!movies) {
            return null;
        }

        if (movies.length === 0) {
            return <NotFound message="No movies has been found"/>;
        }

        return (
            <div className="movies-list">
                { movies.map( movie => <MovieItem key={ movie.id } { ...movie } onClickHandler={ this.handleMovieItemClick } /> ) }
            </div>
        );
    }
}
