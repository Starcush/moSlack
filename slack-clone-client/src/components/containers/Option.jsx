import React from 'react';

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

const Option = () => {
  const [mouseEnteredLeft, setMouseEnteredLeft] = React.useState(false);
  const [mouseEnteredRight, setMouseEnteredRight] = React.useState(false);

  return (
    <OptionDiv>
      <OptionArrowDiv>
        <RightArrowDiv
          background={mouseEnteredRight}
          onMouseEnter={mouseEnterEvent}
          onMouseLeave={mouseLeaveEvent}
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{ color: mouseEnteredRight ? '#DEDEDE' : style.lightPurple }}
            onClick={forwardSpace}
          />
        </RightArrowDiv>
        <LeftArrowDiv
          background={mouseEnteredLeft}
          onMouseEnter={mouseEnterEvent}
          onMouseLeave={mouseLeaveEvent}
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{ color: style.lightPurple }}
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

  function mouseEnterEvent() {
    console.log('mouse enter');
  }

  function mouseLeaveEvent() {
    console.log('mouse leave');
  }
};

export default Option;
