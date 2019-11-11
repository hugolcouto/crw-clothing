import React from 'react';
import './header.scss';
import { ReactComponent as Logo } from './crown.svg';
import { Link } from 'react-router-dom';
import { auth } from '../../utils/firebase';
import { connect } from 'react-redux';
import CartDropDown from '../cart-drop-down/Cart-drop-down';
import CartIcon from '../cart-icon/Cart-icon';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

const header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link to="/"><Logo className="logo"/></Link>
        <div className="options">
            <Link className="option" to="/shop">Shop</Link>
            {/* <Link className="option" to="/shop">Contact</Link> */}
            { currentUser ?
                <div className="option" onClick={() => auth.signOut()}>Sign out</div>
                : <Link className="option" to="/signin">Sign in</Link>
            }
            <CartIcon/>
        </div>
        {
            hidden 
                ? null 
                : <CartDropDown/>
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(header);