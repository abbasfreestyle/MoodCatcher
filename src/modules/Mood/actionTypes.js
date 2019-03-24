import { keyMirror } from 'utils/keyMirror';
import { addNameToActionTypes } from 'utils/addNameToActionTypes';

import { NAME } from './constants';

const actionTypes = [
  'SET_MOOD',
  'ADD_FEELING',
  'REMOVE_FEELING',
  'UPDATE_COMMENT',
  'RESET_EVERYTHING'
];

export default addNameToActionTypes(NAME, keyMirror(actionTypes));
