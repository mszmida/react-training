import React from 'react';

import ErrorBoundary from '../../common/components/error-boundary/ErrorBoundary';

import './header.scss';

const Header = ({ topLeft, topRight, children }) => {
    return (
        <div className="header">
            <div className="header__top">
                <div className="row">
                    <div className="col-xs">
                        <div className="header__top-left">
                            { topLeft }
                        </div>
                    </div>

                    <div className="col-xs end-xs">
                        <div className="header__top-right">
                            { topRight }
                        </div>
                    </div>
                </div>
            </div>

            <ErrorBoundary>
                { children }
            </ErrorBoundary>
        </div>
    );
};

export default Header;
