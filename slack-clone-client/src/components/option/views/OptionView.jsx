import React from 'react';
import styled from 'styled-components';
import { LeftArrowAlt, RightArrowAlt } from '@styled-icons/boxicons-regular';

import GoogleLoginButton from '../../containers/GoogleLogin';

const OptionView = ({ hoverArrowIcon, mouseEnterEvent, mouseLeaveEvent }) => {
  const { leftArrow, rightArrow } = hoverArrowIcon;

  return (
    <OptionDiv>
      <OptionArrowDiv>
        <RightArrowDiv
          // background={arrowRight}
          onMouseEnter={() => mouseEnterEvent('left')}
          onMouseLeave={() => mouseLeaveEvent('left')}
        >
          <RightArrow hover={leftArrow} /* onClick={forwardSpace} */ />
        </RightArrowDiv>
        <LeftArrowDiv
          // background={arrowLeft}
          onMouseEnter={() => mouseEnterEvent('right')}
          onMouseLeave={() => mouseLeaveEvent('right')}
        >
          <LeftArrow hover={rightArrow} /* onClick={backSpace} */ />
        </LeftArrowDiv>
      </OptionArrowDiv>
      <OptionSearchDiv>
        <OptionInput type="text" />
      </OptionSearchDiv>
      <ProfileContainer>
        <ProfileDiv>
          <GoogleLoginButton />
        </ProfileDiv>
      </ProfileContainer>
    </OptionDiv>
  );
};

const OptionDiv = styled.div`
  background: #350d36;
  color: white;
  width: calc(100vw - 20px);
  flex: 1;
  display: flex;
`;

const OptionArrowDiv = styled.div`
  flex: 7;
  width: 300px;
  height: 20px;
  display: flex;
  flex-direction: row-reverse;
  align-self: center;
`;

const LeftArrowDiv = styled.div`
  border-radius: 3px;
  line-height: 5px;
`;

const LeftArrow = styled(LeftArrowAlt)`
  width: 23px;
  height: 23px;
  color: ${(props) => (props.hover ? '#DEDEDE' : props.theme.secondaryColor)};
`;

const RightArrowDiv = styled.div`
  border-radius: 3px;
  line-height: 5px;
  margin-left: 5px;
`;

const RightArrow = styled(RightArrowAlt)`
  width: 23px;
  height: 23px;
  color: ${(props) => (props.hover ? '#DEDEDE' : props.theme.secondaryColor)};
`;

const OptionSearchDiv = styled.div`
  flex: 11;
  padding-left: 10px;
  display: flex;
  align-items: center;
`;

const OptionInput = styled.input`
  background: ${(props) => props.theme.backgroundColor};
  border: 1px solid ${(props) => props.theme.secondaryColor};
  border-radius: 5px;
  height: 20px;
  width: 400px;
  color: #ededed;
`;

const ProfileContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
`;

const ProfileDiv = styled.div`
  width: 25px;
  height: 25px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default OptionView;
