import { CartActionTypes } from './cart-types';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

export const cartReducer = (state = INITIAL_STATE, action) => {
    if (action.type === CartActionTypes.TOGGLE_CART_HIDDEN) {
        return {
            ...state,
            hidden: !state.hidden
        }
    } else if (action.type === CartActionTypes.ADD_ITEM) {
        return {
            ...state,
            cartItems: [...state.cartItems, action.payload]
        }
    }
    return state;
}