import React from 'react';

import './footer.scss';

const Footer = ({ children }) => {
    return (
        <div className="footer">
            { children }
        </div>
    );
};

export default Footer;
