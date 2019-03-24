import { combineReducers } from 'redux';

import { moodName, moodReducer } from 'modules/Mood';

const combinedReducers = combineReducers({
  [moodName]: moodReducer
});

export default combinedReducers;
