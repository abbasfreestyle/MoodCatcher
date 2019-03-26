import types from '../actionTypes';
import * as actions from '../actions';

describe('Modules > Mood > actions', () => {
  test('should create an action to set a mood', () => {
    const mood = 6;
    const expected = {
      type: types.SET_MOOD,
      payload: { mood }
    };
    expect(actions.setMood(mood)).toEqual(expected);
  });

  test('should create an action to add a feeling', () => {
    const feeling = { id: 1, name: 'Relaxed' };
    const expected = {
      type: types.ADD_FEELING,
      payload: { feeling }
    };
    expect(actions.addFeeling(feeling)).toEqual(expected);
  });

  test('should create an action to remove a feeling', () => {
    const id = 1;
    const expected = {
      type: types.REMOVE_FEELING,
      payload: { id }
    };
    expect(actions.removeFeeling(id)).toEqual(expected);
  });

  test('should create an action to update the comment', () => {
    const comment = 'Test comment.';
    const expected = {
      type: types.UPDATE_COMMENT,
      payload: { comment }
    };
    expect(actions.updateComment(comment)).toEqual(expected);
  });

  test('should create an action to reset everything', () => {
    const expected = { type: types.RESET_EVERYTHING };
    expect(actions.resetEverything()).toEqual(expected);
  });
});
