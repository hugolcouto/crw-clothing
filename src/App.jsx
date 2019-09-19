import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/style.scss';

import { Home } from './pages/Home';
import { Hats } from './pages/Hats';
import SignInAndSignUpPage  from './pages/sign-in-and-sign-up/SignInAndSignUpPage';
import Header from './components/header/Header';
import ShopPage from './pages/shop/ShopPage';

import { auth } from './utils/firebase';

class App extends Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user });

            console.log(user);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <BrowserRouter>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/hats" component={Hats} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/signin" component={SignInAndSignUpPage} />
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));