import React from 'react';

import InfoBanner from '../common/components/info-banner/InfoBanner';
import SearchForm from '../components/search-form/SearchForm';
import MoviesQuantity from '../components/movies-quantity/MoviesQuantity';
import SortByButtons from '../components/sort-by-buttons/SortByButtons';

import moviesMock from '../movies.mock.json';

export default class SearchContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sortBy: 'release'
        };
    }

    handleSearchButtonClick = (options) => {
        const { sortBy } = this.state;
        const { onSearchResultsFetch } = this.props;

        const searchOptions = {
            ...options,
            sortBy
        };

        console.log('Searching ...', searchOptions);

        const { data } = moviesMock;

        onSearchResultsFetch(data);
    }

    handleSortByChange = (event) => {
        const { type } = event.target.dataset;

        console.log('Sort by: ', type);

        this.setState({
            sortBy: type
        });
    }

    render() {
        const { sortBy } = this.state;
        const { resultsQuantity } = this.props;

        return (
            <React.Fragment>
                <SearchForm
                    onSearchButtonClick={ this.handleSearchButtonClick } />

                <InfoBanner>
                    { resultsQuantity !== 0 &&
                        <div className="row middle-xs">
                            <div className="col-xs center-xs">
                                <MoviesQuantity quantity={ resultsQuantity } />
                            </div>

                            <div className="col-xs center-xs">
                                <SortByButtons
                                    onSortByChange={ this.handleSortByChange }
                                    sortBy={ sortBy } />
                            </div>
                        </div>
                    }
                    </InfoBanner>
            </React.Fragment>
        );
    }
}
