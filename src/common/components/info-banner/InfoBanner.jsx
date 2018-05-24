import React from 'react';

import './info-banner.scss';

const InfoBanner = ({ children }) => {
    return (
        <div className="info-banner">
            { children }
        </div>
    );
};

export default InfoBanner;
