import { combineReducers } from 'redux';

import { slotReducer } from './slot';

export default combineReducers({ slots: slotReducer });
