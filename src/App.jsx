import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './styles/style.scss';

import { Home } from './components/pages/Home';

class App extends Component {
    render() {
        return (
            <div>
                <Home/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));