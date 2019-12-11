import { actionType } from './shop.types';

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case actionType.FETCHING_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      }
    case actionType.FETCHING_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      }
    case actionType.FETCHING_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    case actionType.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      }
    default:
      return state
  }
}