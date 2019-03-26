import * as components from '..';

describe('Components.', () => {
  describe('Snapshots.', () => {
    test('should match', () => {
      expect(components).toMatchSnapshot();
    });
  });
});
