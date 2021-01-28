import React from 'react';
import styled from 'styled-components';
import { Close } from '@styled-icons/material';

const ChannelDetailView = ({ showDetail, closeDetail, channel }) => {
  const test = 1;
  return (
    <Container show={showDetail}>
      <Header>
        세부정보
        {channel.name}
        <CloseIcon onClick={closeDetail} />
      </Header>
      <Main>
        Main
      </Main>
    </Container>
  );
};

export default ChannelDetailView;

const Container = styled.div`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  flex-direction: column;
  width: 400px;
  height: 100%;
  background-color: yellow;
`;

const Header = styled.div`
  flex: 1.5;
  background-color: green;
  box-sizing: border-box;
  border-bottom: 1px solid gray;
  padding: 5px 20px;
`;

const Main = styled.div`
  flex: 16;
`;

const CloseIcon = styled(Close)`
  width: 20px;
  height: 20px;
`;
