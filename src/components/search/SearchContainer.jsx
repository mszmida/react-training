import React from 'react';

import SearchBar from '../search/SearchBar';
import SearchResultCounter from '../search/SearchResultCounter';
import SearchSortBy from '../search/SearchSortBy';

import moviesMock from '../../movies.mock.json';

// import './search-container.scss';

export default class SearchContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: '',
            searchBy: 'title',
            sortBy: 'release',
            resultCounter: undefined
        };
    }

    handleSearchInputChange = (value) => {
        this.setState({
            searchText: value
        });
    }

    handleSearchByChange = (type) => {
        this.setState({
            searchBy: type
        });
    }

    handleSearchButtonClick = () => {
        const { data } = moviesMock;

        this.setState({
            resultCounter: data.length
        });

        this.props.onSearchResultsGet(data);
    }

    handleSortByChange = (type) => {
        this.setState({
            sortBy: type
        });
    }

    render() {
        console.log('rendering SearchContainer ...');

        return (
            <div className="search-container">
                <div className="container">
                    <SearchBar
                        onSearchInputChange={ this.handleSearchInputChange }
                        onSearchByChange={ this.handleSearchByChange }
                        onSearchButtonClick={ this.handleSearchButtonClick }
                        searchBy={ this.state.searchBy } />
                </div>

                <div className="search-footer">
                    <SearchResultCounter resultCounter={ this.state.resultCounter } />

                    <SearchSortBy
                        onSortByChange={ this.handleSortByChange }
                        sortBy={ this.state.sortBy } />
                </div>
            </div>
        );
    }
}
