import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../components/common/Button';

import './search-by-buttons.scss';

export default class SearchByButtons extends React.Component {
    static propTypes = {
        onSearchByChange: PropTypes.func.isRequired,
        searchBy: PropTypes.oneOf(['title', 'genre']).isRequired,
    }

    handleSearchBy = (event) => {
        const { type } = event.target.dataset;

        console.log('Search by: ', type);

        this.props.onSearchByChange(type);
    }

    isActive = (type) => {
        return this.props.searchBy === type;
    }

    render() {
        console.log('rendering SearchByButtons ...');

        return (
            <div className="search-by">
                <span className="search-by-title">Search By</span>

                <Button
                    className="button search-by-button"
                    content="title"
                    dataType="title"
                    isActive={ this.isActive('title') }
                    onClickHandler={ this.handleSearchBy } />

                <Button
                    className="button search-by-button"
                    content="genre"
                    dataType="genre"
                    isActive={ this.isActive('genre') }
                    onClickHandler={ this.handleSearchBy } />
            </div>
        );
    };
}
