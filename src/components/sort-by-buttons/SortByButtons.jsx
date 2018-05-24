import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../common/components/button/Button';

import './sort-by-buttons.scss';

const isActive = (sortBy, type) => {
    return sortBy === type;
};

const SortByButtons = (props) => {
    const { sortBy, onSortByChange } = props;

    return (
        <div className="sort-by">
            <span className="sort-by__title">Sort by</span>

            <Button
                className="button sort-by__button"
                content="release date"
                dataType="release"
                isActive={ isActive(sortBy, 'release') }
                onClickHandler={ onSortByChange } />

            <Button
                className="button sort-by__button"
                content="rating"
                dataType="rating"
                isActive={ isActive(sortBy, 'rating') }
                onClickHandler={ onSortByChange } />
        </div>
    );
};

SortByButtons.propTypes = {
    sortBy: PropTypes.oneOf(['release', 'rating']).isRequired,
    onSortByChange: PropTypes.func.isRequired
};

export default SortByButtons;
