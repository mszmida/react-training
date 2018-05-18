import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../../../components/common/Input';

import './search-bar.scss';

const SearchBar = ({ onSearchBarChange }) => {
    console.log('rendering SearchBar ...');

    return (
        <Input
            id="movie-search-bar"
            className="search-bar"
            name="movie"
            type="text"
            title="Find your movie"
            placeholder="Type your movie"
            onChangeHandler={ onSearchBarChange }
        />
    );
};

SearchBar.propTypes = {
    onSearchBarChange: PropTypes.func.isRequired
};

export default SearchBar;
