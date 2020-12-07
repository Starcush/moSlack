import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faUser } from '@fortawesome/free-solid-svg-icons';

import {
  OptionDiv,
  OptionArrowDiv,
  OptionSearchDiv,
  OptionInput,
  LeftArrowDiv,
  RightArrowDiv,
  ProfileContainer,
  ProfileDiv,
} from '../views/StyledComponents';
import * as style from '../views/styledVariables';

// option 영역에 프로필 div를 추가할 예정
// 로그인이 되지 않았을 때와
// 로그인이 됐을 때를 구분해서 아이콘이 나올 수 있도록
// 가져다 대면 내 닉네임이 대화상자처럼 나오고
// 클릭은 못한다
// 하지만 로그인이 안되있는 상태면 로그인이 가능한 팝업 창이 뜬다 => 이건 구글 소셜 로그인으로

const Option = () => {
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
      <ProfileContainer>
        <ProfileDiv>
          <FontAwesomeIcon icon={faUser} style={{ color: '#0074D9' }} />
        </ProfileDiv>
      </ProfileContainer>
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
    if (arrowRight) setArrowRight(!arrowRight);
    if (arrowLeft) setArrowLeft(!arrowLeft);
  }
};

export default Option;
