import { ADD_TO_SLOT, REMOVE_FROM_SLOT } from '../actions/actionTypes';

export const slotReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_SLOT:
      return {
        ...state,
        slot: true
      };

    case REMOVE_FROM_SLOT:
      return {
        ...state,
        slot: false
      };

    default:
      return { ...state };
  }
};
