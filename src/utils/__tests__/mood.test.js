import { minRange, maxRange, moodPercentage } from '../mood';

describe('Utils > Mood', () => {
  describe('Snapshots.', () => {
    test('should match the minRange snapshot', () => {
      expect(minRange).toMatchSnapshot();
    });
    test('should match the maxRange snapshot', () => {
      expect(maxRange).toMatchSnapshot();
    });
  });

  describe('Behavior.', () => {
    test('should output 0 if the min range is provided.', () => {
      expect(moodPercentage(minRange)).toEqual(0);
    });
    test('should output 1 if the max range is provided.', () => {
      expect(moodPercentage(maxRange)).toEqual(1);
    });

    test('should output 0.5 if the middle of the range is provided.', () => {
      expect(moodPercentage((minRange + maxRange) / 2)).toEqual(0.5);
    });
  });
});
