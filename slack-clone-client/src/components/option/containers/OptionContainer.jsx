import React, { useState } from 'react';

import OptionView from '../views/OptionView';

const OptionContainer = () => {
  const [hoverArrowIcon, setHoverArrowIcon] = useState({
    leftArrow: false,
    rightArrow: false,
  });

  return (
    <OptionView
      hoverArrowIcon={hoverArrowIcon}
      mouseEnterEvent={mouseEnterEvent}
      mouseLeaveEvent={mouseLeaveEvent}
    />
  );

  // function backSpace() {
  //   console.log('back space button');
  // }

  // function forwardSpace() {
  //   console.log('forward space button');
  // }

  function mouseEnterEvent(direction) {
    if (direction === 'left') {
      setHoverArrowIcon({ ...hoverArrowIcon, leftArrow: true });
    } else {
      setHoverArrowIcon({ ...hoverArrowIcon, rightArrow: true });
    }
  }

  function mouseLeaveEvent(direction) {
    if (direction === 'left') {
      setHoverArrowIcon({ ...hoverArrowIcon, leftArrow: false });
    } else {
      setHoverArrowIcon({ ...hoverArrowIcon, rightArrow: false });
    }
  }
};

export default OptionContainer;
