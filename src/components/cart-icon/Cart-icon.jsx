import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { ReactComponent as ShoppingIcon } from './shopping-bag.svg';
import './Cart-icon.scss';

const CartIcon = ({ toggleCartHidden, cartItems }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{cartItems.length}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);