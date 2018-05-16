import React from 'react';

const MoviesGenre = (props) => {
    const { genre } = props;

    if (!genre) {
        return null;
    }

    return(
        <div>Films by { genre } genre</div>
    );
};

export default MoviesGenre;
