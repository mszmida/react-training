import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../../../components/common/Input';

import './search-bar.scss';

const SearchBar = (props) => {
    const { onSearchBarChange } = props;

    console.log('rendering SearchBar ...');

    return (
        <Input
            id="movie-search-bar"
            className="search-bar"
            name="movie"
            type="text"
            title="Find your movie"
            onChangeHandler={ onSearchBarChange }
            placeholder="Type your movie"
        />
    );
};

SearchBar.propTypes = {
    onSearchBarChange: PropTypes.func.isRequired
};

export default SearchBar;
