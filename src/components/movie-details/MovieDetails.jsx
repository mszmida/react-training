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

    console.log('rendering MovieDetails ...');

    return(
        <div className="movie-details">
            <div className="row">
                <div className="col-xs-3">
                    <img className="movie-details-poster" src={ posterPath } alt={ `Poster of ${title}` } />
                </div>

                <div className="col-xs-9">
                    <div className="movie-details-info">
                        <div className="row">
                            <div className="col-xs-3">
                                <span className="movie-details-title">{ title }</span>
                                <span className="movie-details-tagline">{ tagline }</span>
                            </div>

                            <div className="col-xs-9">
                                <span className="movie-details-rating">{ voteAverage }</span>
                            </div>
                        </div>

                        <div className="row movie-details-year-duration">
                            <div className="col-xs-1">
                                <span className="movie-details-year">{ new Date(releaseDate).getFullYear() }</span>
                            </div>

                            <div className="col-xs-9">
                                <span className="movie-details-duration">{ runtime } min</span>
                            </div>
                        </div>

                        <div className="movie-details-overview">{ overview }</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

MovieDetails.defaultProps = {
    posterPath: 'http://via.placeholder.com/200x300'
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
