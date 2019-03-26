import { combineReducers } from 'redux';

import { moodName, moodReducer } from 'modules/Mood';
import { authName, authReducer } from 'modules/Auth';

const combinedReducers = combineReducers({
  [moodName]: moodReducer,
  [authName]: authReducer
});

export default combinedReducers;
