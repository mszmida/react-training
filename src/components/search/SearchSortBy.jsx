import React from 'react';

import Input from '../common/Input';
import Button from '../common/Button';

// import './search-sort-by.scss';

export default class SearchSortBy extends React.Component {
    handleSortBy = (event) => {
        const { type } = event.target.dataset;

        console.log('Sort by: ', type);

        if (!type) {
            return;
        }

        this.props.onSortByChange(type);
    }

    isActive = (type) => {
        return this.props.sortBy === type;
    }

    render() {
        console.log('rendering SearchSortBy ...');

        return (
            <div className="search-sort-by-container">
                <span>Sort by</span>

                <Button
                    className="sort-btn"
                    content="release date"
                    dataType="release"
                    isActive={ this.isActive('release') }
                    onClickHandler={ this.handleSortBy }
                />

                <Button
                    className="sort-btn"
                    content="rating"
                    dataType="rating"
                    isActive={ this.isActive('rating') }
                    onClickHandler={ this.handleSortBy }
                />
            </div>
        );
    }
}
