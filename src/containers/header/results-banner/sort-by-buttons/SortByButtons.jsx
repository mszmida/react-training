import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../components/common/Button';

import './sort-by-buttons.scss';

export default class SortByButtons extends React.Component {
    static propTypes = {
        onSortByChange: PropTypes.func.isRequired,
        sortBy: PropTypes.oneOf(['release', 'rating']).isRequired,
    }

    handleSortBy = (event) => {
        const { type } = event.target.dataset;

        console.log('Sort by: ', type);

        this.props.onSortByChange(type);
    }

    isActive = (type) => {
        return this.props.sortBy === type;
    }

    render() {
        console.log('rendering SortByButtons ...');

        return (
            <div className="sort-by">
                <span className="sort-by-title">Sort by</span>

                <Button
                    className="button sort-by-button"
                    content="release date"
                    dataType="release"
                    isActive={ this.isActive('release') }
                    onClickHandler={ this.handleSortBy }
                />

                <Button
                    className="button sort-by-button"
                    content="rating"
                    dataType="rating"
                    isActive={ this.isActive('rating') }
                    onClickHandler={ this.handleSortBy }
                />
            </div>
        );
    }
}
