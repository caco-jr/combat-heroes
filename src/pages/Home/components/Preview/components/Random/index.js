import React from 'react';
import { connect } from 'react-redux';

import { addToSlot } from '../../../../../../redux/actions/slot';
import { randomIntFromInterval, LAST_ID } from '../../../../../../helpers';

const PreviewRandom = ({ addToSlot, slotName }) => {
  const handleRandom = () => {
    addToSlot(slotName, { id: randomIntFromInterval(1, LAST_ID) });
  };

  return (
    <button type="button" onClick={handleRandom}>
      Aleatório
    </button>
  );
};

const mapDispatchToProps = dispatch => ({
  addToSlot: (who, object) => dispatch(addToSlot(who, object))
});

export default connect(null, mapDispatchToProps)(PreviewRandom);
