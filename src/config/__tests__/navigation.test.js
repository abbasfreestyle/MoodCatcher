import { screensConfig } from '../navigation';

describe('Navigation.', () => {
  describe('Snapshots.', () => {
    test('should match', () => {
      expect(screensConfig).toMatchSnapshot();
    });
  });
});
