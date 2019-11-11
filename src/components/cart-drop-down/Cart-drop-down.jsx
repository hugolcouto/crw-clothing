import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/Cart-item';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';

import './Cart-drop-down.scss';
import { toggleCartHidden } from '../../redux/cart/cart-actions';

const CartDropDown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
        {
            cartItems.length
                ? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                : (<span className="empty-message">Seu carrinho está vazio</span>)
        }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden())
        }}>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropDown));
