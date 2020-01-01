import { ADD_TO_SLOT, REMOVE_FROM_SLOT } from './actionTypes';
import { getCharacterAPI } from '../../services/api';

export const addToSlot = (who, object) => dispatch => {
  const fields = `{
    id
    name
    image {
      url
    }
    biography {
      fullName
      placeOfBirth
    }
  }`;

  getCharacterAPI(object.id, fields).then(res => {
    dispatch({ type: ADD_TO_SLOT, who, object: res.data.character });
  });
};

export const removeFromSlot = who => dispatch =>
  dispatch({ type: REMOVE_FROM_SLOT, who });
