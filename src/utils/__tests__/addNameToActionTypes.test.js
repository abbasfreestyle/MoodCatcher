import { actionTypes, name } from '../__mocks__/addNameToActionTypes';
import { addNameToActionTypes } from '../addNameToActionTypes';
import { ofType } from '../ofType';

describe('Utils > Add name to action types', () => {
  it('Should add a reducer path to the action types value.', () => {
    expect(addNameToActionTypes(name.correct, actionTypes.mock)).toEqual(
      actionTypes.expect
    );
  });

  describe('Error handling', () => {
    actionTypes.invalid.forEach(type => {
      it(`Should throw an error if action type is ${ofType(type)}.`, () => {
        expect(() => addNameToActionTypes(name.correct, type)).toThrowError(
          'addNameToActionTypes(): Action type is not an object'
        );
      });
    });

    name.empty.forEach(param => {
      it(`Should throw an error if ${param} is provided.`, () => {
        expect(() =>
          addNameToActionTypes(param, actionTypes.mock)
        ).toThrowError(
          'addNameToActionTypes(): A reducer name is not supplied'
        );
      });
    });

    it('Should throw an error if the name does not start with a capital letter.', () => {
      expect(() =>
        addNameToActionTypes(name.lowerCase, actionTypes.mock)
      ).toThrowError(
        'addNameToActionTypes(): The reducer name must start with a capital letter'
      );
    });

    name.invalid.forEach(invalidName => {
      it(`Should throw an error if ${JSON.stringify(
        invalidName
      )} is not a string`, () => {
        expect(() =>
          addNameToActionTypes(invalidName, actionTypes.mock)
        ).toThrowError(
          'addNameToActionTypes(): The reducer name must be a string'
        );
      });
    });

    actionTypes.lowerCases.forEach(type => {
      it(`Should throw an error if action type is ${JSON.stringify(
        type
      )}.`, () => {
        expect(() => addNameToActionTypes(name.correct, type)).toThrowError(
          'addNameToActionTypes(): Action type key/value must not be lowercase'
        );
      });
    });
  });
});
