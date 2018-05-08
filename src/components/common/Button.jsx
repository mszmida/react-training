import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    const {
        className,
        type,
        content,
        isActive,
        onClickHandler,
        dataType
    } = props;

    const getClassNames = () => {
        const classNamesArray = className ? className.split(' ') : [];

        if (isActive) {
            classNamesArray.push('active');
        }

        if (classNamesArray.length === 0) {
            return null;
        }

        return classNamesArray.join(' ');
    }

    return (
        <button
            className={ getClassNames() }
            type={ type }
            onClick={ onClickHandler }
            data-type={dataType}
        >
            { content }
        </button>
    );
}

Button.defaultProps = {
    type: 'button'
};

Button.propTypes = {
    className: PropTypes.string,
    type: PropTypes.oneOf(['submit', 'reset', 'button']).isRequired,
    content: PropTypes.string.isRequired,
    onClickHandler: PropTypes.func.isRequired,
    dataType: PropTypes.string,
};

export default Button;
