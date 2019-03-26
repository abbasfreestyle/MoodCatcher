import actionTypes from '../actionTypes';

describe('Mood > actionTypes snapshot', () => {
  test('should match', () => {
    expect(actionTypes).toMatchSnapshot();
  });
});
