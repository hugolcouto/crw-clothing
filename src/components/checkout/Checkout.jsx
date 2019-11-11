import React from 'react';
import './Checkout.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../checkout-item/Checkout-item';

const Checkout = ({ cartItems, total }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block"><span>Produto</span></div>
            <div className="header-block"><span>Descrição</span></div>
            <div className="header-block"><span>Quantidade</span></div>
            <div className="header-block"><span>Valor</span></div>
            <div className="header-block"><span>Remover</span></div>
        </div>
        { cartItems.map(cartItem => <CheckoutItem cartItem={cartItem} key={cartItem.id} />) }
        <div className="total"><span>TOTAL: ${total}</span></div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
