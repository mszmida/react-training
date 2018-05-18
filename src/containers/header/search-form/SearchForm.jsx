import React from 'react';

import SearchBar from './search-bar/SearchBar';
import SearchByButtons from './search-by-buttons/SearchByButtons';
import Button from '../../../components/common/Button';

import './search-form.scss';

const SearchForm = (props) => {
    const {
        onSearchBarChange,
        onSearchByChange,
        onSearchButtonClick,
        searchBy
    } = props;
    return (
        <form action="" className="search-form">
            <SearchBar
                onSearchBarChange={ onSearchBarChange } />

            <div className="row">
                <div className="col-xs">
                    <SearchByButtons
                        onSearchByChange={ onSearchByChange }
                        searchBy={ searchBy } />
                </div>

                <div className="col-xs">
                    <Button
                        className="button search-button active"
                        content="search"
                        onClickHandler={ onSearchButtonClick } />
                </div>
            </div>
        </form>
    );
};

export default SearchForm;
