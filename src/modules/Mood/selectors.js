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
