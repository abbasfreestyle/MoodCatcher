import actionTypes from './actionTypes';

const initialState = {
  mood: 4,
  feelings: [],
  comment: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MOOD:
      return { ...state, mood: action.payload.mood };
    case actionTypes.ADD_FEELING:
      return {
        ...state,
        feelings: [...state.feelings, action.payload.feeling]
      };
    case actionTypes.REMOVE_FEELING: {
      const feelings = state.feelings.filter(
        feeling => feeling.id !== action.payload.id
      );
      return { ...state, feelings };
    }
    case actionTypes.UPDATE_COMMENT:
      return { ...state, comment: action.payload.comment };
    case actionTypes.RESET_EVERYTHING:
      return initialState;
    default:
      return state;
  }
};
