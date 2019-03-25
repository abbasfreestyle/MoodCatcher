import { createSelector } from 'reselect';
import { NAME } from './constants';

const selectMoodState = state => state[NAME];

export const selectMood = createSelector(
  selectMoodState,
  state => state.mood
);

export const selectFeelings = createSelector(
  selectMoodState,
  state => state.feelings
);

export const selectComment = createSelector(
  selectMoodState,
  state => state.comment
);

export const selectPostData = createSelector(
  selectMoodState,
  state => state
);

export const selectFeeling = createSelector(
  [selectMoodState, (state, id) => id],
  (state, id) => !!state.feelings.find(feeling => feeling.id === id)
);
