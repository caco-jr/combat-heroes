import React from 'react';
import { connect } from 'react-redux';

import { PreviewWrapper, PreviewBackground } from './index.style';
import PreviewSlot from './components/Slot';

const Preview = ({ slots }) => {
  return (
    <PreviewBackground>
      <PreviewWrapper className="container">
        {Object.entries(slots).map((item, index) => (
          <PreviewSlot key={index} {...item[1]} slotName={item[0]} />
        ))}
      </PreviewWrapper>
    </PreviewBackground>
  );
};

const mapStateToProps = ({ slots }) => ({ slots });

export default connect(mapStateToProps)(Preview);
