import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
    const {
        id,
        name,
        title,
        type,
        value,
        onChangeHandler,
        placeholder
    } = props;

    return (
        <div className="form-container">
            <label htmlFor={ id }>{ title }</label>

            <input
                id={ id }
                name={ name }
                type={ type }
                value={ value }
                onChange={ onChangeHandler }
                placeholder={ placeholder } />
        </div>
    );
}

Input.propTypes = {
    id: PropTypes.string.isRequired,
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
