import { ofType } from './ofType';
import { isLowerCase } from './isLowerCase';

export const keyMirror = actionTypes => {
  // Throw Error if the passed in argument is NOT an array
  if (ofType(actionTypes) !== 'array') {
    throw new Error('keyMirror(): The action type is not an array');
  }

  // Setup a new object
  const newObject = {};

  actionTypes.forEach(type => {
    // Throw Error if any of the values are lowercase
    if (isLowerCase(type)) {
      throw new Error('keyMirror(): The action type must not be lowercase');
    }
    newObject[type] = type;
  });
  return newObject;
};
