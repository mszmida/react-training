import React from "react";

// import './error.boundary.scss';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = { hasError: false };
    }

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error">
                    <h1>Something went wrong.</h1>
                </div>
            );
        }
        return this.props.children;
    }
}