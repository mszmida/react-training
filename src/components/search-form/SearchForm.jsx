import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../common/components/Input';
import Button from '../../common/components/Button';
import SearchByButtons from '../search-by-buttons/SearchByButtons';

import './search-form.scss';

export default class SearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: '',
            searchBy: 'title'
        };
    }

    static propTypes = {
        onSearchButtonClick: PropTypes.func.isRequired
    }

    handleSearchBarChange = (event) => {
        const { value } = event.target;

        console.log('Search value: ', value);

        this.setState({
            searchText: value
        });
    }

    handleSearchByChange = (event) => {
        const { type } = event.target.dataset;

        console.log('Search by: ', type);

        this.setState({
            searchBy: type
        });
    }

    handleSearchButtonClick = () => {
        this.props.onSearchButtonClick({ ...this.state });
    }

    render() {
        const { searchBy } = this.state;

        return (
            <form action="" className="search-form">
                <Input
                    id="movie-search-bar"
                    className="search-form-bar"
                    name="movie"
                    type="text"
                    title="Find your movie"
                    placeholder="Type your movie"
                    onChangeHandler={ this.handleSearchBarChange } />

                <div className="row">
                    <div className="col-xs">
                        <SearchByButtons
                            onSearchByChange={ this.handleSearchByChange }
                            searchBy={ searchBy } />
                    </div>

                    <div className="col-xs">
                        <Button
                            className="button search-form-button active"
                            content="search"
                            onClickHandler={ this.handleSearchButtonClick } />
                    </div>
                </div>
            </form>
        );
    }
};

