import { ADD_TO_SLOT, REMOVE_FROM_SLOT } from './actionTypes';

export const addToSlot = (who, object) => dispatch => {
  dispatch({ type: ADD_TO_SLOT, who, object });
};

export const removeFromSlot = who => dispatch =>
  dispatch({ type: REMOVE_FROM_SLOT, who });
