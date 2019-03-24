import actionTypes from './actionTypes';

export const setMood = mood => ({
  type: actionTypes.SET_MOOD,
  payload: { mood }
});

export const addFeeling = (feeling, id) => ({
  type: actionTypes.ADD_FEELING,
  payload: { id, feeling }
});

export const removeFeeling = id => ({
  type: actionTypes.REMOVE_FEELING,
  payload: { id }
});

export const updateComment = comment => ({
  type: actionTypes.UPDATE_COMMENT,
  payload: { comment }
});

export const resetEverything = () => ({
  type: actionTypes.RESET_EVERYTHING
});
