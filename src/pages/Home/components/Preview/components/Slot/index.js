import React from 'react';

import { PreviewSlotWrapper } from './index.style';
import PreviewRandom from '../Random';

const PreviewSlot = props => {
  const { name, biography, image } = props;

  return (
    <PreviewSlotWrapper>
      <PreviewRandom />

      {Object.values(props).length ? (
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
