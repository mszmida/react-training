import React from 'react';

// import './movie.item.scss';

export default function MovieItem(props) {
    const { movie } = props;

    return (
        <div className="movie-item">
            <div className="container">
                <h2>{movie.title}</h2>
            </div>
        </div>
    );
}
