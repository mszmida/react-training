import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../common/components/button/Button';

import './search-by-buttons.scss';

const isActive = (searchBy, type) => {
    return searchBy === type;
}

const SearchByButtons = (props) => {
    const { searchBy, onSearchByChange } = props;

    return (
        <div className="search-by">
            <span className="search-by__title">Search By</span>

            <Button
                className="button search-by__button"
                content="title"
                dataType="title"
                isActive={ isActive(searchBy, 'title') }
                onClickHandler={ onSearchByChange } />

            <Button
                className="button search-by__button"
                content="genre"
                dataType="genre"
                isActive={ isActive(searchBy, 'genre') }
                onClickHandler={ onSearchByChange } />
        </div>
    );
};

SearchByButtons.propTypes = {
    searchBy: PropTypes.oneOf(['title', 'genre']).isRequired,
    onSearchByChange: PropTypes.func.isRequired
};

export default SearchByButtons;
