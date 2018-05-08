import React from 'react';

export function FirstWayComponent() {
    const code = React.createElement(
        'code',
        null,
        'React.createElement()'
    );

    return React.createElement(
        'p',
        { className: 'component' },
        'This component has been created by usage of ',
        code,
        ' function.'
    );
}
