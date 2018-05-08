import React from 'react';

import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import SearchContainer from './components/search/SearchContainer';
import SearchResults from './components/search-results/SearchResults';

import './assets/main.scss';

export default class Root extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchResults: undefined
        };
    }

    handleSearchResults = (data) => {
        this.setState({
            searchResults: data
        });
    }

    render() {
        return (
            <ErrorBoundary>
                <div className="header">
                    <div className="container">
                        <p className="logo">netflixroulette</p>

                        <SearchContainer onSearchResultsGet={ this.handleSearchResults } />
                    </div>
                </div>

                <div className="content">
                    <div className="container">
                        <SearchResults movies={ this.state.searchResults } />
                    </div>
                </div>

                <div className="footer">
                    <div className="container">
                        <p className="logo">netflixroulette</p>
                    </div>
                </div>
            </ErrorBoundary>
        );
    }
}
