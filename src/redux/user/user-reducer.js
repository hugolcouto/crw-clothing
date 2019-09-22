const INITIAL_STATE = {
    currentUser: null
}

export const userReducer = (state = INITIAL_STATE, action) => {
    if(action.type === 'SET_CURRENT_USER') {
        return { ...state, currentUser: action.payload}
    }
    return state;
}