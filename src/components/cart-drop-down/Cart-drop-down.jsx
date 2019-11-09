import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/Cart-item';
import { connect } from 'react-redux';

import './Cart-drop-down.scss';

const CartDropDown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
        {
            cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem}/>
            ))
        }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropDown);