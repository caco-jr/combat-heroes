import React from 'react';
import { connect } from 'react-redux';

import { addToSlot } from '../../../redux/actions/slot';
import { CardTitle, CardWrapper, CardMask, CardContent } from './index.style';

const Card = ({ name, imageURL, id, slots, addToSlot }) => {
  const isSelected = () => Object.values(slots).some(item => item.id === id);

  return (
    <CardWrapper>
      <img src={imageURL} />
      <CardContent>
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

        <CardTitle>{name}</CardTitle>
      </CardContent>

      <CardMask />
    </CardWrapper>
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
