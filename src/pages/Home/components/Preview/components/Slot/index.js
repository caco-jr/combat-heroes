import React from 'react';

import { PreviewSlotWrapper } from './index.style';
import PreviewRandom from '../Random';

const PreviewSlot = props => {
  const { name, biography, image, slotName } = props;

  return (
    <PreviewSlotWrapper>
      <PreviewRandom slotName={slotName} />

      {name ? (
        <>
          <img src={image.url} />
          <p>
            <span>Secret identity: </span>
            {name}
          </p>

          <p>
            <span>Full Name: </span>
            {biography.fullName}
          </p>

          <p>
            <span>Birth In: </span>
            {biography.placeOfBirth}
          </p>
        </>
      ) : null}
    </PreviewSlotWrapper>
  );
};

export default PreviewSlot;
