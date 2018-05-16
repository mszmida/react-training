import React from 'react';
import PropTypes from 'prop-types';

const Title = (props) => {
    const { title } = props;

    return(
        <span className="movie-item-title">{title}</span>
    );
};

Title.propTypes = {
    title: PropTypes.string.isRequired
};

export default Title;
