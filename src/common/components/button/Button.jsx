import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './button.scss';

const Button = (props) => {
    const {
        className,
        type,
        content,
        isActive,
        dataType,
        onClickHandler
    } = props;

    return (
        <button
            className={ classNames(className, { 'button--active': isActive }) }
            type={ type }
            data-type={dataType}
            onClick={ onClickHandler } >

            { content }
        </button>
    );
};

Button.defaultProps = {
    type: 'button'
};

Button.propTypes = {
    className: PropTypes.string,
    type: PropTypes.oneOf(['submit', 'reset', 'button']).isRequired,
    content: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    dataType: PropTypes.string,
    onClickHandler: PropTypes.func.isRequired
};

export default Button;
