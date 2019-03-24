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

export const selectFeeling = createSelector(
  [selectMoodState, (state, id) => id],
  (state, id) => {
    return !!state.feelings.find(feeling => {
      // console.log('feeling', feeling);
      // console.log('feeling.id', feeling.feeling.id);
      // console.log('typeof id', typeof id);
      return feeling.id === id;
    });
  }
);
