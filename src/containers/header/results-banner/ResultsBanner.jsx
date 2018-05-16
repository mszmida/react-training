import React from 'react';

import MoviesGenre from './movies-genre/MoviesGenre';
import MoviesQuantity from './movies-quantity/MoviesQuantity';
import SortByButtons from './sort-by-buttons/SortByButtons';

import './results-banner.scss';

const ResultsBanner = (props) => {
    const {
        genre,
        resultsQuantity,
        onSortByChange,
        sortBy
    } = props;

    console.log('rendering ResultsBanner ...');

    return (
        <div className="results-banner">
            <div className="row">
                <div className="col-xs">
                    <div className="results-banner-info">
                        <MoviesGenre genre={ genre } />

                        {
                            !genre &&
                                <MoviesQuantity quantity={ resultsQuantity } />
                        }
                    </div>
                </div>

                <div className="col-xs">
                    {
                        !genre &&
                            <SortByButtons
                                onSortByChange={ onSortByChange }
                                sortBy={ sortBy } />
                    }
                </div>
            </div>
        </div>
    );
};

export default ResultsBanner;
