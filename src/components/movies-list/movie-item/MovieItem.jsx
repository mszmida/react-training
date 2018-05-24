import React from 'react';
import PropTypes from 'prop-types';

import './movie-item.scss';

const MovieItem = (props) => {
    const {
        id,
        posterPath,
        title,
        releaseDate,
        genres,
        onClickHandler
    } = props;

    return (
        <div className="movie-item" data-movie-id={ id } onClick={ onClickHandler }>
            <img className="movie-item__poster" src={ posterPath } alt={ `Poster of ${ title }` } />

            <div className="movie-item__info">
                <div className="movie-item__header">
                    <div className="row">
                        <div className="col-sm-9">
                            <h3 className="movie-item__title">{ title }</h3>
                        </div>

                        <div className="col-sm-3 end-xs">
                            <span className="movie-item__year">{ new Date(releaseDate).getFullYear() }</span>
                        </div>
                    </div>
                </div>

                <p>{ genres.join(' & ') }</p>
            </div>
        </div>
    );
};

MovieItem.defaultProps = {
    posterPath: 'http://via.placeholder.com/350x450'
};

MovieItem.propTypes = {
    id: PropTypes.number.isRequired,
    posterPath: PropTypes.string,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    onClickHandler: PropTypes.func.isRequired
};

export default MovieItem;
