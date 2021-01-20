import React from 'react';
import styled from 'styled-components';
import { InformationCircle } from '@styled-icons/heroicons-outline';

const ChannelHeaderView = ({ curChannel, handleDetailDiv }) => (
  <HeaderContainer>
    <HeaderDiv>
      <ContentsContainer>
        <Title>
          {`# ${curChannel.name}`}
        </Title>
      </ContentsContainer>
      <IconContainer>
        <InformationIcon onClick={handleDetailDiv} />
      </IconContainer>
    </HeaderDiv>
  </HeaderContainer>
);

export default ChannelHeaderView;

const HeaderContainer = styled.div`
  flex: 1.5;
  box-sizing: border-box;
  width: 100%;
  /* height: 10%; */
  display: flex;
  align-items: center;
  
  border-bottom: 1px solid gray;
  padding: 5px 40px;
`;

const HeaderDiv = styled.div`
  /* background-color: gray; */
  width: 100%;
  /* height: 100%; */
  display: flex;
`;

const ContentsContainer = styled.div`
  /* background-color: blue; */
  flex: 10;
  display: flex;
  align-items: center;
`;

const Title = styled.span`
  font-weight: 800;
  font-size: 18px;
`;

const IconContainer = styled.div`
  /* background-color: green; */
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
