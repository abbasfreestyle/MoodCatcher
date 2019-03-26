import theme from '../theme';

describe('Theme.', () => {
  describe('Snapshots.', () => {
    test('should match', () => {
      expect(theme).toMatchSnapshot();
    });
  });
});
