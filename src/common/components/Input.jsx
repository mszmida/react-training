import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
    const {
        id,
        className,
        name,
        title,
        type,
        value,
        placeholder,
        onChangeHandler
    } = props;

    return (
        <div className="form-input-container">
            <label htmlFor={ id }>{ title }</label>

            <input
                id={ id }
                className={ className }
                name={ name }
                type={ type }
                value={ value }
                placeholder={ placeholder }
                onChange={ onChangeHandler } />
        </div>
    );
};

Input.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text']).isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string
    ]),
    placeholder: PropTypes.string,
    onChangeHandler: PropTypes.func.isRequired
};

export default Input;
