import React from 'react';

import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import Header from './containers/header/Header';
import MoviesList from './containers/movies-list/MoviesList';
import Footer from './containers/footer/Footer';

import './assets/main.scss';

export default class Root extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchResults: undefined,
            movieData: undefined
        };
    }

    handleSearchResults = (data) => {
        this.setState({
            searchResults: data
        });
    }

    handleMovieClick = (movieId) => {
        const { searchResults } = this.state;

        if (!searchResults) {
            return null;
        }

        const movieData = searchResults.find((movie) => {
            return movie.id === movieId;
        });

        this.setState({ movieData });
    }

    render() {
        return (
            <ErrorBoundary>
                <div className="page-wrapper">
                    <Header
                        onSearchResultsFetch={ this.handleSearchResults } movieData={ this.state.movieData } />

                    <MoviesList movies={ this.state.searchResults } onMovieClick={ this.handleMovieClick }/>

                    <Footer />
                </div>
            </ErrorBoundary>
        );
    }
}
