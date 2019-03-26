import actionTypes from './actionTypes';

const initialState = {
  signedIn: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNED_IN:
      return { ...state, signedIn: true };
    case actionTypes.SIGNED_OUT:
      return { ...state, signedIn: false };
    default:
      return state;
  }
};
