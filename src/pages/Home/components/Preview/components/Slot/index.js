import React from 'react';

import { PreviewSlotWrapper } from './index.style';

const PreviewSlot = ({ name, biography, image }) => {
  return (
    <PreviewSlotWrapper>
      <img src={image.url} />
      <p>
        <span>Secret identity: </span>
        {name}
      </p>

      <p>
        <span>Full Name: </span>
        {biography['full-name']}
      </p>

      <p>
        <span>Birth In: </span>
        {biography['place-of-birth']}
      </p>
    </PreviewSlotWrapper>
  );
};

export default PreviewSlot;
