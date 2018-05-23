import React from 'react';

import Logo from './common/components/logo/Logo';
import Button from './common/components/Button';

import Header from './components/header/Header';
import SearchContainer from './containers/SearchContainer';
import MovieDetailsBox from './components/movie-details-box/MovieDetailsBox';
import MoviesList from './components/movies-list/MoviesList';
import Footer from './components/footer/Footer';

import './assets/main.scss';

export default class Root extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            movieDetails: null
        };
    }

    handleSearchReturn = () => {
        this.setState({
            movieDetails: null
        });
    }

    handleSearchResults = (movies) => {
        this.setState({ movies });
    }

    handleMovieClick = (event) => {
        const { movies } = this.state;

        if (!movies) {
            return null;
        }

        const { movieId } = event.currentTarget.dataset;
        const movieIdNumber = Number(movieId);

        const movieDetails = movies.find((movie) => {
            return movie.id === movieIdNumber;
        });

        if(!movieDetails) {
            return null;
        }

        this.setState({ movieDetails });
    }

    render() {
        const { movies, movieDetails } = this.state;

        const genre = movieDetails && movieDetails.genres && movieDetails.genres[0];

        return (
            <div className="page-wrapper">
                <Header
                    topLeft={ <Logo /> }
                    topRight={ movieDetails &&
                        <Button
                            className="button search-return-button"
                            content="Search"
                            onClickHandler={ this.handleSearchReturn } /> } >

                    { !movieDetails &&
                        <SearchContainer
                            onSearchResultsFetch={ this.handleSearchResults } />
                    }

                    { movieDetails &&
                        <MovieDetailsBox
                            { ...movieDetails }
                            genre={ genre } />
                    }
                </Header>

                <MoviesList movies={ movies } onMovieClick={ this.handleMovieClick } />

                <Footer>
                    <Logo />
                </Footer>
            </div>
        );
    }
}
