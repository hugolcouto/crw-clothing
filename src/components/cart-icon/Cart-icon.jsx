import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { ReactComponent as ShoppingIcon } from './shopping-bag.svg';
import './Cart-icon.scss';

const CartIcon = ({ toggleCartHidden, itemsCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemsCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
    itemsCount: cartItems.reduce(
        (accumulatedQuantity, cartItem) => (
            accumulatedQuantity + cartItem.quantity
        ), 0
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);