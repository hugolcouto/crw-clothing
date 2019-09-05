import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/style.scss';

import { Home } from './pages/Home';
import { Hats } from './pages/Hats';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/hats" component={Hats} />
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));