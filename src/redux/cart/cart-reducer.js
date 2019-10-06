import { CartActionTypes } from './cart-types';

const INITIAL_STATE = {
    hidden: true
}

export const cartReducer = (state = INITIAL_STATE, action) => {
    if (action.type === CartActionTypes.TOGGLE_CART_HIDDEN) {
        return {
            ...state,
            hidden: !state.hidden
        }
    }
    return state;
}