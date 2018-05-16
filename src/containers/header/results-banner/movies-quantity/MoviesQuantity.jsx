import React from 'react';

const MoviesQuantity = (props) => {
    const { quantity } = props;

    if (!quantity) {
        return null;
    }

    return(
        <div>{ quantity } movies found</div>
    );
};

export default MoviesQuantity;
