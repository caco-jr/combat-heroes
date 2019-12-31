import React from 'react';
import { connect } from 'react-redux';

import { addToSlot } from '../../../redux/actions/slot';

const Card = ({ name, imageURL, id, slots, addToSlot }) => {
  const isSelected = () => Object.values(slots).some(item => item.id === id);

  return (
    <section>
      <img src={imageURL} />

      {Object.keys(slots).map(item => (
        <button
          key={item}
          type="button"
          onClick={() => addToSlot(item, { id })}
          disabled={isSelected()}
        >
          {item}
        </button>
      ))}

      <p>{name} </p>
    </section>
  );
};

function mapStateToProps({ slots }) {
  return { slots };
}

function mapDispatchToProps(dispatch) {
  return {
    addToSlot: (who, object) => dispatch(addToSlot(who, object))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
