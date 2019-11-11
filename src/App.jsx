import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './styles/style.scss';

import Home from './pages/Home';
import Hats from './pages/Hats';
import Checkout from './components/checkout/Checkout';
import SignInAndSignUpPage  from './pages/sign-in-and-sign-up/SignInAndSignUpPage';
import Header from './components/header/Header';
import ShopPage from './pages/shop/ShopPage';
import { setCurrentUser } from './redux/user/user-actions';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect'

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
                    <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage/>)} />
                    <Route path="/checkout" exact component={Checkout}/>
                </Switch>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
