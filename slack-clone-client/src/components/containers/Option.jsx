import React from 'react';

/* eslint-disable */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import {
  OptionDiv,
  OptionArrowDiv,
  OptionSearchDiv,
  OptionInput,
  LeftArrowDiv,
  RightArrowDiv,
} from '../views/StyledComponents';
import * as style from '../views/styledVariables';

const Option = (props) => {
  const [arrowLeft, setArrowLeft] = React.useState(false);
  const [arrowRight, setArrowRight] = React.useState(false);

  return (
    <OptionDiv>
      <OptionArrowDiv>
        <RightArrowDiv
          background={arrowRight}
          onMouseEnter={mouseEnterEventRight}
          onMouseLeave={mouseLeaveEvent}
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{ color: arrowRight ? '#DEDEDE' : style.lightPurple }}
            onClick={forwardSpace}
          />
        </RightArrowDiv>
        <LeftArrowDiv
          background={arrowLeft}
          onMouseEnter={mouseEnterEventLeft}
          onMouseLeave={mouseLeaveEvent}
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{ color: arrowLeft ? '#DEDEDE' : style.lightPurple }}
            onClick={backSpace}
          />
        </LeftArrowDiv>
      </OptionArrowDiv>
      <OptionSearchDiv>
        <OptionInput borderColor={style.lightPurple} type="text" />
      </OptionSearchDiv>
    </OptionDiv>
  );

  function backSpace() {
    console.log('back space button');
  }

  function forwardSpace() {
    console.log('forward space button');
  }

  function mouseEnterEventRight() {
    setArrowRight(!arrowRight);
  }

  function mouseEnterEventLeft() {
    setArrowLeft(!arrowLeft);
  }

  function mouseLeaveEvent() {
    console.log('mouse leave');
    if(arrowRight) setArrowRight(!arrowRight);
    if(arrowLeft) setArrowLeft(!arrowLeft);
  }
};

export default Option;