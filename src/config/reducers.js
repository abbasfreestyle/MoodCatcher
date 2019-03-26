import { combineReducers } from 'redux';

import { moodName, moodReducer } from 'modules/Mood';

export const reducers = {
  [moodName]: moodReducer
};

const combinedReducers = combineReducers(reducers);

export default combinedReducers;
