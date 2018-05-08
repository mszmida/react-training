import React from 'react';

import Input from '../common/Input';
import Button from '../common/Button';

// import './search-bar.scss';

export default class SearchBar extends React.Component {
    handleSearchInput = (event) => {
        const { value } = event.target;

        console.log('Search value: ', value);

        this.props.onSearchInputChange(value);
    }

    handleSearchBy = (event) => {
        const { type } = event.target.dataset;

        console.log('Search by: ', type);

        this.props.onSearchByChange(type);
    }

    handleSearchButton = (event) => {
        console.log('Searching ...');

        this.props.onSearchButtonClick();
    }

    isActive = (type) => {
        return this.props.searchBy === type;
    }

    render() {
        console.log('rendering SearchBar ...');

        return (
            <div className="search-bar-container">
                <form action="">
                    <Input
                        id="movie-search"
                        name="movie"
                        type="text"
                        title="Find your movie"
                        onChangeHandler={ this.handleSearchInput }
                        placeholder="Type your movie"
                    />

                    <div className="search-bar-search-by">
                        <span>Search By</span>

                        <Button
                            className="search-by-btn"
                            content="title"
                            dataType="title"
                            isActive={ this.isActive('title') }
                            onClickHandler={ this.handleSearchBy }
                        />

                        <Button
                            className="search-by-btn"
                            content="genre"
                            dataType="genre"
                            isActive={ this.isActive('genre') }
                            onClickHandler={ this.handleSearchBy }
                        />
                    </div>

                    <Button
                        content="search"
                        onClickHandler={ this.handleSearchButton }
                    />
                </form>
            </div>
        );
    }
}
