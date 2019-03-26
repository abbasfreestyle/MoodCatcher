import reducer, { initialState } from '../reducer';
import types from '../actionTypes';

describe('Modules > Mood > Reducer', () => {
  describe('Snapshot', () => {
    test('should match the initial state', () => {
      expect(initialState).toMatchSnapshot();
    });
  });

  describe('Behavior', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle SET_MOOD', () => {
      const action = { type: types.SET_MOOD, payload: { mood: 8 } };

      expect(reducer(initialState, action)).toEqual({
        ...initialState,
        mood: action.payload.mood
      });
    });

    it('should handle ADD_FEELING', () => {
      const action = {
        type: types.ADD_FEELING,
        payload: { feeling: { id: 1, name: 'Relaxed' } }
      };
      const addedFeeling = {
        ...initialState,
        feelings: [action.payload.feeling]
      };
      expect(reducer(initialState, action)).toEqual(addedFeeling);

      const secondAction = {
        type: types.ADD_FEELING,
        payload: { feeling: { id: 2, name: 'Happy' } }
      };
      expect(reducer(addedFeeling, secondAction)).toEqual({
        ...initialState,
        feelings: [...addedFeeling.feelings, secondAction.payload.feeling]
      });
    });

    it('should handle REMOVE_FEELING', () => {
      const action = {
        type: types.REMOVE_FEELING,
        payload: { id: 1 }
      };
      const addedFeeling = {
        ...initialState,
        feelings: [{ id: 1, name: 'Relaxed' }]
      };
      expect(reducer(addedFeeling, action)).toEqual({
        ...initialState,
        feelings: []
      });
    });

    it('should handle UPDATE_COMMENT', () => {
      const action = {
        type: types.UPDATE_COMMENT,
        payload: { comment: 'New comment' }
      };
      expect(reducer(initialState, action)).toEqual({
        ...initialState,
        comment: action.payload.comment
      });
    });

    it('should handle RESET_EVERYTHING', () => {
      const action = { type: types.RESET_EVERYTHING };
      const activeState = {
        mood: 7,
        feelings: [{ id: 1, name: 'Relaxed' }, { id: 2, name: 'Happy' }],
        comment: 'Added text'
      };
      expect(reducer(activeState, action)).toEqual(initialState);
    });
  });
});
