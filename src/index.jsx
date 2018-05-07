import * as React from 'react';
import ReactDOM from 'react-dom';

import './assets/main.css';

import { FirstWayComponent } from './components/initial/first.way';
import { SecondWayComponent } from './components/initial/second.way';
import { ThirdWayComponent } from './components/initial/third.way';
import { FourthWayComponent } from './components/initial/fourth.way';

export class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Different definitions of components:</h1>
                <FirstWayComponent />
                <SecondWayComponent />
                <ThirdWayComponent />
                <FourthWayComponent />
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
