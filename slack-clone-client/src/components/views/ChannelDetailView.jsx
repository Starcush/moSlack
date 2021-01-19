import React from 'react';
import styled from 'styled-components';
import { Close } from '@styled-icons/material';

const ChannelDetailView = ({ showDetail, closeDetail }) => {
  const test = 1;
  return (
    <Container show={showDetail}>
      <Header>
        <h1>Header</h1>
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
`;

const Header = styled.div`
  flex: 3;
  background-color: yellow;
`;

const Main = styled.div`
  flex: 10;
`;

const CloseIcon = styled(Close)`
  width: 20px;
  height: 20px;
`;
