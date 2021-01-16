import React from 'react';
import styled from 'styled-components';
import { InformationCircle } from '@styled-icons/heroicons-outline';

const ChannelHeader = (props) => {
  const { curChannel } = props;
  return (
    <HeaderContainer>
      <HeaderDiv>
        <ContentsContainer>
          {curChannel.name}
        </ContentsContainer>
        <IconContainer>
          <InformationIcon />
        </IconContainer>
      </HeaderDiv>
    </HeaderContainer>
  );
};

export default ChannelHeader;

const HeaderContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 10%;
  
  border-bottom: 1px solid gray;
  padding: 20px 40px;
`;

const HeaderDiv = styled.div`
  /* background-color: gray; */
  width: 100%;
  height: 100%;
  display: flex;
`;

const ContentsContainer = styled.div`
  background-color: blue;
  flex: 10;
`;

const IconContainer = styled.div`
  background-color: green;
  flex: 1;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  /* justify-content: center; */
`;

const InformationIcon = styled(InformationCircle)`
  width: 25px;
  height: 25px;
  color: gray;
`;
