import React from 'react';
import { connect } from 'react-redux';

import { addToSlot } from '../../../redux/actions/slot';

const Card = ({ name, imageURL, id, slot, addToSlot }) => {
  return (
    <section>
      <img src={imageURL} />
      <button
        type="button"
        onClick={() => addToSlot('playerOne', { id })}
        disabled={slot.playerTwo.id === id}
      >
        A
      </button>

      <button
        type="button"
        onClick={() => addToSlot('playerTwo', { id })}
        disabled={slot.playerOne.id === id}
      >
        B
      </button>

      <p>{name} </p>
    </section>
  );
};

function mapStateToProps({ slot }) {
  return { slot };
}

function mapDispatchToProps(dispatch) {
  return {
    addToSlot: (who, object) => dispatch(addToSlot(who, object))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
