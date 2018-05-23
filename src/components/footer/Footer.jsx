import React from 'react';

import ErrorBoundary from '../../common/components/error-boundary/ErrorBoundary';

import './footer.scss';

const Footer = ({ children }) => {
    return (
        <div className="footer">
            <ErrorBoundary>
                { children }
            </ErrorBoundary>
        </div>
    );
};

export default Footer;
