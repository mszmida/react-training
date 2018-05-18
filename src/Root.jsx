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
            movieDetails: undefined
        };
    }

    handleSearchResults = (data) => {
        this.setState({
            searchResults: data
        });
    }

    handleMovieClick = (event) => {
        const { searchResults } = this.state;

        if (!searchResults) {
            return null;
        }

        const { movieId } = event.currentTarget.dataset;
        const movieIdNumber = Number(movieId);

        const movieData = searchResults.find((movie) => {
            return movie.id === movieIdNumber;
        });

        if(!movieData) {
            return null;
        }

        this.setState({
            movieDetails: movieData
        });
    }

    handleSearchReturn = () => {
        this.setState({
            movieDetails: null
        });
    }

    render() {
        return (
            <ErrorBoundary>
                <div className="page-wrapper">
                    <Header
                        onSearchResultsFetch={ this.handleSearchResults }
                        onSearchReturn={ this.handleSearchReturn }
                        movieData={ this.state.movieDetails } />

                    <MoviesList movies={ this.state.searchResults } onMovieClick={ this.handleMovieClick }/>

                    <Footer />
                </div>
            </ErrorBoundary>
        );
    }
}
