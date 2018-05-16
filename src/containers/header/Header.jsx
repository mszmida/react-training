import React from 'react';

import Logo from '../../components/common/Logo';
import Button from '../../components/common/Button';
import SearchForm from './search-form/SearchForm';
import ResultsBanner from './results-banner/ResultsBanner';
import MovieDetails from './movie-details/MovieDetails';

import moviesMock from '../../movies.mock.json';

import './header.scss';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: '',
            searchBy: 'title',
            sortBy: 'release',
            resultsQuantity: undefined
        };
    }

    handleSearchBarChange = (event) => {
        const { value } = event.target;

        console.log('Search value: ', value);

        this.setState({
            searchText: value
        });
    }

    handleSearchReturnClick = () => {
        console.log('Return to search form');
    }

    handleSearchByChange = (type) => {
        this.setState({
            searchBy: type
        });
    }

    handleSearchButtonClick = (event) => {
        console.log('Searching ...');

        const { data } = moviesMock;

        this.setState({
            resultsQuantity: data.length
        });

        this.props.onSearchResultsFetch(data);
    }

    handleSortByChange = (type) => {
        this.setState({
            sortBy: type
        });
    }

    render() {
        console.log('rendering Header ...');

        const { movieData } = this.props;
        const { resultsQuantity } = this.state;

        const content = !movieData ?
            <SearchForm
                onSearchBarChange={ this.handleSearchBarChange }
                onSearchByChange={ this.handleSearchByChange }
                onSearchButtonClick={ this.handleSearchButtonClick }
                searchBy={ this.state.searchBy } />
            : <MovieDetails  { ...movieData } />;
        const genre = movieData && movieData.genres && movieData.genres[0];

        return (
            <div className="header">
                <div className="header-content">
                    <Logo />

                    {
                        movieData &&
                        <Button
                            className="button search-return-button"
                            content="Search"
                            onClickHandler={ this.handleSearchReturnClick }
                        />
                    }

                    { content }
                </div>

                <ResultsBanner
                    genre={ genre }
                    resultsQuantity={ resultsQuantity }
                    onSortByChange={ this.handleSortByChange }
                    sortBy={ this.state.sortBy } />
            </div>
        );
    }
}
