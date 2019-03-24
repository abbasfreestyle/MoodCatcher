import { ofType } from './ofType';
import { isLowerCase } from './isLowerCase';

export const addNameToActionTypes = (name, types) => {
  if (!name) {
    throw new Error('addNameToActionTypes(): A reducer name is not supplied');
  }

  if (ofType(name) !== 'string') {
    throw new Error(
      'addNameToActionTypes(): The reducer name must be a string'
    );
  }

  if (isLowerCase(name[0])) {
    throw new Error(
      'addNameToActionTypes(): The reducer name must start with a capital letter'
    );
  }

  if (ofType(types) !== 'object') {
    throw new Error('addNameToActionTypes(): Action type is not an object');
  }

  const fixedTypes = {};

  Object.entries(types).forEach(([actionType, key]) => {
    if (isLowerCase(key) || isLowerCase(actionType)) {
      throw new Error(
        'addNameToActionTypes(): Action type key/value must not be lowercase'
      );
    }
    fixedTypes[actionType] = `${name}/${types[actionType]}`;
  });
  return fixedTypes;
};
