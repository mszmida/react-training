import React from 'react';
import PropTypes from 'prop-types';

import './movie-details.scss';

const MovieDetails = (props) => {
    const {
        posterPath,
        title,
        tagline,
        voteAverage,
        releaseDate,
        runtime,
        overview
    } = props;

    return (
        <div className="movie-details">
            <div className="row around-xs">
                <div className="col-sm-3">
                    <img className="movie-details__poster" src={ posterPath } alt={ `Poster of ${title}` } />
                </div>

                <div className="col-sm-9">
                    <div className="movie-details__info">
                        <h2 className="movie-details__title">{ title }</h2>
                        <span className="movie-details__rating">{ voteAverage }</span>

                        { tagline &&
                            <p className="movie-details__tagline">{ tagline }</p>
                        }

                        <div className="movie-details__year-duration">
                            <span>{ new Date(releaseDate).getFullYear() }</span>

                            <span>{ runtime } min</span>
                        </div>

                        <p>{ overview }</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

MovieDetails.defaultProps = {
    posterPath: 'http://via.placeholder.com/270x380'
};

MovieDetails.propTypes = {
    posterPath: PropTypes.string,
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string,
    voteAverage: PropTypes.number.isRequired,
    releaseDate: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired
};

export default MovieDetails;
