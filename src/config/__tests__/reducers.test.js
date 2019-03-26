import { reducers } from '../reducers';

describe('Reducers.', () => {
  describe('Snapshots.', () => {
    test('should match', () => {
      expect(reducers).toMatchSnapshot();
    });
  });
});
