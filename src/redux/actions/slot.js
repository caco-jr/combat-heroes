import { ADD_TO_SLOT, REMOVE_FROM_SLOT } from './actionTypes';

export const addToSlot = () => dispatch => {
  dispatch({ type: ADD_TO_SLOT });
};

export const removeFromSlot = () => dispatch =>
  dispatch({ type: REMOVE_FROM_SLOT });
