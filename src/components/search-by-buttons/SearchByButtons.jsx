import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../common/components/Button';

import './search-by-buttons.scss';

const isActive = (searchBy, type) => {
    return searchBy === type;
}

const SearchByButtons = (props) => {
    const { searchBy, onSearchByChange } = props;

    console.log('rendering SearchByButtons ...');

    return (
        <div className="search-by">
            <span className="search-by-title">Search By</span>

            <Button
                className="button search-by-button"
                content="title"
                dataType="title"
                isActive={ isActive(searchBy, 'title') }
                onClickHandler={ onSearchByChange } />

            <Button
                className="button search-by-button"
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
