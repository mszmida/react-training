import * as React from 'react';
import ReactDOM from 'react-dom';

import './assets/main.css';

export class App extends React.Component {
    render() {
        return <h1>Hello!</h1>;
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
