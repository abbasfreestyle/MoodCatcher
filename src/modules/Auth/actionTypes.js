import { keyMirror } from 'utils/keyMirror';
import { addNameToActionTypes } from 'utils/addNameToActionTypes';

import { NAME } from './name';

const actionTypes = ['SIGNED_IN', 'SIGNED_OUT'];

export default addNameToActionTypes(NAME, keyMirror(actionTypes));
