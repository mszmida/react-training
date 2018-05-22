import React from 'react';

import './header.scss';

const Header = ({ topLeft, topRight, children }) => {
    console.log('rendering Header ...');

    return (
        <div className="header">
            <div className="header-top">
                <div className="row">
                    <div className="col-xs">
                        <div className="header-top-left">
                            { topLeft }
                        </div>
                    </div>

                    <div className="col-xs">
                        <div className="header-top-right">
                            { topRight }
                        </div>
                    </div>
                </div>
            </div>

            { children }
        </div>
    );
};

export default Header;
