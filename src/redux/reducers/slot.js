import { ADD_TO_SLOT, REMOVE_FROM_SLOT } from '../actions/actionTypes';

const initialState = {
  playerOne: {},
  playerTwo: {}
};

export const slotReducer = (state = initialState, action) => {
  const { type, who, object } = action;

  switch (type) {
    case ADD_TO_SLOT:
      return {
        ...state,
        [who]: object
      };

    case REMOVE_FROM_SLOT:
      return {
        ...state,
        [who]: object
      };

    default:
      return { ...state };
  }
};
