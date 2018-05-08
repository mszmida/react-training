import React from 'react';

const SearchResultCounter = (props) => {
    const { resultCounter } = props;

    if (!resultCounter) {
        return null;
    }

    console.log('rendering SearchResultCounter ...');

    return (
        <span>{ resultCounter } movies found</span>
    );
};

export default SearchResultCounter;
