import { types } from '../__mocks__/ofType';
import { ofType } from '../ofType';

describe('Utils > Returning the correct types', () => {
  describe('Snapshots', () => {
    it('oftype mocks should match the snapshot', () => {
      expect(types).toMatchSnapshot();
    });
  });

  describe('Returns the correct value', () => {
    types.toTest.forEach((type, index) => {
      it(`Should return ${JSON.stringify(type)} as type ${
        types.expect[index]
      }`, () => {
        expect(ofType(type)).toEqual(types.expect[index]);
      });
    });
  });
});
