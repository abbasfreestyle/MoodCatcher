import { actionTypes } from '../__mocks__/keyMirror';
import { keyMirror } from '../keyMirror';

describe('Utils > Key mirror', () => {
  it('Should return an object wth a key and value', () => {
    expect(keyMirror(actionTypes.mock)).toEqual(actionTypes.expected);
  });

  describe('Error handling', () => {
    it('Should throw an error if action type is not an array.', () => {
      expect(() => keyMirror('wrong data')).toThrowError(
        'keyMirror(): The action type is not an array'
      );
    });
    const lowerCaseTypes = ['MOCK_LOAd', 'Mock_Load', 'mock_load'];
    lowerCaseTypes.forEach(type => {
      it(`Should throw an error if the action type is ${type}.`, () => {
        expect(() => keyMirror([type])).toThrowError(
          'keyMirror(): The action type must not be lowercase'
        );
      });
    });
  });
});
