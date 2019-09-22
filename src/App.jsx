import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './styles/style.scss';

import { Home } from './pages/Home';
import { Hats } from './pages/Hats';
import SignInAndSignUpPage  from './pages/sign-in-and-sign-up/SignInAndSignUpPage';
import Header from './components/header/Header';
import ShopPage from './pages/shop/ShopPage';
import { setCurrentUser } from './redux/user/user-actions';

import { auth, createUserProfileDocument } from './utils/firebase';

class App extends Component {


    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    })
                })
            }
            setCurrentUser(userAuth);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/hats" component={Hats} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/signin" component={SignInAndSignUpPage} />
                </Switch>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
