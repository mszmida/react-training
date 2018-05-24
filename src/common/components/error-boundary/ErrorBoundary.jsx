import React from "react";

import './error-boundary.scss';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            info: null
         };
    }

    componentDidCatch(error, info) {
        this.setState({
             error,
             info
        });
    }

    render() {
        const { error, info } = this.state;
        const { children } = this.props;

        if (!error) {
            return children;
        }

        return (
            <div className="error-boundary">
                <div className="error-boundary__message">
                    <span>An error occured:</span>
                    <pre>{ error.message }</pre>
                </div>

                <div className="error-boundary__stack">
                    <span>Stack trace:</span>
                    <pre>{ info.componentStack }</pre>
                </div>
            </div>
        );
    }
}
