import React from 'react';
import { connect } from 'react-redux';

import { addToSlot } from '../../../redux/actions/slot';

const Card = ({ name, imageURL, id, slot, addToSlot }) => {
  return (
    <section>
      <button type="button" onClick={() => addToSlot('playerOne', { id })}>
        <img src={imageURL} />
      </button>

      <span>{name} </span>
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
