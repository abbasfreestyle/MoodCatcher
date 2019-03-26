import { isLowerCase } from '../isLowerCase';

describe('Utils > isLowerCase', () => {
  test('should return false if there is lower case found in string', () => {
    expect(isLowerCase('TESTING')).toEqual(false);
  });

  test('should return true if there is no lower case found in string', () => {
    expect(isLowerCase('TEsTING')).toEqual(true);
  });
});
