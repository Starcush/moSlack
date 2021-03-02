import React from 'react';
import styled from 'styled-components';

import ChannelContentsList from '../container/ChannelContentsContainer';
import ChannelHeader from '../container/ChannelHeader';
// import ChannelDetail from '../container/ChannelDetail';
import ModalContainer from '../../modal/container/ModalContainer';
import InsertContainer from '../container/InsertContainer';

const ChannelView = ({
  showDetail, curChannel, showLoginErrorModal, setShowLoginErrorModal,
}) => (
  <ChannelContainer>
    <PrimaryContents showDetail={showDetail}>
      <ChannelHeader curChannel={curChannel} />
      <ChannelContentsList />
      <InsertContainer handleModal={setShowLoginErrorModal} />
      <ModalContainer type="loginError" showModal={showLoginErrorModal} handleClose={() => setShowLoginErrorModal(false)} />
    </PrimaryContents>
    <SecondaryContents>
      {/* <ChannelDetail /> */}
    </SecondaryContents>
  </ChannelContainer>
);

const ChannelContainer = styled.div`
  flex: 24;
  display: flex;
  flex-direction: row;
  width: calc((100vw - 20px) * (24 / 28));
  height: calc((100vh - 20px) * (39 / 41));
  box-sizing: border-box;
  border-bottom: 1px solid gray;
  border-right: 1px solid gray;
`;

const PrimaryContents = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ showDetail }) => (showDetail ? 'calc((100vw - 20px) * (24 / 28) - 400px)' : 'calc((100vw - 20px) * (24 / 28))')};
  box-sizing: border-box;
  border-right: 1px solid gray;
`;

const SecondaryContents = styled.div`
  width: 400px;
  height: 100%;
`;

export default ChannelView;
